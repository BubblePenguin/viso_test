import { createSlice } from "@reduxjs/toolkit";
import mock from "@/public/mock.json";
import { Meal } from "../interfaces/Meal";

export interface RecipeState {
  list: Meal[];
}

const initialState = {
  list: mock.meals as Meal[],
  filter: [] as string[],
  todolist: [] as Meal[],
};

export const recipeListSlice = createSlice({
  name: "recipeList",
  initialState,
  reducers: {
    set: (state, action) => {
      state.list = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    addToDo(state, action) {
      if (!state.todolist.find((item) => item.idMeal === action.payload.idMeal))
        state.todolist = [...state.todolist, action.payload];
    },
    removeToDo(state, action) {
      state.todolist = [
        ...state.todolist.filter(
          (item) => item.idMeal !== action.payload.idMeal
        ),
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { set, setFilter, addToDo, removeToDo } = recipeListSlice.actions;

export default recipeListSlice.reducer;
