import React from 'react'
import { Chart as ChartJS, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    
    
  } from 'chart.js';
 
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


  
export const MovieLine2Data = () => {

    
const labels = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec'];
const data = {
  labels: labels,
  datasets: [{
    label: '',
    data: [65, 59, 80, 81, 56, 55, 40,80, 81, 36, 15, 40],
    fill:true,
    borderColor: '#1f6cab',
    tension: 0.1,
    backgroundColor:'rgba(31, 108, 171,0.09)'

    
  }]
};

const options = {
    
    responsive: true,
    maintainAspectRatio: false,

    plugins:{

        beforeDraw: (chart) => {
            const ctx = chart.canvas.getContext("2d");
            const width = chart.width;
            const height = chart.height;
      
            // Create gradient from #1f6cab to white
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, "#1f6cab");
            gradient.addColorStop(1, "#ffffff");
      
            // Draw the gradient
            ctx.save();
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
            ctx.restore();
          },
    },


  scales: {
    x: {
      grid: {
        display: false, // Hides grid lines on the X-axis
      },
    },
    y: {
      grid: {
        display: false, // Hides grid lines on the Y-axis
      },
    },
  },
  };

  return (
   <div className="mt-4 px-8 py-4 " style={{ width: "100%", height: "400px" }}>
    <Line data={data} options={options}/>
   </div>
  )
}
