import React from 'react';

import '../styles/ArrowToTop.css'
import {useDispatch, useSelector} from "react-redux";
import {motion} from "framer-motion";
import {actions} from "../store/slices/arrow.slice";

const ArrowToTop = () => {
    const dispatch = useDispatch()

    const {isInView} = useSelector(state => state.header)

    const buttonAnimation = {
        visible: (custom) => ({
            x: !custom ? 0 : '-100%',
            opacity: !custom ? 1 : 0
        })
    }

    const handleClick = () => {
        dispatch(actions.setScroll(false))
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        setTimeout(() => {
            dispatch(actions.setScroll(true))
        }, 1000)
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