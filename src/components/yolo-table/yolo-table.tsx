import React from "react";
import { Paper } from "@mui/material";
import TableBody from "./components/table-body";
import { TableData } from "./shared/interfaces";
import TableHeader from "./components/table-header";
import { YoloTableMain, YoloTableContainer } from "./yolo-table.style";

type Props = {
  /**
   * @summary
   * Table id
   */
  id?: string;
  /**
   * @summary
   * Custom table container style
   */
  containerStyle?: React.CSSProperties;
  /**
   * @summary
   * Table config object
   */
  data: TableData;
};

const YoloTableComponent = ({ id, containerStyle, data }: Props) => {
  const { rows, columns } = data;

  return (
    <Paper>
      <YoloTableContainer style={containerStyle}>
        <YoloTableMain stickyHeader id={id}>
          <TableHeader columns={columns} />
          <TableBody columns={columns} rows={rows} />
        </YoloTableMain>
      </YoloTableContainer>
    </Paper>
  );
};

export default YoloTableComponent;
