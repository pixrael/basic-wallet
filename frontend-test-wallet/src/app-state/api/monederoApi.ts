import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MonederoData, MovementsRaws } from "../../interfaces/MonederoData";
import {
  calculatePreviewAndBackBalanceInverse,
  sortByDate,
} from "../../utils/utils";

const SERVER_URL_API = process.env.REACT_APP_SERVER_URL_API;

export const api = createApi({
  reducerPath: "monedero",
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL_API }),
  tagTypes: ["ListMovements"],
  endpoints: (builder) => ({
    getMovements: builder.query<MonederoData, void>({
      query: () => {
        return { url: `/movements` };
      },
      transformResponse: (response: {
        balance: number;
        movements: MovementsRaws[];
      }): MonederoData => {
        const sortedMovements = {
          balance: response.balance,
          movements: sortByDate(response.movements),
        };

        const calculatedPrevAndBackBalance: MonederoData =
          calculatePreviewAndBackBalanceInverse(sortedMovements);

        return calculatedPrevAndBackBalance;
      },
      providesTags: ["ListMovements"],
    }),
    addMovement: builder.mutation({
      query: (body: { amount: number; concept: 1 | 0 }) => ({
        url: `/movements`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["ListMovements"],
    }),
  }),
});

export const { useGetMovementsQuery, useAddMovementMutation } = api;
