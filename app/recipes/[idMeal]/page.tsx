"use client";

import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { Meal } from "@/app/interfaces/Meal";
import { useEffect, useState } from "react";
import SingleMeal from "@/app/components/SingleMeal";

export default ({
  params,
}: {
  params: Promise<{ idMeal: string; meals: Meal[] }>;
}) => {
  const [id, setId] = useState<string | null>(null);
  const [meal, setMeal] = useState<Meal | null>(null);

  const meals = useSelector((state: RootState) => state.recipeList.list);

  useEffect(() => {
    const fetchId = async () => {
      const resolvedId = (await params).idMeal;
      setId(resolvedId);
    };
    fetchId();
  }, [params]);

  useEffect(() => {
    if (id) {
      const foundMeal = meals.find((meal) => meal.idMeal === id);
      setMeal(foundMeal || null);
    }
  }, [id, meals]);

  return <SingleMeal meal={meal} />;
};
