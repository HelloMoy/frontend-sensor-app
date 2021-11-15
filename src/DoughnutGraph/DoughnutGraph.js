import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './doughnutGraph.css';

const DoughnutGraph = ({ DoughnutChartValues }) => {

    const data = {
        labels: DoughnutChartValues.map((DoughnutChartValue) => DoughnutChartValue.label),
        datasets: [{
            data: DoughnutChartValues.map((DoughnutChartValue) => DoughnutChartValue.data),
            backgroundColor: DoughnutChartValues.map((DoughnutChartValue) => DoughnutChartValue.backgroundColor),
            borderColor: DoughnutChartValues.map((DoughnutChartValue) => DoughnutChartValue.borderColor),
            borderWidth: 1,
            hoverOffset: 4
        }]
    };

    return (
        <div className="wrapper-graph-doughnut">
            <div className="graph-doughnut">
                <Doughnut
                    data={data}
                    height="100vh"
                />
            </div>
        </div>
    )
};

export { DoughnutGraph };
