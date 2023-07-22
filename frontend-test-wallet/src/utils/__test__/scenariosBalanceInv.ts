export const scenariosBalanceInv: {
  rawData: { balance: number; movements: any[] };
  expectedData: any;
}[] = [
  {
    rawData: {
      balance: 20,
      movements: [
        {
          amount: 2,
          concept: 0, //adding
        },
        {
          amount: 5,
          concept: 0, //adding
        },
        {
          amount: 10,
          concept: 0, //adding
        },
      ],
    },
    expectedData: {
      balance: 20,
      movements: [
        {
          amount: 2,
          concept: 0, //adding,
          prevBalance: 18,
          nextBalance: 20,
        },
        {
          amount: 5,
          concept: 0, //adding,
          prevBalance: 13,
          nextBalance: 18,
        },
        {
          amount: 10,
          concept: 0, //adding,
          prevBalance: 3,
          nextBalance: 13,
        },
      ],
    },
  },
];
