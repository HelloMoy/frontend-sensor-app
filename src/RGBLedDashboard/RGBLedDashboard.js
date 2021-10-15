import React from 'react';
import { BarGraph } from '../BarGraph/';
import { DoughnutGraph } from '../DoughnutGraph/';
import { PieGraph } from '../PieGraph/';
import './rgbLedDashboard.css';

export const RGBLedDashboard = () => {
    return (
        <div>
            <div className="grid-doughnut-graph">
                <div>
                    <DoughnutGraph />
                </div>
                <div>
                    <BarGraph />
                </div>
                <div>
                    <PieGraph />
                </div>
            </div>
        </div>
    )
}
