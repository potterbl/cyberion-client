import React, { useState } from 'react';
import '../styles/Input.css';

const Input = ({ children, type, setParental }) => {
    const [isActive, setIsActive] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const timeInput = (value) => {
        let cleanedValue = value.replace(/\D/g, '');

        let formattedValue = '';
        for (let i = 0; i < 4; i++) {
            if (cleanedValue[i] !== undefined) {
                if(i === 0 && cleanedValue[0] > 2){
                    formattedValue += 2
                } else if(i === 1 && cleanedValue[1] > 3){
                    formattedValue += 3
                }  else if (i === 2 && cleanedValue[2] > 5) {
                    formattedValue += 5
                } else {
                    formattedValue += cleanedValue[i];
                }
            } else {
                formattedValue += '_';
            }
            if (i === 1) {
                formattedValue += ':';
            }

        }

        setInputValue(cleanedValue !== '' ? formattedValue : '');
        setParental(cleanedValue !== '' ? formattedValue : '')
        setIsActive(cleanedValue !== '');
    };

    const numberInput = (value) => {
        const cleanedValue = value.replace(/\D/g, '');

        let formattedValue = '+';
        for (let i = 0; i < cleanedValue.length; i++) {
            formattedValue += cleanedValue[i];

            if (i === 2) {
                formattedValue += ' (';
            } else if (i === 4) {
                formattedValue += ') ';
            } else if (i === 7 || i === 9) {
                formattedValue += '-';
            }
        }

        setInputValue(cleanedValue !== '' ? formattedValue : '');
        setParental(cleanedValue !== '' ? formattedValue : '')
        setIsActive(cleanedValue !== '');
    }


    const handleInputChange = (value) => {
        if (type === 'time') {
            timeInput(value);
        } else if (type === 'number'){
            numberInput(value)
        }
    };

    const handleInputDelete = (value) => {
        if (type === 'time') {
            const cleanedValue = inputValue.replace(/\D/g, '');
            handleInputChange(cleanedValue.slice(0, -1));
        } else if (type === 'number') {
            const cleanedValue = inputValue.replace(/\D/g, '');
            handleInputChange(cleanedValue.slice(0, -1));
        }
    };

    const handleInput = (e) => {
        const inputType = e.nativeEvent.inputType;
        const value = e.target.value;

        if(type === 'number' || type === 'time') {
            if (inputType === 'deleteContentBackward') {
                handleInputDelete(value);
            } else {
                handleInputChange(value);
            }
        } else {
            setInputValue(value)
            setIsActive(value !== '')
            setParental(value)
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
