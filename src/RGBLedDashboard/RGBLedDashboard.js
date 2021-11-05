import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/SocketContext';
import { BarGraph } from '../BarGraph/';
import { DoughnutGraph } from '../DoughnutGraph/';
import { PieGraph } from '../PieGraph/';
import './rgbLedDashboard.css';

export const RGBLedDashboard = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [yellow, setYellow] = useState(0);
    const [green, setGreen] = useState(0);
    const [purple, setPurple] = useState(0);
    const [orange, setOrange] = useState(0);
    const { socket } = useContext(SocketContext);

    useEffect(() => {
        socket.on('rgb_values', (payload) => {
            console.log(payload, 'Effect')
            setRed(payload.rgbValues.red);
            setBlue(payload.rgbValues.blue);
            setYellow(0);
            setGreen(payload.rgbValues.green);
            setPurple(0);
            setOrange(0);
        });

        return () => {
            socket.off('rgb_values');
        }
    }, [socket]);

    return (
        <div className="grid-doughnut-graph">
            <div className="graph-element">
                <PieGraph red={red} blue={blue} yellow={yellow} green={green} purple={purple} orange={orange} />
            </div>
            <div className="graph-element">
                <BarGraph red={red} blue={blue} yellow={yellow} green={green} purple={purple} orange={orange} />
            </div>
            <div className="graph-element">
                <DoughnutGraph red={red} blue={blue} yellow={yellow} green={green} purple={purple} orange={orange} />
            </div>
        </div>
    )
}
