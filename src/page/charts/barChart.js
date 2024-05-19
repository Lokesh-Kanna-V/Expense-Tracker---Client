import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Bar() {
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }]}
      width={800}
      height={400}
    />
  );
}
