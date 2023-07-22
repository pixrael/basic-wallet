import { MonederoData, MovementsRaws } from "../../interfaces/MonederoData";
import {
  calculatePreviewAndBackBalance,
  calculatePreviewAndBackBalanceInverse,
  sortByDate,
} from "../utils";
import { scenariosBalance } from "./scenariosBalance";
import { scenariosBalanceInv } from "./scenariosBalanceInv";
import { scenariosSortsByDate } from "./scenariosSortByDate";

describe("processing previous and next balance", () => {
  it("calculating prev an next for adding amounts", () => {
    const movementsData: { balance: number; movements: MovementsRaws[] } =
      scenariosBalance[0].rawData;

    const expectedResult: MonederoData = scenariosBalance[0].expectedData;

    const result = calculatePreviewAndBackBalance(movementsData);

    expect(expectedResult).toEqual(result);
  });

  it("calculating prev an next for adding amounts and subs", () => {
    const movementsData: { balance: number; movements: MovementsRaws[] } =
      scenariosBalance[1].rawData;

    const expectedResult: MonederoData = scenariosBalance[1].expectedData;

    const result = calculatePreviewAndBackBalance(movementsData);

    expect(expectedResult).toEqual(result);
  });

  it("checking case balance ends at zero", () => {
    const movementsData: { balance: number; movements: MovementsRaws[] } =
      scenariosBalance[2].rawData;

    const expectedResult: MonederoData = scenariosBalance[2].expectedData;

    const result = calculatePreviewAndBackBalance(movementsData);

    expect(expectedResult).toEqual(result);
  });
});

describe("checking sort by date", () => {
  it("should place the elements from recent to old", () => {
    const movements: MovementsRaws[] = scenariosSortsByDate[0].rawData;

    const expectedResult: MovementsRaws[] =
      scenariosSortsByDate[0].expectedData;

    const result = sortByDate(movements);

    expect(expectedResult).toEqual(result);
  });
});

describe("Should calculate prev and next inv", () => {
  it("should place the elements from recent to old", () => {
    const movementsData = scenariosBalanceInv[0].rawData;

    const expectedResult = scenariosBalanceInv[0].expectedData;

    const result = calculatePreviewAndBackBalanceInverse(movementsData);

    expect(expectedResult).toEqual(result);
  });
});
