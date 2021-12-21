import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({ onHideSidebar }) => {
    const currentPath = useLocation();

    let modeFromPath;
    if (currentPath.pathname.includes('hardware-mode'))
        modeFromPath = 'hardware-mode';
    else if (currentPath.pathname.includes('simulation-mode'))
        modeFromPath = 'simulation-mode';

    return (
        <div className="main-sidebar">
            <div className="sidebar-options">
                <NavLink to={modeFromPath ? `/${modeFromPath}/led` : '/'}>
                    Led
                </NavLink>
                <NavLink to={modeFromPath ? `/${modeFromPath}/sensor` : '/'}>
                    Sensor
                </NavLink>
            </div>
            <div className="span-container" onClick={onHideSidebar}>
                <span>&#5176;</span>
            </div>
        </div>
    )
}

export { Sidebar };
