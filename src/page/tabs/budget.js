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
  // { field: "id", headerName: "ID", width: 90 },
  {
    field: "category",
    headerName: "Category",
    width: 150,
  },
  {
    field: "budget",
    headerName: "Budget",
    width: 150,
  },
  {
    field: "actual",
    headerName: "Actual",
    width: 150,
  },
  {
    field: "difference",
    headerName: "Difference",
    width: 150,
  },
];

const rows = [
  { id: 1, category: "Snow", budget: "Jon", actual: 14, difference: 20 },
  { id: 2, category: "Snow", budget: "Jon", actual: 14, difference: 20 },
  { id: 3, category: "Snow", budget: "Jon", actual: 14, difference: 20 },
  { id: 4, category: "Snow", budget: "Jon", actual: 14, difference: 20 },
  { id: 5, category: "Snow", budget: "Jon", actual: 14, difference: 20 },
  { id: 6, category: "Snow", budget: "Jon", actual: 14, difference: 20 },
  { id: 7, category: "Snow", budget: "Jon", actual: 14, difference: 20 },
  { id: 8, category: "Snow", budget: "Jon", actual: 14, difference: 20 },
  { id: 9, category: "Snow", budget: "Jon", actual: 14, difference: 20 },
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
  let [plannedBudget, setPlannedBudget] = useState(0);

  // Function to handle changes in category values
  const handleCategoryChange = (event) => {
    const { id, value } = event.target;

    if (!isNaN(value) || value === "") {
      // Update state with new value for the category
      setCategoryValues((prevValues) => ({
        ...prevValues,
        [id]: value,
      }));
    }
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
          value={`₹ ${plannedBudget}`}
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
          {categories.map((category, index) => {
            return (
              <TextField
                key={index}
                id={category}
                label={category}
                variant="outlined"
                value={
                  categoryValues[category] !== undefined
                    ? `${categoryValues[category]}`
                    : ""
                }
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
            let sum = 0;
            categories.map((category) => {
              {
                categoryValues[category] !== undefined
                  ? (sum = parseInt(sum) + parseInt(categoryValues[category]))
                  : null;
              }
            });
            setPlannedBudget(sum);
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
                pageSize: 50,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}
