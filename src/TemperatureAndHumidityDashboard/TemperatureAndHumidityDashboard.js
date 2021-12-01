import React, { useState, useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketContext';
import { DoughnutGraph } from '../DoughnutGraph/';
import { PieGraph } from '../PieGraph/';
import { ValueCard } from '../ValueCard/';
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
        <div className="rgb-led-dashboard">
            <div className="graph-element">
                <div className="graph-element-header">
                    Temperature and Humidity Values Pie Graph
                </div>
                <div className="graph-element-content">
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

            <div className="graph-element">
                <div className="graph-element-header">
                    Temperature and Humidity Values Doughnut Graph
                </div>
                <div className="graph-element-content">
                    <DoughnutGraph DoughnutChartValues={[
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

            <div className="graph-element">
                <div className="graph-element-header">
                    Temperature Value
                </div>
                <div className="graph-element-content">
                    <ValueCard
                        dataValue={temperature}
                        borderColor={'rgb(255, 99, 132)'}
                        backgroundColor={'rgb(255, 224, 230)'} />
                </div>
            </div>

            <div className="graph-element">
                <div className="graph-element-header">
                    Humidity Value
                </div>
                <div className="graph-element-content">
                    <ValueCard
                        dataValue={humidity}
                        borderColor={'rgba(75, 192, 192, 1)'}
                        backgroundColor={'rgb(219, 242, 242)'} />
                </div>
            </div>
        </div>
    )
}


export { TemperatureAndHumidityDashboard }
