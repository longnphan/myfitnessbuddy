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
  },
});

export const { updateProfile } = userSlice.actions;
export default userSlice.reducer;
