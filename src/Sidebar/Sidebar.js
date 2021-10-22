import React from 'react';
import './sidebar.css';

const Sidebar = ({onHideSidebar}) => {

    return (
        <div className="main-sidebar">
            <div className="sidebar-options">
                <p>Led</p>
                <p>Sensor</p>
                <p>Ligth</p>
            </div>
            <div className="span-container" onClick={onHideSidebar}>
                <span>&#5176;</span>
            </div>
        </div>
    )
}

export { Sidebar };
