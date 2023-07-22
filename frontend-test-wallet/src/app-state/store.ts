import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/monederoApi";
import searchSlice from "./slices/searchSlice";
import filterBySlice from "./slices/filterBySlice";

export default configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    search: searchSlice,
    filterBy: filterBySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
