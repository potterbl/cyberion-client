import React from 'react';

import '../styles/NewFormat.css'

import pc20 from '../img/cyber-72.jpg'
import pc30 from '../img/cyber-70.jpg'
import pc40 from '../img/cyber-116.jpg'

import model30 from '../img/pc20.svg'
import model40 from '../img/pc30.svg'
import model60 from '../img/pc40.svg'

import {motion} from "framer-motion";
import Btn from "./Btn";

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
                            <motion.div
                                className="new-format_body-card_content-bottom"
                                variants={modelAnimation}
                                style={{
                                    backgroundImage: `url("${model30}")`
                                }}
                            >
                            </motion.div>
                            {
                                window.innerWidth > 768 &&
                                <motion.div
                                    className="new-format_body-card_content-bottom_info-wrapper"
                                    variants={bgAnimation}
                                >
                                    <Btn type={"primary"}>
                                        Отримати модель
                                    </Btn>
                                </motion.div>
                            }
                        </motion.div>
                        {
                            window.innerWidth <= 768 &&
                            <div className="new-format_body-card_under-section">
                                <Btn type={"primary"}>
                                    Отримати модель
                                </Btn>
                            </div>
                        }
                    </div>
                    <div className="new-format_body-card">
                        <motion.div
                            className="new-format_body-card_content"
                            style={{backgroundImage: `url("${pc30}")`}}
                            initial="initial"
                            whileHover="visible"
                        >
                            <motion.div
                                className="new-format_body-card_content-bottom"
                                variants={modelAnimation}
                                style={{
                                    backgroundImage: `url("${model40}")`
                                }}
                            >
                            </motion.div>
                            {
                                window.innerWidth > 768 &&
                                <motion.div
                                    className="new-format_body-card_content-bottom_info-wrapper"
                                    variants={bgAnimation}
                                >
                                    <Btn type={"primary"}>
                                        Отримати модель
                                    </Btn>
                                </motion.div>
                            }
                        </motion.div>
                        {
                            window.innerWidth <= 768 &&
                            <div className="new-format_body-card_under-section">
                                <Btn type={"primary"}>
                                    Отримати модель
                                </Btn>
                            </div>
                        }
                    </div>
                    <div className="new-format_body-card">
                        <motion.div
                            className="new-format_body-card_content"
                            style={{backgroundImage: `url("${pc40}")`}}
                            initial="initial"
                            whileHover="visible"
                        >
                            <motion.div
                                className="new-format_body-card_content-bottom"
                                variants={modelAnimation}
                                style={{
                                    backgroundImage: `url("${model60}")`
                                }}
                            >
                            </motion.div>
                            {
                                window.innerWidth > 768 &&
                                <motion.div
                                    className="new-format_body-card_content-bottom_info-wrapper"
                                    variants={bgAnimation}
                                >
                                    <Btn type={"primary"}>
                                        Отримати модель
                                    </Btn>
                                </motion.div>
                            }
                        </motion.div>
                        {
                            window.innerWidth <= 768 &&
                            <div className="new-format_body-card_under-section">
                                <Btn type={"primary"}>
                                    Отримати модель
                                </Btn>
                            </div>
                        }
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
