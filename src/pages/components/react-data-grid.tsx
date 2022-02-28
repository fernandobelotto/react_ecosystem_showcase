import React, { ReactElement } from "react";
import DataGrid from "react-data-grid";

interface Props {}

const columns = [
  { key: "id", name: "ID" },
  { key: "title", name: "Title" },
];

const rows = [
  { id: 0, title: "Example" },
  { id: 1, title: "Demo" },
];

export default function ReactDataGrid({}: Props): ReactElement {
  return (
    <>
      <DataGrid columns={columns} rows={rows} />;
    </>
  );
}
