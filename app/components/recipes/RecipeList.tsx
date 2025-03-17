"use client";

import { Meal } from "@/app/interfaces/Meal";
import RecipeItem from "./RecipeListItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";

interface ListProps {
  meals: Meal[];
}

const RecipeList: React.FC<ListProps> = () => {
  let meals = useSelector((state: RootState) => state.recipeList.list);

  return (
    <>
      <div className="flex flex-wrap gap-5 p-10 w-full justify-between ">
        {meals &&
          meals.map((item: Meal) => (
            <RecipeItem key={item.idMeal} meal={item} />
          ))}
      </div>
    </>
  );
};

export default RecipeList;
