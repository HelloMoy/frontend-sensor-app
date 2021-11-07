import React from "react";
import { Line } from 'react-chartjs-2';


const MultipleLineChart = ({ redColorvalues, greenColorvalues, blueColorvalues }) => {

    const data = {
        labels: ['', '', '', '', '', ''],
        datasets: [
            {
                label: 'Red',
                data: [...redColorvalues],
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 1)',
                borderColor: 'rgb(255, 224, 230)',
                tension: 0.3
            }, {
                label: 'Green',
                data: [...greenColorvalues],
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgb(219, 242, 242)',
                tension: 0.3
            }, {
                label: 'Blue',
                data: [...blueColorvalues],
                fill: false,
                backgroundColor: 'rgba(54, 162, 235, 1)',
                borderColor: 'rgb(215, 236, 251)',
                tension: 0.3
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };
    return (
        <>
            <Line data={data} options={options} />
        </>
    );
};

export { MultipleLineChart };