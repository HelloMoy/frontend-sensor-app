import React from 'react';
import './header.css';
import menuLogo from '../assets/img/menu-logo.png';

const Header = () => {
    return (
        <div>
            <div className="nav-container">
                <nav className="grid-nav-container">
                    <input type="checkbox" id="nav-toggle" />
                    <label for="nav-toggle" className="burger-menu">
                        <img src={menuLogo} alt="burger menu" className="burger-menu-logo" />
                    </label>
                    <div className="left-menu">
                        <a >Simulation Mode</a>
                        <a >Hardware Mode</a>
                    </div>
                    <a className="logo">Sensor App</a>
                </nav>
            </div>
        </div>
    )
}

export { Header };
