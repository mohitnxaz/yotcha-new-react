import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isError: false,
};

export const addProperty = createSlice({
  name: "addProperty",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
  },
});

export const { setError } = addProperty.actions;
export default addProperty.reducer;
