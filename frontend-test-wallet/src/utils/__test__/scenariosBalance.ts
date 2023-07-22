import { MonederoData, MovementsRaws } from "../../interfaces/MonederoData";

export const scenariosBalance: {
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
          date: "2022-07-19 03:38:36",
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
          id: 1,
          amount: 2,
          concept: 0, //adding
          date: "2022-07-18 03:38:36",
          prevBalance: 0,
          nextBalance: 2,
        },
        {
          id: 2,
          amount: 5,
          concept: 0, //adding
          date: "2022-07-19 03:38:36",
          prevBalance: 2,
          nextBalance: 7,
        },
        {
          id: 3,
          amount: 10,
          concept: 0, //adding
          date: "2022-07-20 03:38:36",
          prevBalance: 7,
          nextBalance: 17,
        },
      ],
    },
  },
  {
    rawData: {
      balance: 40,
      movements: [
        {
          id: 1,
          amount: 20,
          concept: 0, //adding
          date: "2022-07-18 03:38:36",
        },
        {
          id: 2,
          amount: 10,
          concept: 1, //sub
          date: "2022-07-19 03:38:36",
        },
        {
          id: 3,
          amount: 30,
          concept: 0, //adding
          date: "2022-07-20 03:38:36",
        },
      ],
    },
    expectedData: {
      balance: 40,
      movements: [
        {
          id: 1,
          amount: 20,
          concept: 0, //adding
          date: "2022-07-18 03:38:36",
          prevBalance: 0,
          nextBalance: 20,
        },
        {
          id: 2,
          amount: 10,
          concept: 1, //sub
          date: "2022-07-19 03:38:36",
          prevBalance: 20,
          nextBalance: 10,
        },
        {
          id: 3,
          amount: 30,
          concept: 0, //adding
          date: "2022-07-20 03:38:36",
          prevBalance: 10,
          nextBalance: 40,
        },
      ],
    },
  },
  {
    rawData: {
      balance: 0,
      movements: [
        {
          id: 1,
          amount: 100,
          concept: 0, //adding
          date: "2022-07-18 03:38:36",
        },
        {
          id: 2,
          amount: 50,
          concept: 1, //sub
          date: "2022-07-19 03:38:36",
        },
        {
          id: 3,
          amount: 50,
          concept: 1, //sub
          date: "2022-07-20 03:38:36",
        },
      ],
    },
    expectedData: {
      balance: 0,
      movements: [
        {
          id: 1,
          amount: 100,
          concept: 0, //adding
          date: "2022-07-18 03:38:36",
          prevBalance: 0,
          nextBalance: 100,
        },
        {
          id: 2,
          amount: 50,
          concept: 1, //sub
          date: "2022-07-19 03:38:36",
          prevBalance: 100,
          nextBalance: 50,
        },
        {
          id: 3,
          amount: 50,
          concept: 1, //sub
          date: "2022-07-20 03:38:36",
          prevBalance: 50,
          nextBalance: 0,
        },
      ],
    },
  },
];
