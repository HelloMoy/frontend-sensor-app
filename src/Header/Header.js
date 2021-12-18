import React from 'react';
import { Button } from '../Button/';
import './header.css';

const Header = ({ setVersionType }) => {
    return (
        <div className="main-header">
            <div className="header-content">
            <Button
                    linkTo="/hardware-version"
                    fontColor='white'
                    backgroundColor='#fa93e7'
                    width='auto'>
                    Simulation Mode
                </Button>
                {/* <Link
                    to="/simulation-version"
                    className="text-decoration-none"
                >
                    <p onClick={() => setVersionType('simulation-version')}>
                        Simulation Mode
                    </p>
                </Link> */}
                {/* <Link
                    to="/hardware-version"
                    className="text-decoration-none"
                >
                    <p onClick={() => setVersionType('hardware-version')}>
                        Hardware Mode
                    </p>
                </Link> */}

                <Button
                    linkTo="/hardware-version"
                    fontColor='white'
                    backgroundColor='#fa93e7'
                    width='auto'>
                    Hardware Mode
                </Button>
            </div>
            <div className="header-title">Sensor App</div>
        </div>
    )
}

export { Header };
