import { getDateAndTimeFromDate } from "./utils";

function DateCell({ date }: { date: string }) {
  const dateParts = getDateAndTimeFromDate(date);

  return (
    <>
      {" "}
      {dateParts.date}
      <br />
      {dateParts.time}{" "}
    </>
  );
}

export default DateCell;
