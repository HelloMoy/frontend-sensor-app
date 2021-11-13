import React from 'react';
import { Link } from "react-router-dom";
import './header.css';

const Header = ({ setVersionType }) => {
    return (
        <div className="main-header">
            <div className="header-content">
                <Link
                    to="/simulation-version"
                    className="text-decoration-none"
                >
                    <p onClick={() => setVersionType('simulation-version')}>
                        Simulation Version
                    </p>
                </Link>
                <Link
                    to="/hardware-version"
                    className="text-decoration-none"
                >
                    <p onClick={() => setVersionType('hardware-version')}>
                        Hardware Version
                    </p>
                </Link>
            </div>
            <div className="header-title">Sensor App</div>
        </div>
    )
}

export { Header };
