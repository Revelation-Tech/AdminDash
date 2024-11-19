import { Chart as ChartJs ,
        ArcElement,
        Tooltip,
        Legend
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register(
    ArcElement,
    Tooltip,
    Legend,
)
import { useMemo } from "react";

export const MovieDoughnutData = () => {
    const data = {
        labels: '',
        datasets: [
          {
            label: 'Movie Name',
            data: [50, 20, 20,45,30],
            backgroundColor: [
              '#4E2F7E',
              '#1CCCE8',
              '#A080F9',
              '#E56EF7',
              'red'

            ],
            borderRadius:6,
            hoverOffset: 4,
          },
        ],
      }
    
      const options = {
        responsive: true,
      maintainAspectRatio: false,
      };
  return (
    <>
    <div className="grid md:grid-cols-2">
 <div style={{ width: "90%", height: "200px" }}>
      <Doughnut data={data} options={options} />
    </div>
    <div className=" text-center">
      <h2 className="font-semibold text">Details of the Chart</h2>
    </div>
    </div>
    
    </>
  )
}
