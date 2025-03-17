import axios from "./axios";
import { Meal } from "../interfaces/Meal";

// () => {
//   const arr: Meal[] = [];
//   for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
//     axios
//       .get(
//         `https://www.themealdb.com/api/json/v1/1/search.php?f=${String.fromCharCode(
//           i
//         )}`
//       )
//       .then((i: AxiosResponse<{ meals: Meal[] }>) =>
//         console.log(...i.data.meals)
//       );
//   }

//   return arr;
// };

export const fetchAllRecipes = async (callback: (data: Meal[]) => void) => {
  try {
    const arr: Meal[] = [];

    for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
      axios.get(`/search.php?f=${String.fromCharCode(i)}`).then((v) => {
        callback(v.data.meals);
      });
    }
    return arr;
  } catch (err) {
    //console.log(err);
  }
};
