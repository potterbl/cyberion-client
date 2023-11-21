import React from 'react';

import '../styles/Btn.css'

import {motion} from "framer-motion";

const Btn = (props) => {

    const { type, children, isDisabled } = props

    const primaryAnimations = {
        initial: {
            backgroundImage: 'radial-gradient(transparent)',
            backgroundPosition: '50% 50%',
            backgroundSize: '0% 100%',
            transition: {
                duration: 0.25
            }
        },
        hover: {
            backgroundImage: 'radial-gradient(#FFFAB5 0% 100%)',
            backgroundSize: '100% 100%',
            transition: {
                duration: 0.25
            }
        },
        click: {
            backgroundImage: 'radial-gradient(transparent)',
            backgroundPosition: '50% 50%',
            backgroundSize: '0% 100%',
            color: '#FFED00',
            transition: {
                duration: 0.025
            }
        }
    }

    const secondAnimations = {
        initial: {
            backgroundPosition: '50% 50%',
            backgroundSize: '0% 100%',
            backgroundImage: 'radial-gradient(transparent)',
        },
        hover: {
        },
        click: {
            backgroundSize: '100% 100%',
            backgroundImage: 'radial-gradient(#FFED00 0% 100%)',
            color: 'black',
            transition: {
                duration: 0.025
            }
        }
    }

    function handleTap(e) {
        if (e.target && type === 'primary') {
            if(e.target.classList.contains('primary-active')){
                setTimeout(() => {
                    e.target.classList.remove('primary-active');
                }, 250)
            } else {
                e.target.classList.add('primary-active');
            }
        }
    }


    return (
        <motion.button
            initial="initial"
            whileHover="hover"
            whileTap="click"
            onTapStart={e => handleTap(e)}
            onTap={e=> handleTap(e)}
            variants={
                type === 'primary' ? primaryAnimations
                    : type === 'second' ? secondAnimations
                        : null
            }
            disabled={isDisabled}
            className={
                `btn ${type === 'primary' ? 'btn-primary' : type === 'second' ? 'btn-second' : ''}`
            }
        >
            {children}
        </motion.button>
    );
};

export default Btn;
