import React from 'react';

import '../styles/Header.css'

import logo from '../img/logo.svg'
import {useSelector} from "react-redux";
import {motion} from "framer-motion";

import franchise from '../img/franchise.svg'
import clubs from '../img/clubs.svg'
import tournament from '../img/tournament.svg'
import news from '../img/news.svg'

import instagram from '../img/instagram.svg'
import youtube from '../img/youtube.svg'
import telegram from '../img/telegram.svg'

const Header = () => {

    const {isInView} = useSelector(state => state.header)

    const headerAnimation = {
        initial: {
            opacity: 0,
            y: '-100%'
        },
        visible: (custom) => ({
            opacity: !custom ? 1 : 0,
            y: !custom ? 0 : '-100%',
            transition: {
                type: 'spring',
                bounce: 0,
            }
        })
    }

    const headerMenuAnimation = {
        initial: {
            opacity: 0,
            y: '100%'
        },
        visible: (custom) => ({
            opacity: !custom ? 1 : 0,
            y: !custom ? 0 : '100%',
            transition: {
                type: 'spring',
                bounce: 0,
            }
        })
    }

    return (
        <>
            <motion.header
                className="header"
                animate="visible"
                initial="initial"
                variants={headerAnimation}
                custom={isInView}
            >
                <div className="header-left">
                    {
                        window.innerWidth > 1000 &&
                        <ul
                            className="header-list"
                        >
                            <li className="body-text uppercase">
                                <a href="https://www.instagram.com/cyberion_ua/">
                                    <img src={instagram} alt="" className="header-icon"/>
                                </a>
                            </li>
                            <li className="body-text uppercase">
                                <a href="https://www.youtube.com/@cyberion_ukraine">
                                    <img src={youtube} alt="" className="header-icon"/>
                                </a>
                            </li>
                            <li className="body-text uppercase">
                                <a href="https://t.me/cyberion_ukraine">
                                    <img src={telegram} alt="" className="header-icon"/>
                                </a>
                            </li>
                        </ul>
                    }
                </div>
                <div className="header-center">
                    <a href="https://cyberion.com.ua">
                        <img src={logo} alt="logo" className="header-logo"/>
                    </a>
                </div>
                <div className="header-right">
                    {
                        window.innerWidth > 1000 &&
                        <ul
                            className="header-list"
                        >
                            <li className="body-text uppercase">
                                <a href="https://cyberion.com.ua/news">
                                    новини
                                </a>
                            </li>
                            <li className="body-text uppercase">faq</li>
                            <li className="body-text uppercase">правила</li>
                            <li className="body-text uppercase">
                                <a href="https://cyberion.com.ua/contacts">
                                    клуби
                                </a>
                            </li>
                            <button className="header-btn body-text uppercase black-font">
                                франшиза
                            </button>
                        </ul>
                    }
                </div>
            </motion.header>
            {
                window.innerWidth <= 1000 &&
                <motion.div
                    className="header-menu"
                    animate="visible"
                    initial="initial"
                    variants={headerMenuAnimation}
                    custom={isInView}
                >
                    <div className="header-menu_item">
                        <img src={clubs} alt="" className="header-menu_icon"/>
                        <p className="body-text uppercase">клуби</p>
                    </div>
                    <div className="header-menu_item">
                        <img src={tournament} alt="" className="header-menu_icon"/>
                        <p className="body-text uppercase">турніри</p>
                    </div>
                    <div className="header-menu_item">
                        <img src={news} alt="" className="header-menu_icon"/>
                        <p className="body-text uppercase">новини</p>
                    </div>
                    <div className="header-menu_item">
                        <img src={franchise} alt="" className="header-menu_icon"/>
                        <p className="body-text uppercase">франшиза</p>
                    </div>
                </motion.div>
            }
        </>

    );
};

export default Header;
