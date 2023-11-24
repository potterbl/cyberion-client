import React from 'react';

import '../styles/NewFormat.css'

import pc20 from '../img/20pc.png'
import pc30 from '../img/30pc.png'
import pc40 from '../img/40pc.png'

import Btn from "./Btn";

const NewFormat = () => {
    return (
        <div className="new-format">
            <div className="new-format_head">
                <h3 className="heading-smaller">
                    УКРАЇНІ ПОТРІБНІ
                </h3>
                <h2 className="heading">
                    КЛУБИ НОВОГО ФОРМАТУ
                </h2>
            </div>
            <div className="new-format_body">
                <div className="new-format_body-container">
                    <h4 className={`${window.innerWidth < 1200 ? 'body-text' : 'body-text-bigger'} bold span-yellow`}>
                        20 PC + 2 консолі
                    </h4>
                    <img src={pc20} alt="20pc" className="new-format_body-img"/>
                    <Btn type={'primary'}>
                        Отримати фін. модель ➝
                    </Btn>
                </div>
                <div className="new-format_body-container">
                    <h4 className={`${window.innerWidth < 1200 ? 'body-text' : 'body-text-bigger'} bold span-yellow`}>
                        30 PC + 3 консолі
                    </h4>
                    <img src={pc30} alt="20pc" className="new-format_body-img"/>
                    <Btn type={'primary'}>
                        Отримати фін. модель ➝
                    </Btn>
                </div>
                <div className="new-format_body-container">
                    <h4 className={`${window.innerWidth < 1200 ? 'body-text' : 'body-text-bigger'} bold span-yellow`}>
                        40 PC + 4 консолі
                    </h4>
                    <img src={pc40} alt="20pc" className="new-format_body-img"/>
                    <Btn type={'primary'}>
                        Отримати фін. модель ➝
                    </Btn>
                </div>
            </div>
        </div>
    );
};

export default NewFormat;
