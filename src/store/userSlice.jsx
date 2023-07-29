import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: {},
    breakfast: [],
    lunch: [],
    dinner: [],
    snacks: [],
    searchFood: [],
  },
  reducers: {
    updateProfile(state, action) {
      state.profile = action.payload;
    },
    updateSearchFood(state, action) {
      state.searchFood = action.payload;
      console.log("data in foodData Slice:", state.searchFood);
    },
  },
});

export const { updateProfile, updateSearchFood } = userSlice.actions;
export default userSlice.reducer;
