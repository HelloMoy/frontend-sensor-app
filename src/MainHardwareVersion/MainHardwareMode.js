import React from "react";
import { SvgEsp32 } from '../svg/SvgEsp32'
import './mainHardwareMode.css';
const MainHardwareMode = () => {
    return (
        <div className="main-hardware-mode-container">
            <div className="hardware-mode-text-container">
                <h1 className="hardware-mode-title">
                    Hardware Mode
                </h1>
                <p className="hardware-mode-text">
                    Here you will be able to visualize the data in real time that the ESP32 microcontroller sends.
                </p>
                <p className="hardware-mode-text">
                    Remember that in this mode it is necessary to have the microcontroller with the electronic components required for its operation.
                </p>
                <p className="hardware-mode-button-title">
                    Choose one of the available modes
                </p>
                <div className="hardware-mode-button-container">
                    <p>Led</p>
                    <p>Sensor</p>
                </div>
            </div>
            <div className="hardware-mode-image-container">
                <div className="hardware-mode-svg">
                    <SvgEsp32 className="hardware-mode-svg-esp32" />
                </div>
            </div>
        </div >
    )
};

export { MainHardwareMode };