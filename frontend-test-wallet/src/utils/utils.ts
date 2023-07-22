import moment from "moment";
import { MonederoData, MovementsRaws } from "../interfaces/MonederoData";
import { DATE_FORMAT } from "../components/monedero/filter/filter-dialog/FitlerDatesDialog";

export const calculatePreviewAndBackBalanceInverse = (data: {
  balance: number;
  movements: MovementsRaws[];
}) => {
  const result: MonederoData = {
    balance: data.balance,
    movements: [],
  };

  data.movements.forEach((m, i) => {
    let prev = 0;
    let next = 0;

    if (i === 0) {
      next = data.balance;
    } else {
      next = result.movements[i - 1].prevBalance;
    }

    if (m.concept === 0) {
      prev = next - m.amount;
    } else {
      prev = next + m.amount;
    }

    result.movements.push({
      ...m,
      prevBalance: prev,
      nextBalance: next,
    });
  });

  return result;
};

export const calculatePreviewAndBackBalance = (data: {
  balance: number;
  movements: MovementsRaws[];
}) => {
  const result: MonederoData = {
    balance: data.balance,
    movements: [],
  };
  data.movements.forEach((m, i) => {
    let prev = i !== 0 ? result.movements[i - 1].nextBalance : 0;
    let next = 0;
    if (!m.concept) {
      next = prev + m.amount;
    } else {
      next = prev - m.amount;
    }

    result.movements.push({
      ...m,
      prevBalance: prev,
      nextBalance: next,
    });
  });

  return result;
};

export const sortByDate = (movements: MovementsRaws[]): MovementsRaws[] => {
  // Create a compare function to sort by the date property
  const compareDates = (a: MovementsRaws, b: MovementsRaws): number => {
    const datePartA = a.date.split(" ")[0];
    const dateA = moment(datePartA, "YYYY-MM-DD");

    const datePartB = b.date.split(" ")[0];
    const dateB = moment(datePartB, "YYYY-MM-DD");

    if (dateA.isAfter(dateB)) return -1;
    if (dateA.isBefore(dateB)) return 1;
    else return 0;
  };

  // Sort the array using the compare function
  const sortedArray = [...movements].sort(compareDates);
  return sortedArray;
};

export const checkIfInRange = (
  dateStart: string,
  dateEnd: string,
  dateToCheck: string
): boolean => {
  const startDate = moment(dateStart, DATE_FORMAT);
  const endDate = moment(dateEnd, DATE_FORMAT);

  const dateToCheckValue = moment(
    dateToCheck.split(" ")[0],
    "YYYY-MM-DD"
  ).format(DATE_FORMAT);
  const dateToCheckValueFormatted = moment(dateToCheckValue, DATE_FORMAT);

  if (
    (dateToCheckValueFormatted.isBefore(endDate) &&
      dateToCheckValueFormatted.isAfter(startDate)) ||
    dateToCheckValueFormatted.isSame(startDate) ||
    dateToCheckValueFormatted.isSame(endDate)
  ) {
    return true;
  } else {
    return false;
  }
};
