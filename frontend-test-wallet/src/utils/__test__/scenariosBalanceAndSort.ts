import { MonederoData, MovementsRaws } from "../../interfaces/MonederoData";

export const scenariosBalanceAndSort: {
  rawData: { balance: number; movements: MovementsRaws[] };
  expectedData: MonederoData;
}[] = [
  {
    rawData: {
      balance: 20,
      movements: [
        {
          id: 1,
          amount: 2,
          concept: 0, //adding
          date: "2022-07-18 03:38:36",
        },
        {
          id: 2,
          amount: 5,
          concept: 0, //adding
          date: "2022-07-17 03:38:36",
        },
        {
          id: 3,
          amount: 10,
          concept: 0, //adding
          date: "2022-07-20 03:38:36",
        },
      ],
    },
    expectedData: {
      balance: 20,
      movements: [
        {
          id: 3,
          amount: 10,
          concept: 0, //adding
          date: "2022-07-20 03:38:36",
          prevBalance: 10,
          nextBalance: 20,
        },
        {
          id: 1,
          amount: 2,
          concept: 0, //adding
          date: "2022-07-18 03:38:36",
          prevBalance: 8,
          nextBalance: 10,
        },
        {
          id: 2,
          amount: 5,
          concept: 0, //adding
          date: "2022-07-17 03:38:36",
          prevBalance: 3,
          nextBalance: 8,
        },
      ],
    },
  },
];
