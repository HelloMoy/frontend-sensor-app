import React from "react";
import './valueCard.css';

const ValueCard = ({ dataValue, borderColor, backgroundColor }) => {
    return (
        <>
            <div className="value-card-container">
                <div
                    style={{
                        borderColor ,
                        backgroundColor
                    }}
                    className="color-element"
                >
                </div>
                <div className="value-card">
                    {dataValue}
                </div>
            </div>
        </>
    )
}

export { ValueCard };
