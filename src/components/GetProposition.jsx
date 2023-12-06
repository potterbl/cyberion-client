import React from 'react';

import '../styles/GetProposition.css'
import {useSelector} from "react-redux";
import Btn from "./Btn";

const GetProposition = () => {

    const {offsetLeft} = useSelector(state => state.container)

    return (
        <div className="get-proposition" style={{translate: `-${offsetLeft}px 0px`}}>
            <div className="get-proposition_left"></div>
            <div className="get-proposition_right">
                <h3 className="heading-smaller">Отримайте комерційну пропозицію</h3>
                <p className="body-text gray-text">Залишіть свої дані, і ми зв'яжемося з вами</p>
                <div className="get-proposition_right-form">
                    <input type="text" className="get-proposition_right-form_input body-text" placeholder="Ваше повне ім'я"/>
                    <input type="text" className="get-proposition_right-form_input body-text" placeholder="Ваш E-mail"/>
                    <input type="text" className="get-proposition_right-form_input body-text" placeholder="Ваш телефон"/>
                    <Btn type="primary">
                        Відкрити свій власний клуб
                    </Btn>
                </div>
            </div>
        </div>
    );
};

export default GetProposition;
