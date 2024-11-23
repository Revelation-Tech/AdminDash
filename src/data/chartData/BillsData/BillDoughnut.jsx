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

export const BillDoughnutData = () => {
const data = {
    labels: '',
    datasets: [
      {
        label: 'Movie Name',
        data: [70,30],
        backgroundColor: [
          '#1f6cab','#E0E0E0'
          

        ],
        
        hoverOffset: 4,
        borderWidth:0,
      },
    ],
  }

  const options = {
    cutout:'80%',
    responsive: true,
  maintainAspectRatio: false,
  };
return (
<>
<div className="grid md:grid-cols-2">
<div className=" text-center">
  <h2 className="font-semibold text">Details of the Chart</h2>
</div>
<div style={{ width: "100%", height: "200px" }}>
  <Doughnut data={data} options={options} />
</div>
</div>

</>
)
}
