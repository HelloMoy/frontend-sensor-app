import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/SocketContext';
import { BarGraph } from '../BarGraph/';
import { DoughnutGraph } from '../DoughnutGraph/';
import { PieGraph } from '../PieGraph/';
import { LineChart } from '../LineChart/';
import { ValueCard } from '../ValueCard/';
import './rgbLedDashboard.css';

export const RGBLedDashboard = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [redPackage, setRedPackage] = useState([]);
    const [greenPackage, setGreenPackage] = useState([]);
    const [bluePackage, setBluePackage] = useState([]);
    const { socket } = useContext(SocketContext);

    useEffect(() => {
        socket.on('values', (payload) => {
            setRed(payload.lastRgbColorValue.red);
            setBlue(payload.lastRgbColorValue.blue);
            setGreen(payload.lastRgbColorValue.green);
            setRedPackage(payload.rgbColorsValuesPackages.red);
            setGreenPackage(payload.rgbColorsValuesPackages.green);
            setBluePackage(payload.rgbColorsValuesPackages.blue);
        });

        socket.on('random-data', (payload) => {
            console.log({payload})
        });

        return () => {
            socket.off('values');
            socket.off('random-data');
        }
    }, [socket]);

    return (
        <div className="rgb-led-dashboard">
            <div className="graph-element">
                <div className="graph-element-header">
                    RGB Color Pie Graph
                </div>
                <div className="graph-element-content">
                    <PieGraph PieChartValues={[
                        {
                            data: red,
                            label: "Red",
                            borderColor: "rgb(255, 99, 132)",
                            backgroundColor: "rgba(255, 99, 132, 0.2)"
                        },
                        {
                            data: green,
                            label: "Green",
                            borderColor: "rgba(75, 192, 192, 1)",
                            backgroundColor: "rgb(219, 242, 242)"
                        },
                        {
                            data: blue,
                            label: "Blue",
                            borderColor: "rgba(54, 162, 235, 1)",
                            backgroundColor: "rgb(215, 236, 251)"
                        }
                    ]} />
                </div>
            </div>
            <div className="graph-element">
                <div className="graph-element-header">
                    RGB Color Bar Graph
                </div>
                <div className="graph-element-content">
                    <BarGraph BarChartValues={[
                        {
                            data: red,
                            label: "Red",
                            borderColor: "rgb(255, 99, 132)",
                            backgroundColor: "rgba(255, 99, 132, 0.2)"
                        },
                        {
                            data: green,
                            label: "Green",
                            borderColor: "rgba(75, 192, 192, 1)",
                            backgroundColor: "rgb(219, 242, 242)"
                        },
                        {
                            data: blue,
                            label: "Blue",
                            borderColor: "rgba(54, 162, 235, 1)",
                            backgroundColor: "rgb(215, 236, 251)"
                        }
                    ]}
                        label="Color Intensity"
                    />
                </div>
            </div>
            <div className="graph-element">
                <div className="graph-element-header">
                    RGB Color Doughnut Graph
                </div>
                <div className="graph-element-content">
                    <DoughnutGraph DoughnutChartValues={[
                        {
                            data: red,
                            label: "Red",
                            borderColor: "rgb(255, 99, 132)",
                            backgroundColor: "rgba(255, 99, 132, 0.2)"
                        },
                        {
                            data: green,
                            label: "Green",
                            borderColor: "rgba(75, 192, 192, 1)",
                            backgroundColor: "rgb(219, 242, 242)"
                        },
                        {
                            data: blue,
                            label: "Blue",
                            borderColor: "rgba(54, 162, 235, 1)",
                            backgroundColor: "rgb(215, 236, 251)"
                        }
                    ]} />
                </div>
            </div>
            <div className="graph-element">
                <div className="graph-element-header">
                    Red Color Line Chart
                </div>
                <div className="graph-element-content">
                    <LineChart LineChartValues={[
                        {
                            datavalues: redPackage,
                            label: "Red",
                            backgroundColor: "rgb(255, 99, 132)",
                            borderColor: "rgba(255, 99, 132, 0.2)"
                        }
                    ]} />
                </div>
            </div>
            <div className="graph-element">
                <div className="graph-element-header">
                    Green Color Line Chart
                </div>
                <div className="graph-element-content">
                    <LineChart LineChartValues={[
                        {
                            datavalues: greenPackage,
                            label: "Green",
                            backgroundColor: "rgba(75, 192, 192, 1)",
                            borderColor: "rgb(219, 242, 242)"
                        }
                    ]} />
                </div>
            </div>
            <div className="graph-element">
                <div className="graph-element-header">
                    Blue Color Line Chart
                </div>
                <div className="graph-element-content">
                    <LineChart LineChartValues={[
                        {
                            datavalues: bluePackage,
                            label: "Blue",
                            backgroundColor: "rgba(54, 162, 235, 1)",
                            borderColor: "rgb(215, 236, 251)"
                        }
                    ]} />
                </div>
            </div>
            <div className="graph-element">
                <div className="graph-element-header">
                    RGB Color Line Chart
                </div>
                <div className="graph-element-content">
                    <LineChart LineChartValues={[
                        {
                            datavalues: redPackage,
                            label: "Red",
                            backgroundColor: "rgb(255, 99, 132)",
                            borderColor: "rgba(255, 99, 132, 0.2)"
                        },
                        {
                            datavalues: greenPackage,
                            label: "Green",
                            backgroundColor: "rgba(75, 192, 192, 1)",
                            borderColor: "rgb(219, 242, 242)"
                        },
                        {
                            datavalues: bluePackage,
                            label: "Blue",
                            backgroundColor: "rgba(54, 162, 235, 1)",
                            borderColor: "rgb(215, 236, 251)"
                        }
                    ]} />
                </div>
            </div>

            <div className="graph-element">
                <div className="graph-element-header">
                    Red Color Value
                </div>
                <div className="graph-element-content">
                    <ValueCard
                        dataValue={red}
                        borderColor={'rgb(255, 99, 132)'}
                        backgroundColor={'rgb(255, 224, 230)'} />
                </div>
            </div>

            <div className="graph-element">
                <div className="graph-element-header">
                    Green Color Value
                </div>
                <div className="graph-element-content">
                    <ValueCard
                        dataValue={green}
                        borderColor={'rgba(75, 192, 192, 1)'}
                        backgroundColor={'rgb(219, 242, 242)'} />
                </div>
            </div>

            <div className="graph-element">
                <div className="graph-element-header">
                    Blue Color Value
                </div>
                <div className="graph-element-content">
                    <ValueCard
                        dataValue={blue}
                        borderColor={'rgb(54, 162, 235)'}
                        backgroundColor={'rgb(215, 236, 251)'} />
                </div>
            </div>
        </div>
    )
};
