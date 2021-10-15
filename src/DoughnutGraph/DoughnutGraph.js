import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/SocketContext';
import { Doughnut } from 'react-chartjs-2';
import './doughnutGraph.css'

const DoughnutGraph = () => {
    const [graphData, setGraphData] = useState();
    const { socket } = useContext(SocketContext);

    useEffect(() => {
        socket.on('hey-frontend', (payload) => {
            console.log(payload, 'Effect')
            setGraphData(payload);
        });

        return () => {
            socket.off('hey-frontend');
        }
    }, [socket]);


    return (
        <div className="wrapper-graph-doughnut">
            <div className="data-in-graph-doughnut">
                {graphData && 
                <div className="data">
                <p>Red: {graphData.Red}</p>
                <p>Blue: {graphData.Blue}</p>
                <p>Green: {graphData.Green}</p>
                </div>
            }
            </div>
            <div className="graph-doughnut">
                <Doughnut
                    data={{
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [{
                            label: '# of Votes',
                            data: (graphData ? [graphData.Red, graphData.Blue, graphData.Yellow, graphData.Green, graphData.Purple, graphData.Orange] : [0, 0, 0, 0, 0, 0]),
                            backgroundColor: [
                                'rgb(255, 224, 230)',
                                'rgb(215, 236, 251)',
                                'rgb(255, 245, 221)',
                                'rgb(219, 242, 242)',
                                'rgb(235, 224, 255)',
                                'rgb(255, 236, 217)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
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

export { DoughnutGraph };