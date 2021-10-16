import React from 'react';
import './sidebar.css';
import sensorLogo from '../assets/img/sensor-logo.png'

const Sidebar = () => {

    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar" className="sidebar active">
                <div className="toggle-button">
                    {/* <span onClick={onToggleSidebar} >&#9776;</span> */}
                    <span >&#11207;</span>
                </div>
                <ul>
                    <li>
                        <img src={sensorLogo} alt="Logotipo" className="logo" />
                    </li>
                    <li>RGB Led</li>
                    <li>Sensor 1</li>
                    <li>Sensor 2</li>
                </ul>
            </nav>
        </div>
    )
}

export { Sidebar };
