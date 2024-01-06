import React, { useState } from 'react';
import '../styles/Callback.css';
import { motion } from 'framer-motion';

import phone from '../img/popup_phone.svg'
import {useSelector} from "react-redux";

const Callback = () => {
    const {isInView} = useSelector(state => state.header)

    const [isOpen, setIsOpen] = useState(false);

    const buttonAnimation = {
        visible: (custom) => ({
            x: !custom ? 0 : '100%',
            opacity: !custom ? 1 : 0
        })
    }

    const pulseAnimation = {
        initial: {
            opacity: 1,
            scale: 1,
        },
        pulse: (custom) => ({
            opacity: !custom ? 0 : 1,
            scale: !custom ? 1.5 : 1,
            transition: {
                repeat: !custom ? Infinity : 0,
                repeatType: 'reverse',
                duration: 1,
            },
        }),
    };

    const optionAnimation = {
        option: (custom) => ({
            y: custom.isOpen ? 0 : `${custom.position * 64}px`,
            opacity: custom.isOpen ? 1 : 0,
            transition: {
                duration: 0.4
            }
        }),
    };

    return (
        <motion.div
            className="callback-wrapper"
            variants={buttonAnimation}
            animate="visible"
            custom={isInView}
        >
            <motion.div
                className="callback-pulse"
                animate="pulse"
                initial="initial"
                custom={isOpen}
                variants={pulseAnimation}
            ></motion.div>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`callback ${isOpen ? 'callback_enabled' : ''}`}
            ></motion.button>
            <div className="callback-options">
                <a href="tel:+380975551800">
                <motion.button
                    className="callback-option"
                    variants={optionAnimation}
                    animate="option"
                    custom={{isOpen, position: 1}}
                    style={{backgroundImage: `url(${phone})`}}
                >
                </motion.button>
                </a>
            </div>
        </motion.div>
    );
};

export default Callback;
