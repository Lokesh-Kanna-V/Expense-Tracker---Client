import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Bar from "../charts/barChart";
import { Button, Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

let categories = [
  "homeRent",
  "milk",
  "water",
  "gas",
  "electricity",
  "emiAndSubscription",
  "foodAndGroceries",
  "home",
  "medical",
  "fuel",
  "entertainment",
  "personal",
  "vehicleMaintenance",
  "other",
];

export default function BudgetTab() {
  // Initialize state object to hold values for each category
  const [categoryValues, setCategoryValues] = useState({});

  // Function to handle changes in category values
  const handleCategoryChange = (event) => {
    const { id, value } = event.target;
    // Update state with new value for the category
    setCategoryValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  return (
    <>
      <Box className="flex gap-10">
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          className="flex gap-10"
        >
          <DatePicker
            label={"Select Month and Year"}
            views={["month", "year"]}
          />
        </LocalizationProvider>
        <TextField
          id="plannedBudget"
          style={{ width: "250px" }}
          label="Planned Budget"
          variant="outlined"
          disabled
        />
        <TextField
          id="actualExponse"
          style={{ width: "250px" }}
          label="Actual Expense"
          variant="outlined"
          disabled
        />
      </Box>

      <Box className="flex">
        <Box className="my-10 pt-2 w-80 h-80 flex flex-col gap-2 overflow-auto">
          <Typography variant="h6">Budget Categories</Typography>
          {categories.map((category) => {
            return (
              <TextField
                id={category}
                label={category}
                variant="outlined"
                value={categoryValues[category] || ""}
                onChange={handleCategoryChange}
              />
            );
          })}
        </Box>
        <Box>
          <Bar />
        </Box>
      </Box>

      <Box className="mb-10">
        <Button
          variant="contained"
          onClick={() => {
            console.log(categoryValues);
          }}
        >
          Save Budget
        </Button>
      </Box>

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}
