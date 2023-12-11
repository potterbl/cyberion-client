import React from 'react';

import '../styles/Loader.css'

const Loader = () => {

    return (
        <div className="loader">
            <div className="loader-content">
                <h1 className="title span-yellow">CYBERI</h1>
                <div className="loader-switcher">
                    <div className="loader-circle"></div>
                    <p className="heading-smaller loader-n">N</p>
                </div>
            </div>
        </div>
    );
};

export default Loader;
