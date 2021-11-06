import React from 'react';
import { Bar } from 'react-chartjs-2';
import './BarGraph.css';

const BarGraph = ({ red, green, blue }) => {

    return (
        <div>
            <div className="graph-bar">
                <Bar
                    data={{
                        labels: ['Red', 'Green', 'Blue'],
                        datasets: [{
                            label: 'Color Intensity',
                            data: [red, green, blue],
                            backgroundColor: [
                                'rgb(255, 224, 230)',
                                'rgb(219, 242, 242)',
                                'rgb(215, 236, 251)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(54, 162, 235, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }}
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


