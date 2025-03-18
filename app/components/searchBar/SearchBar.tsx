"use client";

import {
  getAllRecipes,
  getByLetter,
  getByName,
} from "@/app/actions/getRecipes";
import { Meal } from "@/app/interfaces/Meal";
import { set, setFilter } from "@/app/store/slice";
import { RootState } from "@/app/store/store";
import { useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

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
        dispatch(set(await getAllRecipes()));
      } else if (query?.length === 1) {
        dispatch(set(await getByLetter(query)));
      } else if (query?.length > 1) {
        dispatch(set(await getByName(query)));
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const getCategoryes = (list: Meal[]) => {
    if (!list) return [];
    const arr = list.map((i) => i.strCategory);
    return arr ? [...new Set(arr)] : [];
  };

  const categories = getCategoryes(
    useSelector((state: RootState) => state.recipeList.list)
  );

  return (
    <div className="px-10 w-full">
      <form
        onSubmit={() => {}}
        noValidate
        className="flex justify-center items-center"
      >
        <input
          className="bg-white px-5 py-2 rounded-md flex-grow"
          {...register("search")}
          placeholder="Type in meal name..."
        />

        <Select
          className="w-96 ml-3 focus:border-black"
          classNames={{
            control: (state) =>
              state.isFocused ? "border-black" : "border-grey-300",
          }}
          placeholder={`Category filter..`}
          isMulti
          options={categories.map((i) => ({ value: i, label: i }))}
          onChange={(v) => dispatch(setFilter(v.map((i) => i.value)))}
        />
      </form>
    </div>
  );
};

export default SearchBar;
