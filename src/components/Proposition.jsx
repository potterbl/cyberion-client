import React from 'react';

import '../styles/Proposition.css'

import { motion } from "framer-motion";

const Proposition = () => {

    const circleAnimation = {
        hidden: {
            rotate: 360,
            opacity: 0,
            y: "100%"
        },
        visible: {
            rotate: 0,
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.5
            }
        }
    }

    return (
        <div className="proposition">
            <div className="proposition_left">
                <div className="proposition_left-head">
                    <h2 className="heading">
                        ПОПИТ<br/>
                        ПОРОДЖУЄ<br/>
                        <span className="span-yellow">
                        ПРОПОЗИЦІЮ<br/>
                            </span>
                    </h2>
                </div>
                <div className="proposition-left_body">
                    <p className="body-text gray-text">
                        Кіберспорт має сильну фанатську базу,<br/>
                        яка щороку збільшується. Зростання<br/>
                        посилилось під час пандемії<br/>
                        та продовжує зростати навіть під час<br/>
                        війни.<br/>
                        <br/>
                        Оскільки багато хто почав шукати нове<br/>
                        дозвілля, самез араз час розвитку<br/>
                        індустрії кіберспортивних клубів<br/>
                    </p>
                </div>
            </div>
            <motion.div
                className="proposition_right"
                initial="hidden"
                whileInView="visible"
                transition={{
                    staggerChildren: 0.5
                }}
            >
                <div className="proposition_right-col">
                    <motion.div variants={circleAnimation} className="proposition_right-col_circle circle-1">
                        <div className="proposition_right-col_circle-inner">
                            <p className={`${window.innerWidth > 890 ? 'body-text' : 'body-text'} black-font bold`}>436 млн.</p>
                            <p className={`${window.innerWidth > 890 ? 'body-text' : 'body-text'} bold`}>в 2020</p>
                        </div>
                    </motion.div>
                </div>
                <div className="proposition_right-col">
                    <motion.div variants={circleAnimation} className="proposition_right-col_circle circle-2">
                        <div className="proposition_right-col_circle-inner">
                            <p className={`${window.innerWidth > 890 ? 'body-text-bigger' : 'body-text'} black-font bold`}>474 млн.</p>
                            <p className={`${window.innerWidth > 890 ? 'body-text-bigger' : 'body-text'} bold`}>в 2021</p>
                        </div>
                    </motion.div>
                </div>
                <div className="proposition_right-col">
                    <motion.div variants={circleAnimation} className="proposition_right-col_circle circle-3">
                        <div className="proposition_right-col_circle-inner">
                            <p className={`${window.innerWidth > 890 ? 'body-text-bigger' : 'body-text'} black-font bold`}>577 млн.</p>
                            <p className={`${window.innerWidth > 890 ? 'body-text-bigger' : 'body-text'} bold`}>в 2024</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Proposition;
