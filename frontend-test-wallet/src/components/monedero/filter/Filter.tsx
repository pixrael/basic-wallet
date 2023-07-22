import { Button, Menu, MenuItem } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import FilterDatesDialog from "./filter-dialog/FitlerDatesDialog";
import FilterConceptDialog from "./filter-dialog/FitlerConceptDialog";
import store from "../../../app-state/store";
import { clearFilterBy } from "../../../app-state/slices/filterBySlice";

function Filter() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [showDatesDialog, setShowDatesDialog] = useState(false);
  const [showConceptDialog, setShowConceptDialog] = useState(false);

  return (
    <>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
        sx={{ textTransform: "none" }}
        startIcon={<FilterAltIcon />}
      >
        Filtrar
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            setShowDatesDialog(true);
          }}
        >
          Por fecha
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            setShowConceptDialog(true);
          }}
        >
          Por concepto
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            store.dispatch(clearFilterBy());
          }}
        >
          Clear
        </MenuItem>
      </Menu>
      {showDatesDialog && (
        <FilterDatesDialog handleClose={() => setShowDatesDialog(false)} />
      )}

      {showConceptDialog && (
        <FilterConceptDialog handleClose={() => setShowConceptDialog(false)} />
      )}
    </>
  );
}

export default Filter;
