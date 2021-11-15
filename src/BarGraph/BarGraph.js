import React from 'react';
import { Bar } from 'react-chartjs-2';
import './BarGraph.css';

const BarGraph = ({ BarChartValues, label }) => {

    const data = {
        labels: BarChartValues.map((BarChartValue) => BarChartValue.label),
        datasets: [{
            label: label,
            data: BarChartValues.map((BarChartValue) => BarChartValue.data),
            backgroundColor: BarChartValues.map((BarChartValue) => BarChartValue.backgroundColor),
            borderColor: BarChartValues.map((BarChartValue) => BarChartValue.borderColor),
            borderWidth: 1
        }]
    };

    return (
        <div>
            <div className="graph-bar">
                <Bar
                    data={data}
                    options={{
                        indexAxis: 'y',
                        scales: {
                            x: {
                                beginAtZero: true
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}

export { BarGraph };


