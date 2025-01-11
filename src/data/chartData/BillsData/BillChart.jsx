import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";

ChartJs.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

export const BillChart = ({ label, value }) => {
  const data = {
    labels: label ?? [
      "Airtime",
      "Data",
      "Cable TV",
      "Electricity",
      "Betting",
      "Movies",
    ],
    datasets: [
      {
        label: "",
        data: value ?? [100, 1100, 500, 1400, 1000, 1000],
        // backgroundColor: "linear-gradient(90.28deg, #2390FA 8.58%, #2C9CF2 50%, #33A9E7 99.78%)",
        // backgroundColor: "#1f6cab",
        backgroundColor: [
          "#1f6cab",
          "#F99680",
          "#A080F9",
          "#1CCCE8",
          "#08880D",
        ],
        borderRadius: {
          topLeft: 50, // Upper-left corner radius
          topRight: 50, // Upper-right corner radius
          bottomLeft: 0, // Lower-left corner radius
          bottomRight: 0, // Lower-right corner radius
        },
        borderWidth: 1,
        barPercentage: 0.4, // Adjust bar thickness (smaller value = thinner bar)
        categoryPercentage: 1, // Adjust space between bars
        textTransform: "capitalize",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
        text: "Monthly Bill Distribution",
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // Disables tooltips
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "250px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};
