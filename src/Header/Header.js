import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className="main-header">
            <div className="header-content">
                <NavLink to="/simulation-mode">Simulation Mode</NavLink>
                <NavLink to="/hardware-mode">Hardware Mode</NavLink>
            </div>
            <div className="header-title">Sensor App</div>
        </div>
    )
}

export { Header };
