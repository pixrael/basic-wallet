import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import store from "../../../../app-state/store";
import { filterByConcept } from "../../../../app-state/slices/filterBySlice";

export const DATE_FORMAT = "DD/MM/YY";

export default function FilterConceptDialog({
  handleClose,
}: {
  handleClose: Function;
}) {
  const [concept, setConcept] = useState<0 | 1 | -1>(-1);

  const handleApply = (concept: 0 | 1) => {
    store.dispatch(filterByConcept(concept));
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
        {"Selecciona el concepto por el cual filtrar"}
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "40px",
            paddingTop: "10px",
          }}
        >
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={(e) => {
              const conc = +e.target.value;
              if (conc === 0 || conc === 1) setConcept(conc);
            }}
          >
            <FormControlLabel value={0} control={<Radio />} label="Ingreso" />
            <FormControlLabel value={1} control={<Radio />} label="Retirada" />
          </RadioGroup>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>Cancel</Button>
        <Button
          onClick={() => {
            if (concept === 0 || concept === 1) handleApply(concept);
          }}
          autoFocus
        >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
}
