// src/components/PieChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";
// import { chart as chartjs } from "chart.js/auto";

function DoughnutChart({ chartData }) {
  return (
    <Doughnut data={chartData} />
  );
}
export default DoughnutChart;