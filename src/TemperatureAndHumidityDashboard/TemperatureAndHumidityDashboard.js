import React, { useState, useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketContext';
import { PieGraph } from '../PieGraph/';
import './temperatureAndHumidityDashboard.css';

const TemperatureAndHumidityDashboard = () => {

    const [temperature, seTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const { socket } = useContext(SocketContext);

    useEffect(() => {
        socket.on('values', (payload) => {
            console.log(payload)
            seTemperature(payload.temperatureAndHumidityValues.temperature);
            setHumidity(payload.temperatureAndHumidityValues.humidity);
        });

        return () => {
            socket.off('values');
        }
    }, [socket]);

    return (
        <div className="grid-doughnut-graph">
            <div className="graph-element">
            <PieGraph PieChartValues={[
                    {
                        data: temperature,
                        label: "Temperature",
                        borderColor: "rgb(255, 99, 132)",
                        backgroundColor: "rgba(255, 99, 132, 0.2)"
                    },
                    {
                        data: humidity,
                        label: "Humidity",
                        borderColor: "rgba(75, 192, 192, 1)",
                        backgroundColor: "rgb(219, 242, 242)"
                    }
                ]} />
            </div>
        </div>
    )
}


export { TemperatureAndHumidityDashboard }
