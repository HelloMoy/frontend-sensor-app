import React from 'react';
import './sidebarFloatinButton.css';

const SidebarFloatinButton = ({onShowSidebar}) => {

    return (
        <span className="sidebar-floating-button" onClick={onShowSidebar}>&#9776;</span>
    )
}

export { SidebarFloatinButton };
