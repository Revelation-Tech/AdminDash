import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);
import { useMemo } from "react";
import { Progress } from "antd";

export const BillDoughnutData = ({
  title,
  value,
  total,
  score,
  label,
  percent,
}) => {
  const data = {
    labels: "",
    datasets: [
      {
        label: label ?? "Movie Name",
        data: value ?? [70, 30],
        backgroundColor: ["#1f6cab", "#E0E0E0"],

        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "80%",
    responsive: true,
    maintainAspectRatio: false,
  };
  return (
    <div className="inline-flex justify-center w-full">
      <div className="grid md:grid-cols-5 mx-auto gap-10">
        <div className="col-span-2 inline-flex flex-col items-center justify-center w-full">
          <h4 className="font-normal text-base">
            {title ?? "Details of the Chart"}
          </h4>
          <h2 className="font-sans font-bold text-5xl">
            {score ?? 400}
            <span className="text-2xl">/{total ?? 500}</span>
          </h2>
        </div>

        <div className="col-span-3">
          <Progress  status="normal" percent={Number(percent)} size={200} type="circle" trailColor="#E0E0E0" strokeColor="#1f6cab" />
        </div>
        {/* <div style={{ width: "100%", height: "200px" }}> */}
        {/* <Doughnut data={data} options={options} /> */}
        {/* </div> */}
      </div>
    </div>
  );
};
