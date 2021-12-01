import React from 'react';
import { Link } from "react-router-dom";
import './sidebar.css';

const Sidebar = ({ onHideSidebar, versionType }) => {

    let linkCssStyle = {};
    let paragraphCssStyle = {};

    if (!versionType) {
        linkCssStyle = { 'pointerEvents': 'none' };
        paragraphCssStyle = { 'backgroundColor': 'rgba(110, 110, 110, 0.466)' };
    }

    return (
        <div style={paragraphCssStyle} className="main-sidebar">
            <div className="sidebar-options">
                <Link style={linkCssStyle} to={`/${versionType}/led`} className="text-decoration-none">
                    <p>Led</p>
                </Link>
                <Link style={linkCssStyle} to={`/${versionType}/sensor`} className="text-decoration-none">
                    <p>Sensor</p>
                </Link>
                <Link style={linkCssStyle} to={`/${versionType}`} className="text-decoration-none">
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
