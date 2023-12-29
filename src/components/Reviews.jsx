import React from 'react';

import '../styles/Reviews.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation} from "swiper/modules";
import ButtonSlide from "./ButtonSlide";
import {motion} from "framer-motion";

const Reviews = () => {

    const reviewAnimation = {
        hidden: {
          opacity: 0,
          y: '100%'
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.25
            }
        }
    }

    return (
        <div className="reviews">
            <div className="reviews_head">
                <h3 className="heading-smaller">
                    Відгуки наших <span className="span-yellow uppercase">франчайзі</span>
                </h3>
            </div>
            <motion.div
                className="reviews_body"
                initial="hidden"
                whileInView="visible"
                transition={{
                    staggerChildren: 0.4
                }}
            >
                <ButtonSlide type={'next'} id="nextSlideReviews"/>
                <ButtonSlide type={'prev'} id="prevSlideReviews"/>
                <div className="video-carousel_gradient"></div>
                <Swiper
                    modules={[A11y, Navigation]}
                    navigation={{
                        prevEl: "#prevSlideReviews",
                        nextEl: "#nextSlideReviews",
                    }}
                    slidesPerView={3.5}
                    loop={true}
                    spaceBetween={20}
                    speed={1500}
                >
                    <SwiperSlide>
                        <motion.div
                            className="reviews_slide"
                            variants={reviewAnimation}
                        >
                            <div className="reviews_slide-inner">
                                <div className="reviews_slide-head">
                                    <div className="reviews_slide-head_avatar">

                                    </div>
                                    <div className="reviews_slide-head_name">
                                        <p className="body-text">FirstName LastName</p>
                                    </div>
                                </div>
                                <hr className="reviews_slide-hr"/>
                                <div className="reviews_slide-body">
                                    <p className="body-text-bigger">
                                        Title of description
                                    </p>
                                    <p className="body-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque pretium mi at maximus. Phasellus sed ex eu nunc rutrum porttitor dictum et orci. Ut sit amet blandit neque. Curabitur sollicitudin iaculis ligula, vel varius ligula bibendum in. Proin semper leo id tempus iaculis. Donec eget fermentum purus. Pellentesque vitae sapien quis ante ullamcorper accumsan. Maecenas at est dolor. Vivamus eu dapibus ex.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.div
                            className="reviews_slide"
                            variants={reviewAnimation}
                        >
                            <div className="reviews_slide-inner">
                                <div className="reviews_slide-head">
                                    <div className="reviews_slide-head_avatar">

                                    </div>
                                    <div className="reviews_slide-head_name">
                                        <p className="body-text">FirstName LastName</p>
                                    </div>
                                </div>
                                <hr className="reviews_slide-hr"/>
                                <div className="reviews_slide-body">
                                    <p className="body-text-bigger">
                                        Title of description
                                    </p>
                                    <p className="body-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque pretium mi at maximus. Phasellus sed ex eu nunc rutrum porttitor dictum et orci.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.div
                            className="reviews_slide"
                            variants={reviewAnimation}
                        >
                            <div className="reviews_slide-inner">
                                <div className="reviews_slide-head">
                                    <div className="reviews_slide-head_avatar">

                                    </div>
                                    <div className="reviews_slide-head_name">
                                        <p className="body-text">FirstName LastName</p>
                                    </div>
                                </div>
                                <hr className="reviews_slide-hr"/>
                                <div className="reviews_slide-body">
                                    <p className="body-text-bigger">
                                        Title of description
                                    </p>
                                    <p className="body-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque
                                        pretium mi at maximus. Phasellus sed ex eu nunc rutrum porttitor dictum et orci.
                                        Ut sit amet blandit neque. Curabitur sollicitudin iaculis ligula, vel varius
                                        ligula bibendum in. Proin semper leo id tempus iaculis. Donec eget fermentum
                                        purus. Pellentesque vitae sapien quis ante ullamcorper accumsan. Maecenas at est
                                        dolor. Vivamus eu dapibus ex.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.div
                            className="reviews_slide"
                            variants={reviewAnimation}
                        >
                            <div className="reviews_slide-inner">
                                <div className="reviews_slide-head">
                                    <div className="reviews_slide-head_avatar">

                                    </div>
                                    <div className="reviews_slide-head_name">
                                        <p className="body-text">FirstName LastName</p>
                                    </div>
                                </div>
                                <hr className="reviews_slide-hr"/>
                                <div className="reviews_slide-body">
                                    <p className="body-text-bigger">
                                        Title of description
                                    </p>
                                    <p className="body-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque
                                        pretium mi at maximus. Phasellus sed ex eu nunc rutrum porttitor dictum et orci.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.div
                            className="reviews_slide"
                            variants={reviewAnimation}
                        >
                            <div className="reviews_slide-inner">
                                <div className="reviews_slide-head">
                                    <div className="reviews_slide-head_avatar">

                                    </div>
                                    <div className="reviews_slide-head_name">
                                        <p className="body-text">FirstName LastName</p>
                                    </div>
                                </div>
                                <hr className="reviews_slide-hr"/>
                                <div className="reviews_slide-body">
                                    <p className="body-text-bigger">
                                        Title of description
                                    </p>
                                    <p className="body-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque
                                        pretium mi at maximus. Phasellus sed ex eu nunc rutrum porttitor dictum et orci.
                                        Ut sit amet blandit neque. Curabitur sollicitudin iaculis ligula, vel varius
                                        ligula bibendum in. Proin semper leo id tempus iaculis. Donec eget fermentum
                                        purus. Pellentesque vitae sapien quis ante ullamcorper accumsan. Maecenas at est
                                        dolor. Vivamus eu dapibus ex.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.div
                            className="reviews_slide"
                            variants={reviewAnimation}
                        >
                            <div className="reviews_slide-inner">
                                <div className="reviews_slide-head">
                                    <div className="reviews_slide-head_avatar">

                                    </div>
                                    <div className="reviews_slide-head_name">
                                        <p className="body-text">FirstName LastName</p>
                                    </div>
                                </div>
                                <hr className="reviews_slide-hr"/>
                                <div className="reviews_slide-body">
                                    <p className="body-text-bigger">
                                        Title of description
                                    </p>
                                    <p className="body-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque
                                        pretium mi at maximus. Phasellus sed ex eu nunc rutrum porttitor dictum et orci.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                </Swiper>
            </motion.div>
        </div>
    );
};

export default Reviews;