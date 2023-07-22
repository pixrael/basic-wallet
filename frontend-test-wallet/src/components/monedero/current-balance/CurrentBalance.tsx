import { Typography } from "@mui/material";
import { useGetMovementsQuery } from "../../../app-state/api/monederoApi";

function CurrentBalance() {
  const { data: monederoData } = useGetMovementsQuery();
  return (
    <>
      <Typography sx={{ fontWeight: "600" }}>Saldo actual:</Typography>
      <Typography>{monederoData?.balance} €</Typography>
    </>
  );
}

export default CurrentBalance;
