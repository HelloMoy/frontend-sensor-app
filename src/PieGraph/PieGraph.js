import React from 'react';
import './pieGraph.css';
import { Pie } from 'react-chartjs-2';

const PieGraph = ({ PieChartValues }) => {

    const data = {
        labels: PieChartValues.map((PieChartValue) => PieChartValue.label),
        datasets: [{
            data: PieChartValues.map((PieChartValue) => PieChartValue.data),
            backgroundColor: PieChartValues.map((PieChartValue) => PieChartValue.backgroundColor),
            borderColor: PieChartValues.map((PieChartValue) => PieChartValue.borderColor),
            borderWidth: 1,
            hoverOffset: 4
        }]
    };

    return (
        <div>
            <div>
                <Pie
                    data={data}
                    height="100vh"
                />
            </div>
        </div>
    )
}

export { PieGraph };



