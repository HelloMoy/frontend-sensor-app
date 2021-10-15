import React from 'react';
import './header.css';
import menuLogo from '../assets/img/menu-logo.png';

const Header = () => {
    return (
        <div>
            <div class="nav-container">
                <nav>
                    <input type="checkbox" id="nav-toggle" />
                    <label for="nav-toggle" class="burger-menu">
                        <img src={menuLogo} alt="burger menu" class="burger-menu-logo" />
                    </label>
                    <div class="left-menu">
                        <a href="#">Simulation Mode</a>
                        <a href="#">Hardware Mode</a>
                    </div>
                    <a href="#" class="logo">Sensor App</a>
                </nav>
            </div>
        </div>
    )
}

export { Header };
