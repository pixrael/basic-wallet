import { MovementsRaws } from "../../interfaces/MonederoData";

export const scenariosSortsByDate: {
  rawData: MovementsRaws[];
  expectedData: MovementsRaws[];
}[] = [
  {
    rawData: [
      {
        id: 1,
        amount: 2,
        concept: 0,
        date: "2022-07-18 03:38:36",
      },
      {
        id: 2,
        amount: 5,
        concept: 0,
        date: "2022-07-07 03:38:36",
      },
      {
        id: 3,
        amount: 10,
        concept: 0,
        date: "2022-07-20 03:38:36",
      },
    ],
    expectedData: [
      {
        id: 3,
        amount: 10,
        concept: 0,
        date: "2022-07-20 03:38:36",
      },
      {
        id: 1,
        amount: 2,
        concept: 0,
        date: "2022-07-18 03:38:36",
      },

      {
        id: 2,
        amount: 5,
        concept: 0,
        date: "2022-07-07 03:38:36",
      },
    ],
  },
  {
    rawData: [
      {
        id: 1,
        amount: 2,
        concept: 0,
        date: "2022-07-18 03:38:30",
      },
      {
        id: 2,
        amount: 5,
        concept: 0,
        date: "2022-07-18 03:38:36",
      },
      {
        id: 3,
        amount: 10,
        concept: 0,
        date: "2022-07-18 03:38:15",
      },
    ],
    expectedData: [
      {
        id: 2,
        amount: 5,
        concept: 0,
        date: "2022-07-18 03:38:36",
      },
      {
        id: 1,
        amount: 2,
        concept: 0,
        date: "2022-07-18 03:38:30",
      },
      {
        id: 3,
        amount: 10,
        concept: 0,
        date: "2022-07-18 03:38:15",
      },
    ],
  },
];
