import React, { useContext, useEffect, useState } from 'react'
import { SocketContext } from './context/SocketContext';
import { Bar } from 'react-chartjs-2';

export const Guest = () => {
    const [graph, setGraph] = useState()
    const { socket } = useContext(SocketContext);

    const handlerClick = () => {
        socket.emit(
            'hey-backend',
            {
                'callbackToExecute': true,
                'data': 'Hi, Im a data'
            },
            (payload) => {
                console.log(payload.backendResponse);
            });
    }

    useEffect(() => {
        socket.on('hey-frontend', (payload) => {
            console.log(payload);
            setGraph(payload);
        });
        return () => {
            socket.off('hey-frontend');
        }
    }, [socket])


    return (
        <div>
            Guest Window
            <button onClick={handlerClick}>
                Click me for shot an event
            </button>
            {graph && <h1>{graph.Blue}</h1>}
            <div className="graphBar">
                <Bar data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: (graph ? [graph.Red, graph.Blue, graph.Yellow, graph.Green, graph.Purple, graph.Orange] : [0, 0, 0, 0, 0, 0]),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
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
                    }]
                }}

                    options={{
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }}

                    height="100vh"
                />
            </div>
        </div>
    )
}


