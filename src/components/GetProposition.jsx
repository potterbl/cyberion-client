import React from 'react';

import '../styles/GetProposition.css'
import {useSelector} from "react-redux";
import Btn from "./Btn";

const GetProposition = () => {

    let {offsetLeft} = useSelector(state => state.container)

    return (
        <div className="get-proposition" style={{translate: `${window.innerWidth > 768 ? -offsetLeft + 'px 0px' : '0'}`}}>
            {
                window.innerWidth > 768 &&
                <div className="get-proposition_left">

                    <div className="get-proposition_left-head">
                        <h2 className="heading-smaller uppercase">
                            топ вільних<br/>
                            міст україни
                        </h2>
                    </div>
                    <div className="get-proposition_left-body">
                        <iframe title="map" src="https://www.google.com/maps/d/u/0/embed?mid=1Q1xwX1oc-gA2XXzaGJOMXqEzkhQPDho&ehbc=2E312F&noprof=1" width="100%" loading="lazy"></iframe>
                    </div>

                </div>
            }

            <div className="get-proposition_right">
                <h2 className="heading-smaller">Отримайте комерційну пропозицію</h2>
                <p className="body-text gray-text">Залишіть свої дані, і ми зв'яжемося з вами</p>
                <div className="get-proposition_right-form">
                    <input type="text" className="get-proposition_right-form_input body-text"
                           placeholder="Ваше повне ім'я"/>
                    <input type="text" className="get-proposition_right-form_input body-text" placeholder="Ваш E-mail"/>
                    <input type="text" className="get-proposition_right-form_input body-text"
                           placeholder="Ваш телефон"/>
                    <Btn type="primary">
                        Відкрити свій власний клуб
                    </Btn>
                </div>
            </div>
        </div>
    );
};

export default GetProposition;
