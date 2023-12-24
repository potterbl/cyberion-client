import React from 'react';

import '../styles/Rebrending.css'
import {useSelector} from "react-redux";

const Rebrending = () => {
    const {offsetLeft} = useSelector(state => state.container)
    return (
        <div className="rebrending">
            <div className="rebrending-wrapper" style={{left: -offsetLeft + 'px'}}>

            </div>

            <div className="rebrending-left"></div>
            <div className="rebrending-right"></div>
        </div>
    );
};

export default Rebrending;