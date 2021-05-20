import React from "react";
import { useEffect, useState, useCallback } from "react";
import { DataGrid } from "@material-ui/data-grid";

const TodoList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((res) => res.json())
      .then((posts) => setData(posts))
      .catch((e) => console.log(e));
  }, []);

  console.log("data is:", data);

  const columns = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "title", headerName: "Title", width: 130 },
    {
      field: "body",
      renderCell: (params) => {
        //console.log("params", params);
        return (
          <button onClick={() => removeItem(params.row.id)}>Delete</button>
        );
      },
      width: 130,
    },
  ];

  const removeItem = useCallback(
    (id) => {
      if (Array.isArray(data)) {
        setData((data) => data.filter((i) => i.id !== id));
      }
    },
    [data]
  );

  return (
    <div style={{ height: 400, width: "100%" }}>
      {Array.isArray(data) && (
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      )}
    </div>
  );
};

export default TodoList;
