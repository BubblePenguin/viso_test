"use client";

import RecipeList from "../components/recipes/RecipeList";
import SearchBar from "../components/searchBar/SearchBar";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Home() {
  return (
    <div className="">
      <SearchBar />
      <RecipeList
        meals={useSelector((state: RootState) => state.recipeList.list)}
      />
    </div>
  );
}
