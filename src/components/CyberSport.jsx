import React from 'react';

import '../styles/CyberSport.css'

import cybersportImg from '../img/cybersport.png'

const CyberSport = () => {
    return (
        <div className="cybersport">
            <div className="cybersport-left">
                <h3 className="heading-smaller">
                    <span className="span-yellow">
                    В 2020 РОЦІ<br/>
                    КІБЕРСПОРТ
                        {
                            window.innerWidth > 1200 &&
                            <br/>
                        }
                    В УКРАЇНІ<br/>
                    </span>
                    ОФІЦІЙНО<br/>
                    ВИЗНАНО
                    {
                        window.innerWidth > 1200 &&
                        <br/>
                    }
                    ВИДОМ СПОРТУ<br/>
                </h3>
            </div>
            <div className="cybersport-right">
                <img src={cybersportImg} alt="" className="cybersport-right_image"/>
            </div>
        </div>
    );
};

export default CyberSport;
