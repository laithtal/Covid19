import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const CovidTable = ({ data }) => {
  let columns,rows=''
  if (data) {
     columns = Object.keys(data[0]);

     rows = data.map((item, index) => {
      return { id: index, ...item };
    });
  }
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns.map((header) => ({
          field: header,
          headerName: header,
          width: 150, 
        }))}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10 ,50]}
        checkboxSelection
      />
    </div>
  );
};
export { CovidTable };
