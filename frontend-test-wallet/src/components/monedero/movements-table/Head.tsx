import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";

import { visuallyHidden } from "@mui/utils";
import { Order } from "./utils";
import { Movements } from "../../../interfaces/MonederoData";

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Movements;
  label: string;
  numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "N° de pedido",
  },
  {
    id: "date",
    numeric: false,
    disablePadding: false,
    label: "Fecha",
  },
  {
    id: "concept",
    numeric: true,
    disablePadding: false,
    label: "concepto",
  },
  {
    id: "amount",
    numeric: true,
    disablePadding: false,
    label: "importe",
  },
  {
    id: "prevBalance",
    numeric: true,
    disablePadding: false,
    label: "saldo anterior",
  },
  {
    id: "nextBalance",
    numeric: true,
    disablePadding: false,
    label: "saldo posterior",
  },
];

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Movements
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export function MovementTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Movements) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
