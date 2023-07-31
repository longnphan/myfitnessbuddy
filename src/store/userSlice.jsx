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
    addFood(state, action) {
      state[action.payload.meal].push(action.payload);
    },
    removeFood(state, action) {
      const index = state[action.payload.meal].findIndex(
        item => item.id === action.payload.id
      );
      state[action.payload.meal].splice(index, 1);
    },
    updateProfile(state, action) {
      state.profile = action.payload;
      console.log("This is profile in userSlice:", state.profile);
    },
  },
});

export const { addFood, removeFood, updateProfile } = userSlice.actions;
export default userSlice.reducer;
