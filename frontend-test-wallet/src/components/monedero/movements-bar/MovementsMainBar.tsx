import { Button, Typography } from "@mui/material";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

function MovementsMainBar() {
  return (
    <>
      <Button
        sx={{
          backgroundColor: "#e8f5ff",
          minWidth: "0",
          padding: "10px",
        }}
      >
        <SyncAltIcon />
      </Button>
      <Typography
        sx={{
          paddingTop: "10px",
          color: "#464e5f",
          paddingLeft: "10px",
          fontWeight: "600",
        }}
      >
        Movimientos
      </Typography>
    </>
  );
}

export default MovementsMainBar;
