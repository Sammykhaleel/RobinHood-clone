import React, { useEffect, useState } from 'react'
import {Line} from 'react-chartjs-2'
import './LineGraph.css'
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);

function LineGraph() {

  const [GraphData, setGraphData] = useState([])
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

  const createMockData = ()=>{
    let data = [];
    let value = 100;
    for(var i = 0; i < 366; i++){
      let date = new Date();
      date.setHours(0,0,0,0);
      date.setDate(i);
      value += Math.round((Math.random() < 0.7 ? 1 : 0) * Math.random() * 50);
      data.push({x: date, y: value});
    }   
    setGraphData(data)
  }

  useEffect(()=>{
    createMockData()
  },[])
  return (
    <div className='linegraph'>
      <Line data ={ {
      // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sept","Oct","Nov","Dec"],
        datasets: [{
          // label: 'My First Dataset',
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
          data: GraphData,
        }]
      }}
      options={{
        maintainAspectRatio: false,
        // plugins: {
          tooltips: {
              usePointStyle: true,
              mode: "index",
              intersect: false,
          }
        // }
        ,
        scales:{
          xAxes: [
            {
              type: "time",
              time: {
                format: "MM/DD/YY",
                tooltipFormat: "ll",
              },
              ticks: {
                display: true,
              }
            },
          ],
          yAxes:[{
            ticks: {
              display: true
            }
        }]
        }
      }}
      />
    </div>
  )
}

export default LineGraph