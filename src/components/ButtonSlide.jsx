import React from 'react';

import '../styles/ButtonSlide.css'

import {motion} from "framer-motion";

const ButtonSlide = ({type, id}) => {



    return (
        <motion.button id={id} className={`${type === 'next' ? 'next-slide' : 'prev-slide'}`}>

        </motion.button>
    );
};

export default ButtonSlide;
