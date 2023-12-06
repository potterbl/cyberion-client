import React from 'react';

import '../styles/MoreTime.css'
import Btn from "./Btn";

const MoreTime = () => {
    return (
        <div className="more-time">
            <div className="more-time_left"></div>
            <div className="more-time_right">
                <h2 className="heading">
                    НЕМАЄ ЧАСУ<br/>
                    ЧИ МОЖЛИВОСТІ<br/>
                    КЕРУВАТИ КЛУБОМ?<br/>
                </h2>
                <p className="body-text gray-text">
                    Саме для вас ми створили спеціальні умови відкриття.<br/>
                    Ми беремо на себе всю операційну діяльність по<br/>
                    будівництву і контролем за клубом.<br/>
                </p>
                <Btn type={"primary"}>
                    Отримати модель
                </Btn>
            </div>
        </div>
    );
};

export default MoreTime;
