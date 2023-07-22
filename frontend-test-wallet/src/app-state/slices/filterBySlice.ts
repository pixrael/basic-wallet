import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type FilterByType = "date" | "concept" | "";
type FilterByValuesDate = { start: string; end: string };
type FilterByValuesConcept = 0 | 1;

interface FilterByState {
  type: FilterByType;
  values: FilterByValuesConcept | FilterByValuesDate | null;
}

const initialState: FilterByState = { type: "", values: null };

const filterBySlice = createSlice({
  name: "filterBy",
  initialState: initialState,
  reducers: {
    filterByDate(state, action: PayloadAction<{ start: string; end: string }>) {
      state.type = "date";
      state.values = action.payload;
    },
    filterByConcept(state, action: PayloadAction<0 | 1>) {
      state.type = "concept";
      state.values = action.payload;
    },
    clearFilterBy(state, action: PayloadAction<void>) {
      state.type = "";
      state.values = null;
    },
  },
});

export const { filterByDate, filterByConcept, clearFilterBy } =
  filterBySlice.actions;

export default filterBySlice.reducer;

export const selectFilterBy = (state: any) => {
  return state.filterBy;
};
