import { Button, Stack } from "@mui/material";
import OperationDialog from "./OperationDialog";
import { useState } from "react";

function OperationsButtons() {
  const [operationType, setOperationType] = useState<0 | 1>(1);
  const [showDialog, setShowDialog] = useState(false);

  const handleClick = (type: 0 | 1) => {
    setOperationType(type);
  };

  return (
    <>
      <Stack direction={"row"} spacing={1}>
        <Button
          variant="contained"
          sx={{ textTransform: "none" }}
          onClick={() => {
            handleClick(1);
            setShowDialog(true);
          }}
        >
          Retirar fondos
        </Button>
        <Button
          variant="action"
          sx={{ textTransform: "none" }}
          onClick={() => {
            handleClick(0);
            setShowDialog(true);
          }}
        >
          Ingresar fondos
        </Button>
      </Stack>
      {showDialog && (
        <OperationDialog
          operationType={operationType}
          handleClose={() => setShowDialog(false)}
        />
      )}
    </>
  );
}

export default OperationsButtons;
