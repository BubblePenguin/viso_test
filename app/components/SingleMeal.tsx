"use client";

import Image from "next/image";
import { Meal } from "@/app/interfaces/Meal";
import { useDispatch } from "react-redux";
import { addToDo, removeToDo } from "../store/slice";
import { useRouter } from "next/navigation";

const SingleMeal = ({ meal }: { meal: Meal | null }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const getIngredients = (meal: Meal) => {
    if (!meal) return;
    let ingredients: string[] = [];

    for (let i = 0; i < 20; i++) {
      const ing = meal[`strIngredient${i + 1}`];
      if (ing && ing.length > 1) ingredients.push(ing);
    }
    return ingredients;
  };

  const getMeasures = (meal: Meal) => {
    if (!meal) return;
    let measures: string[] = [];
    for (let i = 0; i < 20; i++) {
      const mes = meal[`strMeasure${i + 1}`];
      if (mes && mes.length !== 0 && mes !== " ") measures.push(mes);
    }

    return measures;
  };

  const btnClasses =
    "bg-gray-100 rounded py-3 px-5 cursor-pointer border-2 border-gray-100 hover:border-black";

  return (
    <div className="h-full">
      {meal ? (
        <div className="w-full flex justify-center ">
          <div className="w-full m-10 flex flex-col">
            <div className="flex w-full">
              <div className="">
                <div className="relative">
                  <Image
                    src={meal.strMealThumb}
                    width={600}
                    height={600}
                    alt={meal.strMeal}
                    className="relative"
                  ></Image>
                  <div className="absolute text-gray-100 bg-linear-to-r  from-black/70 to-black/10 px-5 py-2 bottom-5 left-5">
                    <p className="text-3xl">{meal.strMeal}</p>
                  </div>
                </div>
              </div>
              <div className="px-5 flex flex-col w-full">
                <h2 className="text-2xl">Ingredients:</h2>
                <div className="flex justify-between text-xs lg:text-lg">
                  <div className="w-full">
                    {getIngredients(meal)?.map((item) => (
                      <p className="border-b-2 w-full py-1">{item}</p>
                    ))}
                  </div>
                  <div className="w-full">
                    {getMeasures(meal)?.map((item) => (
                      <p className="text-right border-b-2 py-1">{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full pt-5">
              <h2 className="text-2xl">Instruction</h2>
              <p className="pt-2 text-2xs">{meal.strInstructions}</p>
            </div>
            <div className="w-full flex gap-5 mt-5">
              <button
                className={btnClasses}
                onClick={() => {
                  dispatch(addToDo(meal));

                  router.push("/todo");
                }}
              >
                Add to To Do List
              </button>
              <button
                className={btnClasses}
                onClick={() => dispatch(removeToDo(meal))}
              >
                Remove from To Do List
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full w-full flex justify-center items-center">
          <h2 className="text-6xl font-bold">
            404 | There is no such a recipe
          </h2>
        </div>
      )}
    </div>
  );
};

export default SingleMeal;
