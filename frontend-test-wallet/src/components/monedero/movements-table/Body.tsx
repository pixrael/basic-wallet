import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell, { TableCellProps } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DateCell from "./DateCell";

import { Order, stableSort, getComparator } from "./utils";
import { Movements } from "../../../interfaces/MonederoData";

interface CustomTableCellProps extends TableCellProps {
  hideBottomBorder?: boolean;
}

export const CustomTableCell = ({
  hideBottomBorder = false,
  align = "left",
  children,
  ...otherProps
}: CustomTableCellProps) => {
  return (
    <TableCell
      {...otherProps}
      align={align}
      sx={{
        borderBottom: hideBottomBorder ? "none" : "2px solid #eceff2",
      }}
    >
      {children}
    </TableCell>
  );
};

export default function MovementTableBody({
  rows,
  order,
  orderBy,
  page = 0,
  rowsPerPage = 5,
}: {
  rows: Movements[];
  order: Order;
  orderBy: keyof Movements;
  page: number;
  rowsPerPage: number;
}) {
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );

  return (
    <TableBody>
      {visibleRows.map((row, index) => {
        return (
          <TableRow hover tabIndex={-1} key={row.id} sx={{ cursor: "pointer" }}>
            <CustomTableCell
              component="th"
              hideBottomBorder={index === rowsPerPage - 1}
            >
              {row.id}
            </CustomTableCell>
            <CustomTableCell hideBottomBorder={index === rowsPerPage - 1}>
              <DateCell date={row.date} />
            </CustomTableCell>
            <CustomTableCell hideBottomBorder={index === rowsPerPage - 1}>
              {row.concept ? "Retirada" : "Ingreso"}
            </CustomTableCell>
            <CustomTableCell hideBottomBorder={index === rowsPerPage - 1}>
              {row.amount} €
            </CustomTableCell>
            <CustomTableCell hideBottomBorder={index === rowsPerPage - 1}>
              {row.prevBalance} €
            </CustomTableCell>
            <CustomTableCell hideBottomBorder={index === rowsPerPage - 1}>
              {row.nextBalance} €
            </CustomTableCell>
          </TableRow>
        );
      })}
      {emptyRows > 0 && (
        <TableRow
          style={{
            height: 53 * emptyRows,
          }}
        >
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
}
