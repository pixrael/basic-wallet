import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { MovementTableHead } from "./Head";
import MovementTableBody from "./Body";
import { Order } from "./utils";
import MovementTablePagination from "./Pagination";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useGetMovementsQuery } from "../../../app-state/api/monederoApi";
import { selectFilterBy } from "../../../app-state/slices/filterBySlice";
import { selectSearch } from "../../../app-state/slices/searchSlice";
import { Movements } from "../../../interfaces/MonederoData";
import { checkIfInRange } from "../../../utils/utils";

export default function MovementsTable() {
  const searchKey = useSelector(selectSearch);
  const [order, setOrder] = React.useState<Order>("desc");
  const [orderBy, setOrderBy] = React.useState<keyof Movements>("date");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const filterValue = useSelector(selectFilterBy);
  const { data: monederoData, isSuccess } = useGetMovementsQuery();

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Movements
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const rowsMemoized = useMemo(() => {
    let rows: Movements[] = [];
    if (!monederoData) return rows;

    rows = monederoData.movements.filter((el) =>
      (el.amount + "").includes(searchKey)
    );

    if (filterValue.type === "date") {
      rows = rows.filter((el) =>
        checkIfInRange(
          filterValue.values.start,
          filterValue.values.end,
          el.date
        )
      );
    } else if (filterValue.type === "concept") {
      rows = rows.filter((el) => el.concept === filterValue.values);
    }

    return rows;
  }, [monederoData, searchKey, filterValue]);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%" }} elevation={0}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="movements"
            size={"medium"}
          >
            <MovementTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rowsMemoized?.length || 1}
            />
            {isSuccess && monederoData && (
              <MovementTableBody
                rows={rowsMemoized || []}
                order={order}
                orderBy={orderBy}
                page={page}
                rowsPerPage={rowsPerPage}
              />
            )}
          </Table>
        </TableContainer>
        <MovementTablePagination
          rowsPerPage={rowsPerPage}
          page={page}
          totalRecords={rowsMemoized?.length || 1}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
