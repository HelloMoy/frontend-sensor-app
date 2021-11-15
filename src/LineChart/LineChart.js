import React from "react";
import { Line } from 'react-chartjs-2';

const LineChart = ({ LineChartValues }) => {

    const datasets = LineChartValues.map((LineChartValue) => (
        {
            label: LineChartValue.label,
            data: [...LineChartValue.datavalues],
            fill: false,
            backgroundColor: LineChartValue.backgroundColor,
            borderColor: LineChartValue.borderColor,
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