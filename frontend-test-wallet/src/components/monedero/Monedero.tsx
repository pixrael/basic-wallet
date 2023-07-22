import MonederoLayout from "./layout/MonederoLayout";
import MovementsMainBar from "./movements-bar/MovementsMainBar";
import CurrentBalance from "./current-balance/CurrentBalance";
import OperationsButtons from "./operations/OperationButtons";
import SearchInputText from "./search/SearchInputText";
import Filter from "./filter/Filter";
import ColumnsButton from "./columns-button/ColumnsButton";
import MovementsTable from "./movements-table/MovementsTable";

function Monedero() {
  return (
    <MonederoLayout
      slot1={<MovementsMainBar />}
      slot2={<CurrentBalance />}
      slot3={<OperationsButtons />}
      slot4={<SearchInputText />}
      slot5={<Filter />}
      slot6={<ColumnsButton />}
      slot7={<MovementsTable />}
    />
  );
}

export default Monedero;
