import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="main-header">
            <div className="header-content">
                <p>Simulation Version</p>
                <p>Hardware Version</p>
            </div>
            <div className="header-title">Sensor App</div>
        </div>
    )
}

export { Header };
