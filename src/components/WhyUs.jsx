import React from 'react';

import '../styles/WhyUs.css'

import whyImage from '../img/whyUs.png'
import {motion} from "framer-motion";

const WhyUs = () => {
    const animationVariants = {
        hiddenParent: {
            background: 'black',
        },
        visibleParent: {
            transition: {
                duration: 5,
            },
            background: '#FFED00',
        },
        linkHidden: {
            x: -100,
            opacity: 0,
        },
        linkVisible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                type: "spring",
                bounce: 0.4
            }
        }
    }

    return (
        <div className="why-us">
            <div className="why-us_left">
                <div className="why-us_left-head">
                    <h2 className="heading uppercase black-font">Чому ми обрали саме цю нішу</h2>
                    <p className="body-text-bigger black-font">
                        Давайте разом проаналізуємо, як
                        ми прийшли до рішення
                        відкриття кіберспортивних клубів,
                        що наштовхнуло на це і які
                        можливості існують у цьому бізнесі
                    </p>
                    <p className="body-text black-font">Якщо ти вже знаєш чому цей бізнес актуальний, тисни на кнопку нижче...</p>
                </div>
                <motion.div variants={animationVariants} initial="linkHidden" whileInView="linkVisible" className="why-us_left-footer">
                    <a href="https://t.me/Artem_Natanzon" className="body-text-bigger bold uppercase black-font">задати питання у telegram →</a>
                </motion.div>
            </div>
            <div className="why-us_right">
                <img src={whyImage} alt="" className="why-us_right-img"/>
            </div>
        </div>
    );
};

export default WhyUs;
