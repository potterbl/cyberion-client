import React from 'react';

import '../styles/NewFormat.css'

import pc20 from '../img/cyber-72.jpg'
import pc30 from '../img/cyber-70.jpg'
import pc40 from '../img/cyber-116.jpg'

import {motion} from "framer-motion";

const NewFormat = React.forwardRef((props, ref) => {

    const modelAnimation = {
        initial: {
            y: 0,
            opacity: 1
        },
        visible: {
            y: "-100%",
            opacity: 0
        }
    }

    const bgAnimation = {
        initial: {
            y: "100%",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                bounce: 0
            }
        }
    }

    const textAnimation = {
        initial: {
            y: "100%",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                bounce: 0.3,
                type: 'spring',
                delay: 0.3
            }
        }
    }

    return (
        <div className="new-format-container" ref={ref}>
            <div className="new-format">
                <div className="new-format_head">
                    <h3 className="heading-smaller">
                        УКРАЇНІ ПОТРІБНІ
                    </h3>
                    <h2 className="heading">
                        КЛУБИ НОВОГО ФОРМАТУ
                    </h2>
                </div>
                <div className="new-format_body">
                    <div className="new-format_body-card">
                        <motion.div
                            className="new-format_body-card_content"
                            style={{backgroundImage: `url("${pc20}")`}}
                            initial="initial"
                            whileHover="visible"
                        >
                            <div className="new-format_body-card_content-bottom">
                                <motion.p
                                    className="body-text-bigger"
                                    variants={modelAnimation}
                                >
                                    Модель 20 ПК
                                </motion.p>
                            </div>
                            <motion.div
                                className="new-format_body-card_content-bottom_info-wrapper"
                                variants={bgAnimation}
                            >
                                <motion.p
                                    className="body-text"
                                    variants={textAnimation}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut luctus urna. Donec ullamcorper tempus dui, sit amet volutpat massa pharetra condimentum. Sed felis urna, iaculis eget vestibulum eget, ornare sit amet lorem. Praesent volutpat molestie congue. Vestibulum in placerat massa. Pellentesque tincidunt, lorem id dictum ultrices, urna purus tincidunt velit, vitae malesuada ex sapien at velit. Donec dolor ex, scelerisque congue elementum ut, tincidunt at massa.
                                </motion.p>
                                <motion.p
                                    variants={textAnimation}
                                    className="body-text"
                                >
                                    Тисни щоб дізнатись більше</motion.p>
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="new-format_body-card">
                        <motion.div
                            className="new-format_body-card_content"
                            style={{backgroundImage: `url("${pc30}")`}}
                            initial="initial"
                            whileHover="visible"
                        >
                            <div className="new-format_body-card_content-bottom">
                                <motion.p
                                    className="body-text-bigger"
                                    variants={modelAnimation}
                                >
                                    Модель 30 ПК
                                </motion.p>
                            </div>
                            <motion.div
                                className="new-format_body-card_content-bottom_info-wrapper"
                                variants={bgAnimation}
                            >
                                <motion.p
                                    className="body-text"
                                    variants={textAnimation}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut luctus urna. Donec ullamcorper tempus dui, sit amet volutpat massa pharetra condimentum. Sed felis urna, iaculis eget vestibulum eget, ornare sit amet lorem. Praesent volutpat molestie congue. Vestibulum in placerat massa. Pellentesque tincidunt, lorem id dictum ultrices, urna purus tincidunt velit, vitae malesuada ex sapien at velit. Donec dolor ex, scelerisque congue elementum ut, tincidunt at massa.
                                </motion.p>
                                <motion.p
                                    variants={textAnimation}
                                    className="body-text"
                                >
                                    Тисни щоб дізнатись більше</motion.p>
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="new-format_body-card">
                        <motion.div
                            className="new-format_body-card_content"
                            style={{backgroundImage: `url("${pc40}")`}}
                            initial="initial"
                            whileHover="visible"
                        >
                            <div className="new-format_body-card_content-bottom">
                                <motion.p
                                    className="body-text-bigger"
                                    variants={modelAnimation}
                                >
                                    Модель 40 ПК
                                </motion.p>
                            </div>
                            <motion.div
                                className="new-format_body-card_content-bottom_info-wrapper"
                                variants={bgAnimation}
                            >
                                <motion.p
                                    className="body-text"
                                    variants={textAnimation}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut luctus urna. Donec ullamcorper tempus dui, sit amet volutpat massa pharetra condimentum. Sed felis urna, iaculis eget vestibulum eget, ornare sit amet lorem. Praesent volutpat molestie congue. Vestibulum in placerat massa. Pellentesque tincidunt, lorem id dictum ultrices, urna purus tincidunt velit, vitae malesuada ex sapien at velit. Donec dolor ex, scelerisque congue elementum ut, tincidunt at massa.
                                </motion.p>
                                <motion.p
                                    variants={textAnimation}
                                    className="body-text"
                                >
                                    Тисни щоб дізнатись більше</motion.p>
                            </motion.div>
                        </motion.div>
                    </div>
                    {/*<div className="new-format_body-container">*/}
                    {/*    <h4 className="body-text-bigger bold span-yellow">*/}
                    {/*        20 PC + 2 консолі*/}
                    {/*    </h4>*/}
                    {/*    <img src={pc20} alt="20pc" className="new-format_body-img"/>*/}
                    {/*    <Btn type={'primary'}>*/}
                    {/*        Отримати фін. модель ➝*/}
                    {/*    </Btn>*/}
                    {/*</div>*/}
                    {/*<div className="new-format_body-container">*/}
                    {/*    <h4 className="body-text-bigger bold span-yellow">*/}
                    {/*        30 PC + 3 консолі*/}
                    {/*    </h4>*/}
                    {/*    <img src={pc30} alt="30pc" className="new-format_body-img"/>*/}
                    {/*    <Btn type={'primary'}>*/}
                    {/*        Отримати фін. модель ➝*/}
                    {/*    </Btn>*/}
                    {/*</div>*/}
                    {/*<div className="new-format_body-container">*/}
                    {/*    <h4 className="body-text-bigger bold span-yellow">*/}
                    {/*        40 PC + 4 консолі*/}
                    {/*    </h4>*/}
                    {/*    <img src={pc40} alt="40pc" className="new-format_body-img"/>*/}
                    {/*    <Btn type={'primary'}>*/}
                    {/*        Отримати фін. модель ➝*/}
                    {/*    </Btn>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
});

export default NewFormat;
