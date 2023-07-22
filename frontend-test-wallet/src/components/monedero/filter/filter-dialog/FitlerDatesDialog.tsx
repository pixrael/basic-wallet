import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DateField } from "@mui/x-date-pickers";
import moment from "moment";
import { useState } from "react";
import store from "../../../../app-state/store";
import { filterByDate } from "../../../../app-state/slices/filterBySlice";

export const DATE_FORMAT = "DD/MM/YY";

export default function FilterDatesDialog({
  handleClose,
}: {
  handleClose: Function;
}) {
  const [startDate, setStartDate] = useState("2020/06/12");
  const [endDate, setEndDate] = useState("2021/06/12");

  const handleApply = (dates: { start: string; end: string }) => {
    store.dispatch(filterByDate(dates));
    handleClose();
  };

  return (
    <Dialog
      open={true}
      onClose={() => handleClose()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Selecciona el rango de fechas a filtrar"}
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "40px",
            paddingTop: "20px",
          }}
        >
          <DateField
            format={DATE_FORMAT}
            label="Comienzo rango DD/MM/YY"
            value={moment(startDate, DATE_FORMAT)}
            onChange={(newValue) => {
              newValue && setStartDate(newValue.format(DATE_FORMAT));
              !newValue && setStartDate("");
            }}
          />
          <DateField
            format={DATE_FORMAT}
            label="Fin rango DD/MM/YY"
            value={moment(endDate, DATE_FORMAT)}
            onChange={(newValue) => {
              newValue && setEndDate(newValue.format(DATE_FORMAT));
              !newValue && setEndDate("");
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>Cancel</Button>
        <Button
          onClick={() => handleApply({ start: startDate, end: endDate })}
          autoFocus
        >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
}
