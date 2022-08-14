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
  const data = [{x:10,y:30},{x:30,y:50}]
  return (
    <div><Line data ={ {
        datasets: [{
          label: 'My First Dataset',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)', 
          ],
          borderColor: [
            'rgb(255, 99, 132)', 
          ],
          borderWidth: 1
        }]
      }}/>
    </div>
  )
}

export default LineGraph