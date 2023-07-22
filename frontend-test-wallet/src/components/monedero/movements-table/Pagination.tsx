import TablePagination from "@mui/material/TablePagination";
import { Pagination } from "@mui/material";

import { useMemo } from "react";
import { HorizontalSection } from "../layout/MonederoLayout";

export default function MovementTablePagination({
  rowsPerPage,
  page,
  totalRecords,
  handleChangePage,
  handleChangeRowsPerPage,
}: {
  rowsPerPage: number;
  page: number;
  totalRecords: number;
  handleChangePage:
    | ((event: React.ChangeEvent<unknown>, page: number) => void)
    | undefined;
  handleChangeRowsPerPage:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}) {
  const calculateTotalPages = () => Math.trunc(totalRecords / rowsPerPage);

  const totalPagesMemoized = useMemo(calculateTotalPages, [
    totalRecords,
    rowsPerPage,
  ]);

  return (
    <HorizontalSection elevation={0}>
      <Pagination
        sx={{ paddingTop: "10px" }}
        count={totalPagesMemoized}
        shape="rounded"
        showFirstButton
        showLastButton
        onChange={handleChangePage}
      />

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component={"div"}
        count={totalRecords}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={() => {}}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelDisplayedRows={({ from, to, count }) =>
          `Showing rows ${from} to ${to} of ${
            count !== -1 ? count : `More than ${to}`
          }`
        }
      />
    </HorizontalSection>
  );
}
