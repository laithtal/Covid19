import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const BarChart = ({ chartData }) => {

   const newData= chartData.map(({ state, positive }) => ({ state, positive }))
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };
  
  const data = {
    labels:newData.map((item)=>item.state),
    datasets: [
      {
        label:'Covid Bar chart Data' ,
        data: chartData.map(item => item.positive),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };


  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export  {BarChart};
