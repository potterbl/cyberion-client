import React from 'react';

const CustomButton = ({children, customStyle}) => {
    return (
        <button className={customStyle}>
            {children}
        </button>
    );
};

export default CustomButton;
