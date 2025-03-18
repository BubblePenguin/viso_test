"use client";

import { Meal } from "@/app/interfaces/Meal";

const ToDoCounter = ({ meals }: { meals: Meal[] }) => {
  const getIngredients = (meals: Meal[]) => {
    return [
      ...new Set(
        meals.reduce((acum: string[], meal: Meal) => {
          for (let i = 0; i < 20; i++) {
            const temp =
              meal[`strIngredient${i + 1}` as keyof Meal]?.toLowerCase();
            if (temp && typeof temp === "string" && temp.length > 1) {
              acum.push(temp);
            }
          }
          return acum;
        }, [])
      ),
    ];
  };

  const ingredients = getIngredients(meals);

  return (
    <div className="px-10 w-full">
      <p>Ingredients amount for all to do recipes: {ingredients.length}</p>
    </div>
  );
};

export default ToDoCounter;
