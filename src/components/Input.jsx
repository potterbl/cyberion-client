import React, { useState } from 'react';
import '../styles/Input.css';

const Input = ({ children, type }) => {
    const [isActive, setIsActive] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const timeInput = (value) => {
        const cleanedValue = value.replace(/\D/g, '');



        let formattedValue = '';
        for (let i = 0; i < 4; i++) {
            if (cleanedValue[i] !== undefined) {
                formattedValue += cleanedValue[i];
            } else {
                formattedValue += '_';
            }
            if (i === 1) {
                formattedValue += ':';
            }
        }

        setInputValue(cleanedValue !== '' ? formattedValue : '');
        setIsActive(cleanedValue !== '');
    };

    const handleInputChange = (value) => {
        if (type === 'time') {
            timeInput(value);
        }
    };

    const handleInputDelete = (value) => {
        if (type === 'time') {
            const cleanedValue = value.replace(/\D/g, '');
            handleInputChange(cleanedValue.slice(0, -1));
        }
    };

    const handleInput = (e) => {
        const inputType = e.nativeEvent.inputType;
        const value = e.target.value;

        if (inputType === 'deleteContentBackward') {
            handleInputDelete(value);
        } else {
            handleInputChange(value);
        }
    };

    return (
        <div className="input-wrapper">
            <p className={`input-label ${isActive ? 'input-label_active' : ''}`}>
                {children}
            </p>
            <input
                type="text"
                className="input"
                onChange={(e) => handleInput(e)}
                value={inputValue}
            />
        </div>
    );
};

export default Input;