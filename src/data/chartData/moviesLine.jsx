import { Chart as ChartJS, 
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import React, { useRef } from 'react'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export const MoviesLine = () => {

  const ref = useRef();
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'],
    datasets: [{
      label: 'Movie Data Usage',
      data: [10, 20, 15, 25, 22],
      borderColor: 'green',
      borderWidth: 2,
      backgroundColor: 'rgba(69, 129, 54,0.2)',
      fill: true,
      tension: 0.5,
      pointRadius:0,

    },
    ],
  }

  const options ={
   
      responsive: true,
    maintainAspectRatio: false,
   
    plugins:{
      legend:{
        display:false,
      },
       tooltip: {
        enabled: false, // Disables tooltips
      },
    },
    scales:{
      x:{
          display:false,
      },
      y:{
          display:false,
          
      },
    }
  }
  return (
    <>
   
  <div className="">
   <div style={{ width: "100%", height: "50px" }} className="">
      <Line data={data} options={options}   />
  </div>
    
     </div>
     </>
  )
}
