import React from 'react'
import { Bar } from 'react-chartjs-2'
import { LinearScale,Tooltip,Legend,Chart as ChartJS ,CategoryScale,BarElement } from 'chart.js'

ChartJS.register(
    LinearScale,Tooltip,Legend,CategoryScale ,BarElement
)

const AirtimeHorizontalData = () => {
    const data ={
        labels:['Airtel', 'Glo', 'Mtn','9-mobile','Smile'],
        datasets:[
            {
                label:'',
                data:[2100,1800,1500,1200,1000],
                backgroundColor:['#1f6cab','#F99680','#A080F9','#1CCCE8','#08880D'],
                borderRadius: {
                    topLeft: 0, // Upper-left corner radius
                    topRight: 20, // Upper-right corner radius
                    bottomLeft: 0, // Lower-left corner radius
                    bottomRight: 20, // Lower-right corner radius
                  },
                  borderWidth: 1,
                   // Adjust bar thickness (smaller value = thinner bar)
                  
                 // Adjust space between bars
            }
        ]
    }

    const options={
        indexAxis:'y',
        responsive: true,
        maintainAspectRatio: false,
        scales:{
            y:{
                grid:{
                    display:false,
                }
            }
        }
    }
    return (
    <div style={{width:'100%',height:'250px'}}>
        <Bar data={data} options={options}/>
    </div>
  )
}

export default AirtimeHorizontalData