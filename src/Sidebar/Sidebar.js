import React from 'react';
import { Link } from "react-router-dom";
import './sidebar.css';

const Sidebar = ({ onHideSidebar, versionType }) => {

    return (
        <div className="main-sidebar">
            <div className="sidebar-options">
                <Link to={`/${versionType}/led`} className="text-decoration-none">
                    <p>Led</p>
                </Link>
                <Link to={`/${versionType}/sensor`} className="text-decoration-none">
                    <p>Sensor</p>
                </Link>
                <Link to={`/${versionType}`} className="text-decoration-none">
                    <p>Ligth</p>
                </Link>
            </div>
            <div className="span-container" onClick={onHideSidebar}>
                <span>&#5176;</span>
            </div>
        </div>
    )
}

export { Sidebar };
