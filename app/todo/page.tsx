"use client";

import RecipeList from "../components/recipes/RecipeList";
import mock from "@/public/mock.json";
import ToDoCounter from "../components/todoCounter";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Home() {
  return (
    <div className="">
      <ToDoCounter
        meals={useSelector((state: RootState) => state.recipeList.todolist)}
      />
      <RecipeList
        meals={useSelector((state: RootState) => state.recipeList.todolist)}
      />
    </div>
  );
}
