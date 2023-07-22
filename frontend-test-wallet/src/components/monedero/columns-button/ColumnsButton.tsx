import { Button } from "@mui/material";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";

function ColumnsButton() {
  return (
    <Button
      variant="second"
      sx={{ textTransform: "none" }}
      startIcon={<ViewWeekIcon />}
    >
      Columnas
    </Button>
  );
}

export default ColumnsButton;
