import {
  Box,
  CircularProgress,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ChangeEvent, useState } from "react";
import {
  useAddMovementMutation,
  useGetMovementsQuery,
} from "../../../app-state/api/monederoApi";

export default function OperationDialog({
  operationType,
  handleClose,
}: {
  operationType: 0 | 1;
  handleClose: Function;
}) {
  const [addMovement] = useAddMovementMutation();
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const { data: monederoData, isLoading } = useGetMovementsQuery();

  const handleApply = () => {
    setLoading(true);
    addMovement({
      amount,
      concept: operationType,
    }).then((response) => {
      setLoading(false);
      handleClose();
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(+e.target.value)) setAmount(+e.target.value);
  };

  return (
    <Dialog
      open={true}
      onClose={() => handleClose()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {`${operationType ? "Retirar" : "Ingresar"} fondos`}
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            height: "40px",
            paddingTop: "10px",
          }}
        >
          {!loading && (
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">€</InputAdornment>
              }
              onChange={handleChange}
              value={amount}
              inputProps={{
                inputMode: "numeric",
              }}
            />
          )}
          {loading && <CircularProgress />}
        </Box>
      </DialogContent>
      {isLoading && <CircularProgress />}
      {monederoData && monederoData.balance && (
        <DialogActions>
          <Button onClick={() => handleClose()}>Cancel</Button>
          <Button
            onClick={handleApply}
            disabled={
              amount <= 0 ||
              (operationType === 1 && amount > monederoData.balance)
            }
            autoFocus
          >
            Apply
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}
