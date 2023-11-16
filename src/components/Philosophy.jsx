import React, {useRef} from 'react';

import '../styles/Philosophy.css'

import 'swiper/css'
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import { motion } from "framer-motion";

const Philosophy = () => {
    const prevSlideRef = useRef(null)
    const nextSlideRef = useRef(null)

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
                    <h2 className="heading-smaller uppercase">
                        наша філософія<br/>
                        <span className={"span-yellow"}>
                            Максимальний<br/>
                            комфорт гравця<br/>
                        </span>
                    </h2>
                </div>
                <div className="philosophy-left_body">
                    <p className={"body-text"}>
                        Ми використали весь наш досвід та існуючі тенденції, для
                        того, щоб створити ідеальне місце для тренувань з
                        кіберспорту та просто відпочинку.
                    </p>
                    <div className="philosophy-left_body-list-wrapper">
                        <p className={"body-text bold uppercase"}>наші переваги:</p>
                        <motion.ul
                            className={"philosophy-left_body-list"}
                            initial="hidden"
                            whileInView="visible"
                            transition={{
                                staggerChildren: 0.3
                            }}
                        >

                            <motion.li customDelay={1} variants={listVariants} className={"body-text"}>Широкі ігрові
                                мекрежі
                            </motion.li>
                            <motion.li customDelay={2} variants={listVariants} className={"body-text"}>Потужні Ігрові
                                ПК
                            </motion.li>
                            <motion.li customDelay={3} variants={listVariants} className={"body-text"}>Комфортні
                                крісла
                            </motion.li>
                            <motion.li customDelay={4} variants={listVariants} className={"body-text"}>Найкраще
                                обладнання від топових постачальників
                            </motion.li>
                            <motion.li customDelay={5} variants={listVariants} className={"body-text"}>Буткемпи для
                                тренувань
                            </motion.li>
                            <motion.li customDelay={6} variants={listVariants} className={"body-text"}>Комфортні TV зони
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
                        nextEl: nextSlideRef.current,
                        prevEl: prevSlideRef.current
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevSlideRef.current
                        swiper.params.navigation.nextEl = nextSlideRef.current
                    }}
                    style={{width: '100%', height: '100%'}}
                    spaceBetween={0}
                    className={'swiper'}
                >

                    <SwiperSlide>
                        <div className="slide-custom">
                            <span className="span-yellow bold heading">1</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-custom">
                            <span className="span-yellow bold heading">2</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-custom">
                            <span className="span-yellow bold heading">3</span>
                        </div>
                    </SwiperSlide>
                    <button className="next-slide" ref={nextSlideRef}>

                    </button>
                    <button className="prev-slide" ref={prevSlideRef}>

                    </button>

                </Swiper>
            </div>
        </div>
    );
};

export default Philosophy;
