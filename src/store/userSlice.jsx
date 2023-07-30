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

      const mealType = action.payload.meal;
      `state.${mealType}`.push(action.payload.food);
      // console.log("meal type is:", mealType);
      // console.log("payload is:", action.payload.food);
      // state.mealType.push(action.payload);
      console.log(`Food items in ${state[action.meal]}`, state[action.meal]);
      console.log("breakfast arr", state.breakfast);
      console.log("lunch arr", state.lunch);
      console.log("dinner arr", state.dinner);
      console.log("snacks arr", state.snacks);
    },
  },
});

export const { updateProfile, updateSearchFood, addFood } = userSlice.actions;
export default userSlice.reducer;
