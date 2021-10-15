import React from 'react';
import './layOutDoughnutGraph.css';
import { DoughnutGraph } from '../DoughnutGraph/';

const LayOutDoughnutGraph = () => {
    return (
        <div>
            <div className="grid-doughnut-graph">
                <div>
                    <DoughnutGraph />
                </div>
                <div>
                    <DoughnutGraph />
                </div>
                <div>
                    <DoughnutGraph />
                </div>
            </div>
        </div>
    )
}

export {LayOutDoughnutGraph};
