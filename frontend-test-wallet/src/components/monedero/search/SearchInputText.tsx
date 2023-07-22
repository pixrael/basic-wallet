import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { selectSearch, searchKey } from "../../../app-state/slices/searchSlice";
import store from "../../../app-state/store";

function SearchInputText() {
  const key = useSelector(selectSearch);

  return (
    <TextField
      label=""
      placeholder="Search..."
      id="outlined-start-adornment"
      value={key}
      onChange={(e) => {
        store.dispatch(searchKey(e.target.value));
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchInputText;
