import React from 'react';

import '../styles/ArrowToTop.css'
import {useSelector} from "react-redux";
import {motion} from "framer-motion";

const ArrowToTop = () => {
    const {isInView} = useSelector(state => state.header)

    const buttonAnimation = {
        visible: (custom) => ({
            x: !custom ? 0 : '-100%',
            opacity: !custom ? 1 : 0
        })
    }

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <motion.button
            className="arrow-top"
            animate="visible"
            variants={buttonAnimation}
            custom={isInView}
            onClick={handleClick}
        >

        </motion.button>
    );
};

export default ArrowToTop;
