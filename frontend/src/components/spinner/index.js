import React from 'react';

const Spinner = () => {
    const style = {
        margin: 'auto',
        background: 'white',
        display: 'block',
        shapeRendering: 'auto'
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={style} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g>
            <path d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843" fill="none" stroke="#2c8c14" strokeWidth="12"/>
            <path d="M49 3L49 27L61 15L49 3" fill="#2c8c14"/>
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"/>
            </g>
        </svg>
    )
}

export default Spinner;