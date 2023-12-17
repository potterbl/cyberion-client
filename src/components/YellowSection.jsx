import React from 'react';

import '../styles/YellowSection.css'
import {useSelector} from "react-redux";

const YellowSection = () => {
    const {offsetLeft: sectionLeft} = useSelector(state => state.container)

    return (
        <div className="yellow-section">
            <div className="yellow-section_outer" style={{left: `-${Math.ceil(sectionLeft)}px`}}>
            </div>
            <div className="yellow-section_container">
                <p className="body-text-bigger black-font bold">
                    Інвестиції від
                    {
                        window.innerWidth < 1200 && window.innerWidth > 768 ?
                        <br/>
                            : ' '
                    }
                    70 000 $
                </p>
            </div>
            <div className="yellow-section_container">
                <p className="body-text-bigger black-font bold">
                    Прибуток від
                    {
                        window.innerWidth < 1200 && window.innerWidth > 768 ?
                        <br/>
                            : ' '
                    }
                    5 000 $
                </p>
            </div>
            <div className="yellow-section_container">
                <p className="body-text-bigger black-font bold">
                    Окупність від
                    {
                        window.innerWidth < 1200 && window.innerWidth > 768 ?
                        <br/>
                            : ' '
                    }
                    14 місяців
                </p>
            </div>
        </div>
    );
};

export default YellowSection;
