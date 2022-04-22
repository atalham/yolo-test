import React from "react";
import { TableBody as TableBodyMui, Box } from "@mui/material";
import { TableCol, TableRow } from "../shared/interfaces";
import { YoloTableCell, YoloTableRow } from "./table-body.style";

type Props = {
  /**
   * @summary
   * Table rows
   */
  rows: TableRow[];
  /**
   * @summary
   * Table columns
   */
  columns: TableCol[];
};

const TableBody = ({ rows, columns }: Props) => {
  const renderTextCell = (row: TableRow, column: TableCol) => {
    return <Box>{row[column.field]}</Box>;
  };

  return (
    <TableBodyMui>
      {rows.map((row, idx) => (
        <YoloTableRow key={idx}>
          {columns.map((column, index) => (
            <YoloTableCell key={index} scope="row">
              {renderTextCell(row, column)}
            </YoloTableCell>
          ))}
        </YoloTableRow>
      ))}
    </TableBodyMui>
  );
};

export default TableBody;
