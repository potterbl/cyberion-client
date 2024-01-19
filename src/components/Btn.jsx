import React from 'react';

import '../styles/Btn.css'

const Btn = (props) => {
    const { type, children, isDisabled, link } = props

    return (
        <button
            disabled={isDisabled}
            className={
                `btn ${type === 'primary' ? 'btn-primary' : type === 'second' ? 'btn-second' : ''}`
            }
            onClick={() => {
                if(type === 'second'){
                    window.location.href = link
                }
            }}
        >
            <p className={`body-text ${type === 'primary' ? 'black-font' : ''}`}>
                {children}
            </p>
        </button>
    );
};

export default Btn;
