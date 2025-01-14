import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Tooltip, Legend, ArcElement);
export const BillPieChart = ({ label, value }) => {
  const data = {
    labels: label || ["New Customer", "Returning Customer"],
    datasets: [
      {
        label: "",
        data: value || [65, 35],
        backgroundColor: ["#1f6cab", "#E1F0FE"],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "90%", height: "250px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};
