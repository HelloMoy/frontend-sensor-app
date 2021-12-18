import React from 'react';
import { Button } from '../Button/';
import './sidebar.css';

const Sidebar = ({ onHideSidebar, versionType }) => {

    return (
        <div className="main-sidebar">
            <div className="sidebar-options">
                <Button
                    linkTo={`/${versionType}/led`}
                    fontColor='white'
                    backgroundColor='#9dcfff'
                    width='15rem'>
                    Led
                </Button>
                <Button
                    linkTo={`/${versionType}/sensor`}
                    fontColor='white'
                    backgroundColor='#9dcfff'
                    width='15rem'>
                    Sensor
                </Button>
            </div>
            <div className="span-container" onClick={onHideSidebar}>
                <span>&#5176;</span>
            </div>
        </div>
    )
}

export { Sidebar };
