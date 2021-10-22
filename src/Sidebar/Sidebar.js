import React from 'react';
import './sidebar.css';

const Sidebar = () => {

    return (
        <div className="main-sidebar">
            <div className="sidebar-options">
                <p>Led</p>
                <p>Sensor</p>
                <p>Ligth</p>
            </div>
            <div id="hide-sidebar-icon" className="span-container">
                <span>&#5176;</span>
            </div>
        </div>
    )
}

export { Sidebar };
