import React from "react";
import { Line } from 'react-chartjs-2';

const LineChart = ({ colorvalues, label, backgroundColor, borderColor }) => {

    const data = {
        labels: ['', '', '', '', '', ''],
        datasets: [
            {
                label: label,
                data: [...colorvalues],
                fill: false,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
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

export { LineChart };