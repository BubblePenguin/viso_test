"use client";

import { Meal } from "@/app/interfaces/Meal";
import RecipeItem from "./RecipeListItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

interface ListProps {
  meals: Meal[];
}

const CurrentRecipes = ({ currentItems }: { currentItems: Meal[] }) =>
  currentItems &&
  currentItems.map((item: Meal) => (
    <RecipeItem key={item.idMeal} meal={item} />
  ));

const RecipeList: React.FC<ListProps> = () => {
  const meals = useSelector((state: RootState) => state.recipeList.list);
  const filter = useSelector(
    (state: RootState) => state.recipeList.filter as string[]
  );

  const items =
    meals &&
    (filter.length !== 0
      ? meals
          .filter(
            (item) => item.strCategory && filter.includes(item.strCategory)
          )
          .map((item: Meal) => item)
      : meals.map((item: Meal) => item));

  const itemsPerPage = 6;

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const classes =
    "border-gray-100 border-2 px-3 py-1.5 rounded bg-gray-100 hover:border-black cursor-pointer";

  useEffect(() => {
    setItemOffset(0);
  }, [meals]);

  return (
    <>
      <div className="flex flex-wrap gap-5 p-10 w-full justify-between ">
        <CurrentRecipes currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={(event) => {
            const newOffset = (event.selected * itemsPerPage) % items.length;
            console.log(
              `User requested page number ${event.selected}, which is offset ${newOffset}`
            );
            setItemOffset(newOffset);
          }}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="w-full flex justify-center gap-3 items-center mt-3"
          breakClassName={classes}
          nextClassName={classes}
          previousClassName={classes}
          pageClassName={classes}
          activeClassName="font-bold"
        />
      </div>
    </>
  );
};

export default RecipeList;
