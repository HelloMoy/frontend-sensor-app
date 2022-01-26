import React from 'react';
import { Button } from '../Button/';
import './home.css';

export const Home = () => {
    return (
        <div className="home-background">
            <div className="home-main-container">
                <h1 className="home-title" >Welcome</h1>
                <p className="home-description">In Sensor App you will be able to visualize the last values that a microcontroller and its sensors have detected.</p>
                <p className="home-select-values">You just have to select one of the values you want to view.</p>
                <div className="home-buttons-container">
                    <Button
                        linkTo='/simulation-mode'
                        fontColor='#706B6B'
                        backgroundColor='white'
                        width='15rem'>
                        Simulation Mode
                    </Button>
                    <Button
                        linkTo='/hardware-mode'
                        fontColor='#706B6B'
                        backgroundColor='white'
                        width='15rem'>
                        Hardware Mode
                    </Button>
                </div>
            </div>
        </div>
    )
};
