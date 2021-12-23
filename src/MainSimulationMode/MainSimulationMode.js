import React from 'react';
import { SvgRandomNumber } from '../svg/SvgRandomNumber';
import { Button } from "../Button/";
import './mainSimulationMode.css';

const MainSimulationMode = () => {
    return (
        <div className="main-hardware-mode-container">
            <div className="hardware-mode-text-container">
                <h1 className="hardware-mode-title">
                    Simulation Mode
                </h1>
                <div className="hardware-mode-horizontal-image-container">
                    <div className="hardware-mode-horizontal-svg">
                        <SvgRandomNumber className="hardware-mode-horizontal-svg-esp32" />
                    </div>
                </div>
                <div className="hardware-mode-description-container">
                    <p className="hardware-mode-text">
                        Here you will be able to visualize the randomly generated data.
                    </p>
                    <p className="hardware-mode-text">
                        Remember that in this mode it is not necessary to have a microcontroller, since the data is generated randomly.
                    </p>
                </div>
                <p className="hardware-mode-button-title">
                    Choose one of the available modes
                </p>
                <div className="hardware-mode-button-container">
                    <Button
                        linkTo='/simulation-mode/led'
                        fontColor='#706B6B'
                        backgroundColor='white'
                        width='15rem'>
                        Led
                    </Button>
                    <Button
                        linkTo='/simulation-mode/sensor'
                        fontColor='#706B6B'
                        backgroundColor='white'
                        width='15rem'>
                        Sensor
                    </Button>
                </div>
            </div>
            <div className="hardware-mode-main-image-container">
                <div className="hardware-mode-svg">
                    <SvgRandomNumber className="hardware-mode-svg-esp32" />
                </div>
            </div>
        </div >
    );
};

export { MainSimulationMode };