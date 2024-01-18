import React, {useState} from 'react';

import '../styles/NewFormat.css'

import pc20 from '../img/cyber-72.jpg'
import pc30 from '../img/cyber-70.jpg'
import pc40 from '../img/cyber-116.jpg'

import model30 from '../img/pc20.svg'
import model40 from '../img/pc30.svg'
import model60 from '../img/pc40.svg'

import {motion} from "framer-motion";
import Btn from "./Btn";
import Modal from "./Modal";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation} from "swiper/modules";

const NewFormat = (props) => {

    const [isModal20, setIsModal20] = useState(false)
    const [isModal30, setIsModal30] = useState(false)
    const [isModal40, setIsModal40] = useState(false)

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
        <>
            <Modal title="Фінансова модель 20 ПК" isActive={isModal20} setIsActive={setIsModal20}/>
            <Modal title="Фінансова модель 30 ПК" isActive={isModal30} setIsActive={setIsModal30}/>
            <Modal title="Фінансова модель 40 ПК" isActive={isModal40} setIsActive={setIsModal40}/>

            <div className="new-format-container">
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
                        {
                            window.innerWidth > 865 ?
                            <>
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
                                                <div
                                                    onClick={() => setIsModal20(!isModal20)}
                                                >
                                                    <Btn type={"primary"}>
                                                        Отримати модель
                                                    </Btn>
                                                </div>
                                            </motion.div>
                                        }
                                    </motion.div>
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
                                                <div
                                                    onClick={() => setIsModal30(!isModal30)}
                                                >
                                                    <Btn type={"primary"}>
                                                        Отримати модель
                                                    </Btn>
                                                </div>
                                            </motion.div>
                                        }
                                    </motion.div>
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
                                                <div
                                                    onClick={() => setIsModal40(!isModal40)}
                                                >
                                                    <Btn type={"primary"}>
                                                        Отримати модель
                                                    </Btn>
                                                </div>
                                            </motion.div>
                                        }
                                    </motion.div>
                                </div>
                            </>
                                :
                                <>
                                    <Swiper
                                        modules={[A11y, Navigation]}
                                        navigation={{
                                            nextEl: '#nextSlideFormat',
                                            prevEl: '#prevSlideFormat'
                                        }}
                                        onBeforeInit={(swiper) => {
                                            swiper.params.navigation.prevEl = "#prevSlideFormat"
                                            swiper.params.navigation.nextEl = "#nextSlideFormat"
                                        }}
                                        slidesPerView={2.5}
                                        spaceBetween="20"
                                    >
                                        <SwiperSlide>
                                            <div className="new-format_slide">
                                                <div
                                                    className="new-format_slide-content"
                                                    style={{backgroundImage: `url("${pc20}")`}}
                                                >
                                                    <div
                                                        className="new-format_slide-content_inner"
                                                        style={{
                                                            backgroundImage: `url("${model60}")`
                                                        }}
                                                    >

                                                    </div>
                                                </div>

                                                <div className="new-format_slide-bottom">
                                                    <div
                                                        onClick={() => setIsModal20(!isModal20)}
                                                    >
                                                        <Btn type={"primary"}>
                                                            Отримати модель
                                                        </Btn>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="new-format_slide">
                                                <div
                                                    className="new-format_slide-content"
                                                    style={{backgroundImage: `url("${pc30}")`}}
                                                >

                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="new-format_slide">
                                                <div
                                                    className="new-format_slide-content"
                                                    style={{backgroundImage: `url("${pc40}")`}}
                                                >

                                                </div>
                                            </div>
                                        </SwiperSlide>

                                    </Swiper>
                                </>
                        }
                    </div>
                </div>
            </div>
        </>

    );
}

export default NewFormat;
