import React from 'react';

import '../styles/StaticBackground.css'

const StaticBackground = (props) => {

    const {bgImage} = props

    return (
        <div style={{backgroundImage: `url(${bgImage})`}} className="static-background">

        </div>
    );
};

export default StaticBackground;
