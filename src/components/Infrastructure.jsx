import React from 'react';

import '../styles/Infrastructure.css'

import atmosphere from '../img/atmosphere.png'
import tournament from '../img/tournament.png'
import service from '../img/service.png'
import devices from '../img/devices.png'
import x from '../img/x.svg'

const Infrastructure = () => {
    return (
        <div className="infrastructure">
            <div className="infrastructure-left">
                <h2 className="heading uppercase">
                    <span className="span-yellow">гравці є</span> -
                    інфраструктури немає
                </h2>
                <p className="body-text">
                    На кожне велике місто в середньому припадає<br/>
                    лише 1 комп'ютерний клуб старого формату.
                </p>
                <p className="body-text-bigger">
                    <span className="span-yellow">90%</span> гравців немають клубів
                    поряд з домом
                </p>
            </div>
            <div className="infrastructure-right">
                <div className="infrastructure-right_box" style={{backgroundImage: `url(${service})`}}>
                    <div className="infrastructure-right_box-content">
                        <img src={x} alt="" className="infrastructure-right_box-content_x"/>
                        <p className="body-text-bigger uppercase">
                            поганий<br/>
                            сервіс
                        </p>
                    </div>
                </div>
                <div className="infrastructure-right_box" style={{backgroundImage: `url(${devices})`}}>
                    <div className="infrastructure-right_box-content">
                        <img src={x} alt="" className="infrastructure-right_box-content_x"/>
                        <p className="body-text-bigger uppercase">
                            старе<br/>
                            обладнання
                        </p>
                    </div>
                </div>
                <div className="infrastructure-right_box" style={{backgroundImage: `url(${atmosphere})`}}>
                    <div className="infrastructure-right_box-content">
                        <img src={x} alt="" className="infrastructure-right_box-content_x"/>
                        <p className="body-text-bigger uppercase">
                            немає<br/>
                            атмосфери
                        </p>
                    </div>
                </div>
                <div className="infrastructure-right_box" style={{backgroundImage: `url(${tournament})`}}>
                    <div className="infrastructure-right_box-content">
                        <img src={x} alt="" className="infrastructure-right_box-content_x"/>
                        <p className="body-text-bigger uppercase">
                            відсутні<br/>
                            турніри
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Infrastructure;
