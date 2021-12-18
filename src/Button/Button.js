import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './button.css';

function Button({linkTo, fontColor, backgroundColor, children}) {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const inLineStyleParagraph = {
        'color': isMouseOver ? backgroundColor : fontColor,
        'backgroundColor': isMouseOver ? fontColor : backgroundColor,
        'border': `0.2rem solid ${fontColor}`,
        'textAlign': 'center',
        'fontSize': '1.5rem',
        'padding': '0.5rem',
        'width': '15rem',
        'borderRadius': '1rem',
        'cursor': 'pointer'
    }

    const toggleIsMouseOver = () => {
        setIsMouseOver(!isMouseOver);
    }

    return (
        <Link to={linkTo} className="text-decoration-none">
        <p
            className="button-module"
            onMouseEnter={toggleIsMouseOver}
            onMouseLeave={toggleIsMouseOver}
            style={inLineStyleParagraph}
        >
            {children}
        </p>
        </Link>
    );
};

export { Button };
