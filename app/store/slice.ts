import { createSlice } from "@reduxjs/toolkit";
import mock from "@/public/mock.json";
import { Meal } from "../interfaces/Meal";

export interface RecipeState {
  list: Meal[];
}

const initialState = {
  list: mock.meals,
};

export const recipeListSlice = createSlice({
  name: "recipeList",
  initialState,
  reducers: {
    set: (state, action) => {
      state.list = action.payload;
    },
    clear: (state) => {
      state.list = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { set, clear } = recipeListSlice.actions;

export default recipeListSlice.reducer;
