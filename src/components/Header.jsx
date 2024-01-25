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
                                <a href="https://www.instagram.com/cyberion_ua/" title="instagram">
                                    <img src={instagram} alt="" className="header-icon" loading="lazy" title="header icon"/>
                                </a>
                            </li>
                            <li className="body-text uppercase">
                                <a href="https://www.youtube.com/@cyberion_ukraine" title="youtube">
                                    <img src={youtube} alt="" className="header-icon" loading="lazy" title="header icon"/>
                                </a>
                            </li>
                            <li className="body-text uppercase">
                                <a href="https://t.me/cyberion_ukraine" title="telegram">
                                    <img src={telegram} alt="" className="header-icon" loading="lazy" title="header icon"/>
                                </a>
                            </li>
                        </ul>
                    }
                </div>
                <div className="header-center">
                    <a href="https://cyberion.com.ua" title="logo">
                        <img src={logo} alt="logo" className="header-logo" loading="lazy" title="header logo"/>
                    </a>
                </div>
                <div className="header-right">
                    {
                        window.innerWidth > 1000 &&
                        <ul
                            className="header-list"
                        >
                            <li className="body-text uppercase">
                                <a href="https://cyberion.com.ua/kololeague" title="турніри">
                                    турніри
                                </a>
                            </li>
                            <li className="body-text uppercase">
                                <a href="https://cyberion.com.ua/news" title="новини">
                                    новини
                                </a>
                            </li>
                            <li className="body-text uppercase">
                                <a href="https://cyberion.com.ua/contacts" title="клуби">
                                    клуби
                                </a>
                            </li>
                            <a className="header-btn body-text uppercase black-font" href="https://franchise.cyberion.com.ua/" title="франшиза">
                                франшиза
                            </a>
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
                    <a className="header-menu_item" href="https://cyberion.com.ua/contacts" title="турніри">
                        <img src={clubs} alt="" className="header-menu_icon" loading="lazy" title="header clubs"/>
                        <p className="body-text uppercase">клуби</p>
                    </a>
                    <a className="header-menu_item" href="https://cyberion.com.ua/kololeague" title="турніри">
                        <img src={tournament} alt="" className="header-menu_icon" loading="lazy" title="header tournament"/>
                        <p className="body-text uppercase">турніри</p>
                    </a>
                    <a className="header-menu_item" href="https://cyberion.com.ua/news" title="новини">
                        <img src={news} alt="" className="header-menu_icon" loading="lazy" title="header news"/>
                        <p className="body-text uppercase">новини</p>
                    </a>
                    <div className="header-menu_item">
                        <img src={franchise} alt="" className="header-menu_icon" loading="lazy" title="header franchise"/>
                        <p className="body-text uppercase">франшиза</p>
                    </div>
                </motion.div>
            }
        </>

    );
};

export default Header;
