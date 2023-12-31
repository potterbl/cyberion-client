import React from 'react';

import '../styles/Reviews.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation} from "swiper/modules";
import ButtonSlide from "./ButtonSlide";
import {motion} from "framer-motion";

import observatorna from '../img/observatorna_avatar.png'
import darnitsya from '../img/darnitsya_avatar.png'
import politech from '../img/politech_avatar.png'

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
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = "#prevSlideReviews"
                        swiper.params.navigation.nextEl = "#nextSlideReviews"
                    }}
                    slidesPerView={3.5}
                    loop={true}
                    spaceBetween={20}
                    speed={1000}
                >
                    <SwiperSlide>
                        <motion.div
                            className="reviews_slide"
                            variants={reviewAnimation}
                        >
                            <div className="reviews_slide-inner">
                                <div className="reviews_slide-head">
                                    <div className="reviews_slide-head_avatar"
                                         style={{backgroundImage: `url('${observatorna}')`}}>

                                    </div>
                                    <div className="reviews_slide-head-name">
                                        <p className="body-text break-word">
                                            Артем
                                        </p>
                                        <p className="break-word reviews_slide-head_desc">
                                            Власник клубу на вул. Обсерваторна.
                                        </p>
                                    </div>
                                </div>
                                <hr className="reviews_slide-hr"/>
                                <div className="reviews_slide-body">
                                    <p className="body-text-bigger">
                                    </p>
                                    <p className="body-text">
                                        <span className="span-yellow bold body-text-bigger">"</span>Спорт - це актуальна
                                        сьогодні тема. Ми
                                        поєднали дві сторони практичну і емоційну. Тому обрали кіберсопртивний бізнес і
                                        франшизу Cyberion.<span className="span-yellow bold body-text-bigger">"</span>
                                    </p>
                                </div>
                                <hr className="reviews_slide-hr"/>
                                <div className="reviews_slide-footer">
                                    <a href="https://youtu.be/4Uw_X6dLmfQ?si=HLNskRKUg2948lJ8"
                                       className="body-text underline">Дивитись відео на YouTube↗</a>
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
                                    <div className="reviews_slide-head_avatar"
                                         style={{backgroundImage: `url('${darnitsya}')`}}>

                                    </div>
                                    <div className="reviews_slide-head-name">
                                        <p className="body-text break-word">
                                            Віктор
                                        </p>
                                        <p className="break-word reviews_slide-head_desc">
                                            Власник клубу на вул. Малишко.
                                        </p>
                                    </div>
                                </div>
                                <hr className="reviews_slide-hr"/>
                                <div className="reviews_slide-body">
                                    <p className="body-text-bigger">
                                    </p>
                                    <p className="body-text">
                                        <span className="span-yellow bold body-text-bigger">"</span>Давно звернув увагу
                                        на кіберспорт як на перспективний бізнес. Дивлячись на змагання які мають
                                        призові фонди в 30-40 млн $ я розумію, що за цим велике майбутнє.<span
                                        className="span-yellow bold body-text-bigger">"</span>
                                    </p>
                                </div>
                                <hr className="reviews_slide-hr"/>
                                <div className="reviews_slide-footer">
                                    <a href="https://youtu.be/xeTR58KmmQY?si=oqARvfnSYucGWlFx"
                                       className="body-text underline">Дивитись відео на YouTube↗</a>
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
                                    <div className="reviews_slide-head_avatar"
                                         style={{backgroundImage: `url('${politech}')`}}>

                                    </div>
                                    <div className="reviews_slide-head-name">
                                        <p className="body-text break-word">
                                            Віталій
                                        </p>
                                        <p className="break-word reviews_slide-head_desc">
                                            Власник клубу на пр. Перемоги.
                                        </p>
                                    </div>
                                </div>
                                <hr className="reviews_slide-hr"/>
                                <div className="reviews_slide-body">
                                    <p className="body-text-bigger">
                                    </p>
                                    <p className="body-text">
                                        <span className="span-yellow bold body-text-bigger">"</span>Кіберспорт наразі є
                                        дуже перспективним напрямком де поки відсутня конкуренція на ринку. А також
                                        зустрів вас в яких вже є мережа кіберклубів, а значить ви продаєте досвід, а не
                                        повітря.<span
                                        className="span-yellow bold body-text-bigger">"</span>
                                    </p>
                                </div>
                                <hr className="reviews_slide-hr"/>
                                <div className="reviews_slide-footer">
                                    <a href="https://youtu.be/cNtZtW_HhoI?si=oZfNiDcuB9pURkht"
                                       className="body-text underline">Дивитись відео на YouTube↗</a>
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
                                    <div className="reviews_slide-head_avatar"
                                         style={{backgroundImage: `url('${darnitsya}')`}}>

                                    </div>
                                    <div className="reviews_slide-head-name">
                                        <p className="body-text break-word">
                                            Віктор
                                        </p>
                                        <p className="break-word reviews_slide-head_desc">
                                            Власник клубу на вул. Малишко.
                                        </p>
                                    </div>
                                </div>
                                <hr className="reviews_slide-hr"/>
                                <div className="reviews_slide-body">
                                    <p className="body-text-bigger">
                                    </p>
                                    <p className="body-text">
                                        <span className="span-yellow bold body-text-bigger">"</span>Давно звернув увагу
                                        на кіберспорт як на перспективний бізнес. Дивлячись на змагання які мають
                                        призові фонди в 30-40 млн $ я розумію, що за цим велике майбутнє.<span
                                        className="span-yellow bold body-text-bigger">"</span>
                                    </p>
                                </div>
                                <hr className="reviews_slide-hr"/>
                                <div className="reviews_slide-footer">
                                    <a href="https://youtu.be/xeTR58KmmQY?si=oqARvfnSYucGWlFx"
                                       className="body-text underline">Дивитись відео на YouTube↗</a>
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