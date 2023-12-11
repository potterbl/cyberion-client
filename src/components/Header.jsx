import React from 'react';

import '../styles/Header.css'

import logo from '../img/logo.svg'
import {useSelector} from "react-redux";
import {motion} from "framer-motion";

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

    return (
        <motion.div
            className="header"
            animate="visible"
            initial="initial"
            variants={headerAnimation}
            custom={isInView}
        >
            <div className="header-left">
                <img src={logo} alt="logo" className="header-logo"/>
            </div>
            <div className="header-right">
                <ul className="header-list">
                    <li className="header-list_item body-text uppercase">новини</li>
                    <li className="header-list_item body-text uppercase">faq</li>
                    <li className="header-list_item body-text uppercase">правила</li>
                    <li className="header-list_item body-text uppercase">франшиза</li>
                </ul>
                <button className="header-btn body-text uppercase black-font">
                    клуби
                </button>
            </div>
        </motion.div>
    );
};

export default Header;
