"use client";

import {
  getAllRecipes,
  getByLetter,
  getByName,
} from "@/app/actions/getRecipes";
import axios from "@/app/lib/axios";
import { set } from "@/app/store/slice";
import { useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const { register, watch } = useForm();
  const dispatch = useDispatch();

  const searchValue = watch("search", "");

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchResults(searchValue);
    }, 500); // Дебаунс 500мс

    return () => clearTimeout(handler);
  }, [searchValue]);

  const fetchResults = async (query?: string) => {
    try {
      console.log(query);

      if (!query || !(query?.length > 0) || query.toLowerCase() === "all") {
        const data = await getAllRecipes();
        dispatch(set(data));
      } else if (query?.length === 1) {
        const data = await getByLetter(query);
        dispatch(set(data));
      } else if (query?.length > 1) {
        const data = await getByName(query);
        dispatch(set(data));
      }
    } catch (error) {
      console.error("Ошибка при запросе: ", error);
    }
  };

  return (
    <div className="px-10 w-full">
      <form>
        <input
          className="bg-gray-100 px-5 py-3 rounded-md w-full"
          {...register("search")}
          placeholder="Type in meal name..."
        />
      </form>
    </div>
  );
};

export default SearchBar;
