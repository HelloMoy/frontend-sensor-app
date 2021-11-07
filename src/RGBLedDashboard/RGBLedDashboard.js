import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/SocketContext';
import { BarGraph } from '../BarGraph/';
import { DoughnutGraph } from '../DoughnutGraph/';
import { PieGraph } from '../PieGraph/';
import { LineChart } from '../LineChart/';
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
        socket.on('rgb_values', (payload) => {
            console.log(payload, 'Effect');
            setRed(payload.lastRgbColorValue.red);
            setBlue(payload.lastRgbColorValue.blue);
            setGreen(payload.lastRgbColorValue.green);
            setRedPackage(payload.rgbColorsValuesPackages.red);
            setGreenPackage(payload.rgbColorsValuesPackages.green);
            setBluePackage(payload.rgbColorsValuesPackages.blue);
        });

        return () => {
            socket.off('rgb_values');
        }
    }, [socket]);

    return (
        <div className="grid-doughnut-graph">
            <div className="graph-element">
                <PieGraph red={red} green={green} blue={blue} />
            </div>
            <div className="graph-element">
                <BarGraph red={red} green={green} blue={blue} />
            </div>
            <div className="graph-element">
                <DoughnutGraph red={red} green={green} blue={blue} />
            </div>
            <div className="graph-element">
                <LineChart dataLineChart={[
                    {
                        colorvalues: redPackage,
                        label: "Red",
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgba(255, 99, 132, 0.2)"
                    }
                ]} />
            </div>
            <div className="graph-element">
                <LineChart dataLineChart={[
                    {
                        colorvalues: greenPackage,
                        label: "Green",
                        backgroundColor: "rgba(75, 192, 192, 1)",
                        borderColor: "rgb(219, 242, 242)"
                    }
                ]} />
            </div>
            <div className="graph-element">
                <LineChart dataLineChart={[
                    {
                        colorvalues: bluePackage,
                        label: "Blue",
                        backgroundColor: "rgba(54, 162, 235, 1)",
                        borderColor: "rgb(215, 236, 251)"
                    }
                ]} />
            </div>
            <div className="graph-element">
                <LineChart dataLineChart={[
                    {
                        colorvalues: redPackage,
                        label: "Red",
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgba(255, 99, 132, 0.2)"
                    },
                    {
                        colorvalues: greenPackage,
                        label: "Green",
                        backgroundColor: "rgba(75, 192, 192, 1)",
                        borderColor: "rgb(219, 242, 242)"
                    },
                    {
                        colorvalues: bluePackage,
                        label: "Blue",
                        backgroundColor: "rgba(54, 162, 235, 1)",
                        borderColor: "rgb(215, 236, 251)"
                    }
                ]} />
            </div>
        </div>
    )
}
