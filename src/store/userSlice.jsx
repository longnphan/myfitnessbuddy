import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: {},
    breakfast: [],
    lunch: [],
    dinner: [],
    snacks: [],
  },
  reducers: {
    updateProfile(state, action) {
      state.profile = action.payload;
    },
    addFood(state, action) {
      switch (action.payload.meal) {
        case "breakfast":
          state.breakfast.push(action.payload.food);
          return;
        case "lunch":
          state.lunch.push(action.payload.food);
          return;
        case "dinner":
          state.dinner.push(action.payload.food);
          return;
        case "snacks":
          state.snacks.push(action.payload.food);
          return;
        default:
          return;
      }
    },
  },
});

export const { updateProfile, updateSearchFood, addFood } = userSlice.actions;
export default userSlice.reducer;
