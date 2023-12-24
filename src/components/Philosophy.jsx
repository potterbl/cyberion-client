import React from 'react';

import '../styles/Philosophy.css'

import 'swiper/css'
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import { motion } from "framer-motion";
import ButtonSlide from "./ButtonSlide";

import img1 from '../img/cyber-32.jpg'
import img2 from '../img/cyber-72.jpg'
import img3 from '../img/cyber-60.jpg'

const Philosophy = () => {
    const listVariants = {
        hidden: {
            opacity: 0,
            x: -100
        },
        visible: {
            x: 0,
            opacity: 1,
        },
    };


    return (
        <div className={"philosophy"}>
            <div className="philosophy-left">
                <div className="philosophy-left_head">
                    <h2 className="heading uppercase">
                        наша філософія:
                        {
                            window.innerWidth >= 1024 || window.innerWidth <= 786 ?
                            <br/>
                                : ' '
                        }
                        <span className={"span-yellow"}>
                            Максимальний
                            {
                                window.innerWidth >= 1024 || window.innerWidth <= 786 ?
                                    <br/>
                                    : ' '
                            }
                            комфорт гравця
                            {
                                (window.innerWidth >= 1024 || window.innerWidth <= 786) &&
                                <br/>
                            }
                        </span>
                    </h2>
                </div>
                <div className="philosophy-left_body">
                    <p className={"body-text gray-text"}>
                        Ми використали весь наш досвід та існуючі тенденції, для
                        того, щоб створити ідеальне місце для тренувань з
                        кіберспорту та просто відпочинку:
                    </p>
                    <div className="philosophy-left_body-list-wrapper">
                        <motion.ul
                            className={"philosophy-left_body-list gray-text"}
                            initial="hidden"
                            whileInView="visible"
                            transition={{
                                staggerChildren: 0.3
                            }}
                        >
                            <motion.li customDelay={1} variants={listVariants} className={"body-text gray-text"}>Широкі ігрові
                                мережі
                            </motion.li>
                            <motion.li customDelay={2} variants={listVariants} className={"body-text gray-text"}>Потужні Ігрові
                                ПК
                            </motion.li>
                            <motion.li customDelay={3} variants={listVariants} className={"body-text gray-text"}>Комфортні
                                крісла
                            </motion.li>
                            <motion.li customDelay={4} variants={listVariants} className={"body-text gray-text"}>Найкраще
                                обладнання від топових постачальників
                            </motion.li>
                            <motion.li customDelay={5} variants={listVariants} className={"body-text gray-text"}>Буткемпи для
                                тренувань
                            </motion.li>
                            <motion.li customDelay={6} variants={listVariants} className={"body-text gray-text"}>Комфортні TV зони
                                з PS5
                            </motion.li>
                        </motion.ul>
                    </div>
                </div>
            </div>
            <div className="philosophy-right">
                <div className="swiper-custom-pagination">

                </div>
                <Swiper
                    slidesPerView={1}
                    modules={[A11y, Scrollbar, Navigation, Pagination]}
                    draggable={false}
                    loop={true}
                    pagination={{
                        el: '.swiper-custom-pagination',
                        bulletClass: 'swiper-custom-bullet',
                        bulletActiveClass: 'swiper-custom-bullet-active',
                        clickable: true,
                        type: "bullets"
                    }}
                    navigation={{
                        nextEl: '#nextSlidePhilosophy',
                        prevEl: '#prevSlidePhilosophy'
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = "#prevSlidePhilosophy"
                        swiper.params.navigation.nextEl = "#nextSlidePhilosophy"
                    }}
                >

                    <SwiperSlide>
                        <div
                            className="slide-custom"
                            style={{
                                backgroundImage: `url("${img1}")`
                            }}
                        >
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="slide-custom"
                            style={{
                                backgroundImage: `url("${img2}")`
                            }}
                        >
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="slide-custom"
                            style={{
                                backgroundImage: `url("${img3}")`
                            }}
                        >
                        </div>
                    </SwiperSlide>
                    <ButtonSlide type={'prev'} id={'prevSlidePhilosophy'}/>
                    <ButtonSlide type={'next'} id={'nextSlidePhilosophy'}/>

                </Swiper>
            </div>
        </div>
    );
};

export default Philosophy;
