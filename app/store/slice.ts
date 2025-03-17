import { createSlice } from "@reduxjs/toolkit";
import mock from "@/public/mock.json";
import { Meal } from "../interfaces/Meal";

export interface RecipeState {
  list: Meal[];
}

const initialState = {
  list: mock.meals as Meal[],
  filter: [] as string[],
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
  },
});

// Action creators are generated for each case reducer function
export const { set, setFilter } = recipeListSlice.actions;

export default recipeListSlice.reducer;
