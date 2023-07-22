import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import MonederoPage from "./page/MonederoPage";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MonederoPage />
    </LocalizationProvider>
  );
}

export default App;
