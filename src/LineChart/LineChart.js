import React from "react";
import { Line } from 'react-chartjs-2';

const LineChart = ({ dataLineChart }) => {

    const datasets = dataLineChart.map((lineChartColor) => (
        {
            label: lineChartColor.label,
            data: [...lineChartColor.colorvalues],
            fill: false,
            backgroundColor: lineChartColor.backgroundColor,
            borderColor: lineChartColor.borderColor,
            tension: 0.3
        }));

    const data = {
        labels: ['', '', '', '', '', ''],
        datasets: datasets,
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