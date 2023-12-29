import React from 'react';

import '../styles/Footer.css'
import {useSelector} from "react-redux";

import on from '../img/on.svg'

const Footer = () => {
    const {offsetLeft} = useSelector(state => state.container)

    return (
        <div className="footer">
            <div className="footer-wrapper" style={{left: -offsetLeft + 'px'}}>

            </div>
            <div className="footer-body">
                <div className="footer-col">
                    <p className="body-text footer-header">
                        Наші соц. мережі
                    </p>
                    <p className="body-text">
                        Instagram
                    </p>
                    <p className="body-text">
                        YouTube
                    </p>
                    <p className="body-text">
                        Telegram
                    </p>
                </div>
                <div className="footer-col">
                    <p className="body-text footer-header">
                        Співпраця
                    </p>
                    <p className="body-text">
                        Франшиза
                    </p>
                    <p className="body-text">
                        Партнерство
                    </p>
                </div>
                <div className="footer-col">
                    <p className="body-text footer-header">
                        Карта сайту
                    </p>
                    <p className="body-text">
                        Новини
                    </p>
                    <p className="body-text">
                        FAQ
                    </p>
                    <p className="body-text">
                        Правила
                    </p>
                    <p className="body-text">
                        Клуби
                    </p>
                    <p className="body-text">
                        Франшиза
                    </p>
                </div>
                <div className="footer-col_cols">
                    <input type="text" className="footer-input" placeholder="Мій EMAIL"/>
                    <button className="footer-button"></button>
                </div>
            </div>
            <div className="footer-footer">
                <img src={on} alt="" className="footer-logo"/>
            </div>
        </div>
    );
};

export default Footer;
