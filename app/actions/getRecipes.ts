import { Meal } from "../interfaces/Meal";
import axios from "../lib/axios";
// https://www.themealdb.com/api/json/v1/1/search.php?f=a
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

export const getAllRecipes = async () => {
  try {
    const urls = [];

    for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++)
      urls.push(`/search.php?f=${String.fromCharCode(i)}`);

    const requests = urls.map((url) => axios.get(url));
    const responses = await Promise.all(requests);

    return responses
      .map((response) => response.data.meals)
      .reduce((acum, curr) => {
        if (curr) return [...acum, ...curr];
        return acum;
      }, [])
      .sort((a: Meal, b: Meal) => a.strMeal.localeCompare(b.strMeal));
  } catch (err) {
    console.error("Ошибка при запросе: ", err);
    return [];
  }
};

export const getByLetter = async (letter: string) => {
  try {
    const response = await axios.get(`/search.php?f=${letter}`);

    return response.data.meals;
  } catch (err) {
    console.error("Ошибка при запросе: ", err);
    return [];
  }
};

export const getByName = async (name: string) => {
  try {
    const response = await axios.get(`/search.php?s=${name}`);

    return response.data.meals;
  } catch (err) {
    console.error("Ошибка при запросе: ", err);
    return [];
  }
};
