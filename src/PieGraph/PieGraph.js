import React from 'react';
import './pieGraph.css';
import { Pie } from 'react-chartjs-2';

const PieGraph = ({ red, green, blue }) => {

    return (
        <div>
            <div>
                <Pie
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
                            ,
                            hoverOffset: 4
                        }]
                    }}
                    height="100vh"
                />
            </div>
        </div>
    )
}

export { PieGraph };



