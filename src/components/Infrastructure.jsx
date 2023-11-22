import React from 'react';

import '../styles/Infrastructure.css'

import atmosphere from '../img/atmosphere.png'
import tournament from '../img/tournament.png'
import service from '../img/service.png'
import devices from '../img/devices.png'
import x from '../img/x.svg'

import {motion} from "framer-motion";

const Infrastructure = () => {
    const textAnimation = {
        initial: {
            x: '-150%'
        },
        visible: {
            x: 0,
        }
    }

    const gradientAnimation ={
        initial: {
            y: '100%'
        },
        visible: {
            transition: {
                type: "spring",
                duration: 0.5,
                bounce: 0.2
            },
            y: 0
        }
    }

    return (
        <div className="infrastructure">
            <div className="infrastructure-left">
                <h2 className="heading uppercase">
                    <span className="span-yellow">гравці є</span> -
                    інфраструктури немає
                </h2>
                <p className="body-text">
                    На кожне велике місто в середньому припадає<br/>
                    лише 1 комп'ютерний клуб старого формату.
                </p>
                <p className="body-text-bigger">
                    <span className="span-yellow">90%</span> гравців немають клубів
                    поряд з домом
                </p>
            </div>
            <motion.div
                initial="initial"
                whileInView="visible"
                transition={{
                    staggerChildren: 0.3
                }}
                className="infrastructure-right"
            >
                <motion.div
                    transition={{
                        staggerChildren: 0.4
                    }}
                    className="infrastructure-right_box"
                >
                    <motion.div
                        variants={gradientAnimation}
                        className="infrastructure-right_box-gradient"
                    >
                    </motion.div>
                    <img src={service} alt="service" className="infrastructure-right_box-image"/>
                    <motion.div
                        className="infrastructure-right_box-content"
                        variants={textAnimation}
                    >
                        <img src={x} alt="" className="infrastructure-right_box-content_x"/>
                        <p className="body-text-bigger uppercase">
                            поганий<br/>
                            сервіс
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="infrastructure-right_box"
                    transition={{
                        staggerChildren: 0.4
                        }}
                >
                    <motion.div
                        variants={gradientAnimation}
                        className="infrastructure-right_box-gradient"
                    >
                    </motion.div>
                    <img src={devices} alt="devices" className="infrastructure-right_box-image"/>
                    <motion.div
                        className="infrastructure-right_box-content"
                        variants={textAnimation}
                    >
                        <img src={x} alt="" className="infrastructure-right_box-content_x"/>
                        <p className="body-text-bigger uppercase">
                            старе<br/>
                            обладнання
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="infrastructure-right_box"
                    transition={{
                        staggerChildren: 0.4
                        }}
                >
                    <motion.div
                        variants={gradientAnimation}
                        className="infrastructure-right_box-gradient"
                    >
                    </motion.div>
                    <img src={atmosphere} alt="atmosphere" className="infrastructure-right_box-image"/>
                    <motion.div
                        className="infrastructure-right_box-content"
                        variants={textAnimation}
                    >
                        <img src={x} alt="" className="infrastructure-right_box-content_x"/>
                        <p className="body-text-bigger uppercase">
                            немає<br/>
                            атмосфери
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="infrastructure-right_box"
                    transition={{
                        staggerChildren: 0.4
                    }}
                >
                    <motion.div
                        variants={gradientAnimation}
                        className="infrastructure-right_box-gradient"
                    >
                    </motion.div>
                    <img src={tournament} alt="tournament" className="infrastructure-right_box-image"/>
                    <motion.div
                        className="infrastructure-right_box-content"
                        variants={textAnimation}
                    >
                        <img src={x} alt="" className="infrastructure-right_box-content_x"/>
                        <p className="body-text-bigger uppercase">
                            відсутні<br/>
                            турніри
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Infrastructure;
