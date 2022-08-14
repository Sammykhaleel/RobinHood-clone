// import React from 'react'
// import {Line} from 'react-chartjs-2'
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);

// function LineGraph() {
//   return (
//     <div><Line /></div>
//   )
// }

// export default LineGraph

import React from 'react'
import {Line} from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function LineGraph() {
  const data = [
    {
      x:10,
      y:20
    },
    {
      x:15,
      y:10
    },
    {
      x:15,
      y:100
    }
  ]
  return (
    <div><Line data ={ {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          // label: 'My First Dataset',
          // type: "line",
          // data: data,
          // backgroundColor: 'rgba(255, 99, 132, 0.2)',  
          // borderColor: 'rgb(255, 99, 132)',
          // borderWidth: 1
          
          type: 'line',
          backgroundColor: "black",
          borderColor: "#5AC53B",
          borderWidth: 2,
          pointBorderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: 'rgba(0, 0, 0, 0)',
          pointHoverBackgroundColor: '#5AC53B',
          pointHoverBorderColor: '#000000',
          pointHoverBorderWidth: 4,
          pointHoverRadius: 6,
          data: data,
        }]
      }}
      options={{
        plugins: {
          tooltip: {
              usePointStyle: true,
              mode: "index",
              intersect: false,
          }
        },
        scales:{
          yAxes:[{
            ticks: {
              display: false
            }
        }]
        }
      }}
      />
    </div>
  )
}

export default LineGraph