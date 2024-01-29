import React, {useEffect, useRef, useState} from 'react';

import '../styles/Philosophy.css'

import 'swiper/css'
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {motion, useScroll, useTransform} from "framer-motion";

import img1 from '../img/cyber-32.webp'
import img2 from '../img/cyber-72.webp'
import img3 from '../img/cyber-60.webp'

const Philosophy = (props) => {
    const philosophyRef = useRef(null)
    const swiperRef = useRef(null)

    const [isPlaying, setIsPlaying] = useState(true)

    const [offsetTop, setOffsetTop] = useState(0)
    const [offsetBottom, setOffsetBottom] = useState(0)
    const [height, setHeight] = useState(0)

    const {scrollY} = useScroll()

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrentIndex(swiper.realIndex);
    };

    const listVariants = {
        hidden: {
            opacity: 0,
            y: -100
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 1.8
            }
        },
    };

    useEffect(() => {
        if(philosophyRef.current){
            window.addEventListener('scroll', () => {
                const rect = philosophyRef.current.getBoundingClientRect()

                setOffsetTop(rect.top)
                setOffsetBottom(rect.bottom)
                setHeight(rect.height)
            })
        }
    }, [philosophyRef])

    let y = useTransform(scrollY, [window.scrollY + offsetTop - window.innerHeight + 10, window.scrollY + offsetBottom - window.innerHeight + 10], [-height - 10, 0])
    let scale = useTransform(scrollY, [window.scrollY + offsetTop - window.innerHeight + 60, window.scrollY + offsetBottom - window.innerHeight + 60], [0.6, 1])

    const handlePauseToggle = () => {
        if (swiperRef.current) {
            setIsPlaying((prevIsPlaying) => {
                if (prevIsPlaying) {
                    swiperRef.current.autoplay.stop();
                } else {
                    swiperRef.current.autoplay.start();
                }
                return !prevIsPlaying;
            });
        }
    };

    const slides = [
        {img: img1, text: 'Широкі ігрові столи'},
        {img: img2, text: 'Потужні Ігрові ПК'},
        {img: img3, text: 'Комфортні крісла'},
        {img: img1, text: 'Найкраще обладнання від топових постачальників'},
        {img: img2, text: 'Буткемпи для тренувань'},
        {img: img3, text: 'Комфортні TV зони з PS5'},
    ]

    console.log(props.offsetLeft * 2 / window.innerWidth)

    return (
        <div className={"philosophy"}>
            <div className="philosophy-left" style={{width: window.innerWidth - (props.offsetLeft * 2)}}>
                <div className="philosophy-left_head">
                    <h2 className="heading uppercase">
                        наша
                        філософія:<br/>

                        <span className={"span-yellow"}>
                            Максимальний
                            комфорт гравця
                        </span>
                    </h2>
                </div>
                <div className="philosophy-left_body">
                    <p className={"body-text"}>
                        Ми використали весь наш досвід та існуючі тенденції, для
                        того, щоб створити ідеальне місце для тренувань з
                        кіберспорту та просто відпочинку.
                    </p>
                </div>
            </div>
            <div className="philosophy-right" style={{left: -props.offsetLeft}}>
                <div className="philosophy-right__wrapper" ref={philosophyRef}>

                    <Swiper
                        slidesPerView={1 + ((props.offsetLeft * 2 + 20) / window.innerWidth)}
                        onSlideChange={handleSlideChange}
                        spaceBetween={20}
                        centeredSlides={true}
                        modules={[A11y, Scrollbar, Navigation, Pagination, Autoplay]}
                        draggable={false}
                        loop={true}
                        pagination={{
                            el: '.swiper-custom-pagination',
                            bulletClass: 'swiper-custom-bullet',
                            bulletActiveClass: 'swiper-custom-bullet-active',
                            clickable: true,
                            type: "bullets"
                        }}
                        onSwiper={swiper => {
                            swiperRef.current = swiper;
                        }}
                        autoplay={{
                            delay: 2000,
                        }}
                        speed={2000}
                    >

                        <motion.div
                            className="philosophy-right_buttons-wrapper"
                            style={{
                                y: y,
                                scale: scale
                            }}
                        >
                            <div
                                className="swiper-custom-pagination"
                            >
                            </div>
                            <button
                                className={`swiper-custom-pause ${!isPlaying && 'swiper-custom-pause_active'}`}
                                onClick={handlePauseToggle}
                            />
                        </motion.div>
                        {
                            slides.map((slide, index) => (
                                <SwiperSlide>
                                    <div className="slide-custom_wrapper">
                                    <div
                                        className={`slide-custom ${index === currentIndex && 'slide-custom_active'}`}
                                        style={{
                                            backgroundImage: `url("${slide.img}")`
                                        }}
                                    >
                                        <motion.p
                                            className="body-text-bigger"
                                            animate={index === currentIndex ? 'visible' : 'hidden'}
                                            variants={listVariants}
                                        >
                                            {slide.text}
                                        </motion.p>
                                    </div>

                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Philosophy;
