"use client";
import { Meal } from "@/app/interfaces/Meal";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ItemProps {
  meal: Meal;
}

const RecipeItem: React.FC<ItemProps> = ({ meal }) => {
  const getFewIngredients = (meal: Meal) => {
    return `${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}, ${meal.strIngredient4}...`;
  };

  const countIngredients = (meal: Meal) => {
    let count = 0;
    for (let i = 0; i < 20; i++) {
      const query = `strIngredient${i + 1}`;
      const temp = meal[query];
      if (temp && temp.length > 1) count++;
    }

    return count;
  };
  const router = useRouter();

  return (
    <>
      {meal && (
        <div
          className="border-2 border-gray-100 p-7 rounded-xl flex flex-col items-center bg-gray-100 hover:border-gray-900"
          onClick={() => {
            return router.push(`/recipes/${meal.idMeal}`);
          }}
        >
          <div className="relative">
            <Image
              src={meal.strMealThumb}
              width={300}
              height={300}
              alt="Meal"
              className=""
            />
            <div className="absolute bottom-3 left-3 text-gray-100 bg-linear-to-r  from-black/70 to-black/10 px-2 py-1 rounded-xs">
              <span> {meal.strMeal}</span>
            </div>
          </div>
          <div className="w-full mt-4">
            <p className="w-72">
              <span className="font-semibold">Ingredients:</span>{" "}
              {getFewIngredients(meal)}
            </p>
            <p>
              <span className="font-semibold">Ingredients count:</span>{" "}
              {countIngredients(meal)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeItem;
