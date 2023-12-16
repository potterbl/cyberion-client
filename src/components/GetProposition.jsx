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
                        <ul className="get-proposition_left-body-ul">
                            <li className=" uppercase span-yellow body-text bold">харків</li>
                            <li className=" uppercase span-yellow body-text bold">львів</li>
                            <li className=" uppercase span-yellow body-text bold">дніпро</li>
                            <li className=" uppercase span-yellow body-text bold">полтава</li>
                            <li className=" uppercase span-yellow body-text bold">одеса</li>
                            <li className=" uppercase span-yellow body-text bold">миколаїв</li>
                            <li className=" uppercase span-yellow body-text bold">запоріжжя</li>
                            <li className=" uppercase span-yellow body-text bold">вінниця</li>
                            <li className=" uppercase span-yellow body-text bold">чернігів</li>
                            <li className=" uppercase span-yellow body-text bold">кропивницький</li>
                        </ul>
                    </div>

                </div>
            }

            <div className="get-proposition_right">
                <h3 className="heading-smaller">Отримайте комерційну пропозицію</h3>
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
