export interface TableCol {
  field: string;
  headerName: string;
}

export interface TableRow {
  [key: string]: any;
}

export interface TableData {
  rows: TableRow[];
  columns: TableCol[];
}
