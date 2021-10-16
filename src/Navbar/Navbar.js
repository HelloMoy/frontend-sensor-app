import React, {useRef} from 'react';
import './navbar.css';
import sensorLogo from '../assets/img/sensor-logo.png'

const Navbar = () => {

    const refSidebar = useRef();

    const onToggleSidebar = () => {
        refSidebar.current.classList.toggle('active');
    }

    return (
        <div>
            <nav id="sidebar" className="sidebar active" ref={refSidebar} >
                <div className="toggle-button">
                    {/* <span onClick={onToggleSidebar} >&#9776;</span> */}
                    <span onClick={onToggleSidebar}>&#11207;</span>
                </div>
                <ul>
                    <li>
                        <img src={sensorLogo} alt="Logotipo" className="logo" />
                    </li>
                    <li>RGB Led</li>
                    <li>Sensor 1</li>
                    <li>Sensor 2</li>
                </ul>
            </nav>
        </div>
    )
}

export { Navbar };