import React from "react";
import { TableRow } from "@mui/material";
import { TableCol } from "../shared/interfaces";
import { YoloHeaderCell, YoloTableHead } from "./table-header.style";

type Props = {
  /**
   * @summary
   * Table columns.
   */
  columns: TableCol[];
};

const TableHeader = ({ columns }: Props) => {
  return (
    <YoloTableHead>
      <TableRow>
        {columns.map((column) => (
          <YoloHeaderCell key={column.field}>
            <span>{column.headerName?.toLocaleUpperCase()}</span>
          </YoloHeaderCell>
        ))}
      </TableRow>
    </YoloTableHead>
  );
};

export default TableHeader;
