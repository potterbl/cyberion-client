import React, {useState} from 'react';

import '../styles/Header.css'

import logo from '../img/logo.svg'
import {useSelector} from "react-redux";
import {motion} from "framer-motion";

const Header = () => {

    const [isVisible, setIsVisible] = useState(false)

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

    const burgerAnimation = {
        visible: (custom) => ({
            height: custom ? 'calc(100vh - 84px)' : 0,
            opacity: custom || window.innerWidth > 768 ? 1 : 0,
            transition: {
                type: 'spring'
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
                {
                    window.innerWidth <= 768 &&
                    <div
                        className="burger-menu"
                        onClick={() => setIsVisible(!isVisible)}
                    >
                        <span className={`${isVisible ? 'span-active' : ''}`}></span>
                    </div>
                }
                <motion.ul
                    className="header-list"
                    variants={burgerAnimation}
                    custom={isVisible}
                    animate="visible"
                >
                    <li className="header-list_item body-text uppercase">новини</li>
                    <li className="header-list_item body-text uppercase">faq</li>
                    <li className="header-list_item body-text uppercase">правила</li>
                    <li className="header-list_item body-text uppercase">франшиза</li>
                    <button className="header-btn body-text uppercase black-font">
                        клуби
                    </button>
                </motion.ul>
            </div>
        </motion.div>
    );
};

export default Header;
