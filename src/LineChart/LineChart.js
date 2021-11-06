import React, { useState } from "react";
import { Line } from 'react-chartjs-2';

const deleteFirstColorValue = (listValues) => {
    listValues.splice(0, 1);
    return listValues;
}

const deleteFirstElementIfItHasMoreThanTheCondition = (listValues = [], maxNumberOfElements) => {
    if (listValues.length > maxNumberOfElements) {
        listValues = deleteFirstColorValue(listValues);
    }
    return listValues;
}

const lastColorValue = (listValues) => {
    return listValues[listValues.length - 1];
}

const areDifferent = (lastColorValue, currentColorValue) => (lastColorValue !== currentColorValue && (currentColorValue > (lastColorValue + 15) || currentColorValue < (lastColorValue - 15)));

const LineChart = ({ color, label, backgroundColor, borderColor }) => {

    const [colorValues, setColorValues] = useState([0,0,0,0,0,0]);

    if (areDifferent(lastColorValue(colorValues), color)) {
        setColorValues( () => colorValues.push(color));
        setColorValues( () => deleteFirstElementIfItHasMoreThanTheCondition(colorValues, 6));
    }

    const data = {
        labels: ['', '', '', '', '', ''],
        datasets: [
            {
                label: label,
                data: [colorValues[0], colorValues[1], colorValues[0], colorValues[3], colorValues[4], colorValues[5]],
                fill: false,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                tension: 0.3
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };
    return (
        <>
            <Line data={data} options={options} />
        </>
    );
};

export { LineChart };