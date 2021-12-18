import React from "react";
import { SvgEsp32 } from '../svg/SvgEsp32';
import { SvgEsp32Horizontal } from '../svg/SvgEsp32Horizontal';
import './mainHardwareMode.css';
import { Button } from "../Button/";

const MainHardwareMode = () => {
    return (
        <div className="main-hardware-mode-container">
            <div className="hardware-mode-text-container">
                <h1 className="hardware-mode-title">
                    Hardware Mode
                </h1>
                <div className="hardware-mode-horizontal-image-container">
                    <div className="hardware-mode-horizontal-svg">
                        <SvgEsp32Horizontal className="hardware-mode-horizontal-svg-esp32" />
                    </div>
                </div>
                <div className="hardware-mode-description-container">
                    <p className="hardware-mode-text">
                        Here you will be able to visualize the data in real time that the ESP32 microcontroller sends.
                    </p>
                    <p className="hardware-mode-text">
                        Remember that in this mode it is necessary to have the microcontroller with the electronic components required for its operation.
                    </p>
                </div>
                <p className="hardware-mode-button-title">
                    Choose one of the available modes
                </p>
                <div className="hardware-mode-button-container">
                    <Button
                        linkTo='/hardware-version/led'
                        fontColor='#706B6B'
                        backgroundColor='white'
                        width='15rem'>
                        Led
                    </Button>
                    <Button
                        linkTo='/hardware-version/sensor'
                        fontColor='#706B6B'
                        backgroundColor='white'
                        width='15rem'>
                        Sensor
                    </Button>
                </div>
            </div>
            <div className="hardware-mode-main-image-container">
                <div className="hardware-mode-svg">
                    <SvgEsp32 className="hardware-mode-svg-esp32" />
                </div>
            </div>
        </div >
    )
};

export { MainHardwareMode };