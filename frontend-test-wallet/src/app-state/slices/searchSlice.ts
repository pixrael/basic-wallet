import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchState {
  key: string;
}
const initialState: SearchState = { key: "" };

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    searchKey(state, action: PayloadAction<string>) {
      state.key = action.payload;
    },
    clearSearchKey(state, action: PayloadAction<void>) {
      state.key = "";
    },
  },
});

export const { searchKey, clearSearchKey } = searchSlice.actions;
export default searchSlice.reducer;

export const selectSearch = (state: any) => {
  return state.search.key;
};
