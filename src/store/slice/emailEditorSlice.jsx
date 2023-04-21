import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  temp_design: null,
};

export const saveDataSlice = createSlice({
  name: "saveData",
  initialState,
  reducers: {
    saveTempDesign: (state, action) => {
      state.temp_design = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveTempDesign } = saveDataSlice.actions;

export default saveDataSlice.reducer;
