import React from 'react';

import '../styles/TrustUs.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay} from "swiper/modules";

import redbull from '../img/redbull.svg'
import artline from '../img/artline.svg'
import hator from '../img/hator.svg'
import echampions from '../img/echampions.svg'
import kolo from '../img/kolo.svg'
import uesf from '../img/uesf.svg'
import asus from '../img/asus_rog.svg'

const TrustUs = () => {
    return (
        <div className="trust-us">
            <div className="trust-us_head">
                <h3 className="heading-smaller uppercase">
                    Нам довіряють
                </h3>
            </div>
            <div className="trust-us_body">
                <Swiper
                    modules={[A11y, Autoplay]}
                    slidesPerView={4.5}
                    autoplay={{
                        delay: 0,
                    }}
                    spaceBetween="20"
                    loop={true}
                    speed={2000}
                >
                    <SwiperSlide>
                        <div className="trust-us_slide" style={{backgroundImage: `url(${artline})`}}>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trust-us_slide" style={{backgroundImage: `url(${hator})`}}>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trust-us_slide" style={{backgroundImage: `url(${kolo})`}}>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trust-us_slide" style={{backgroundImage: `url(${asus})`}}>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trust-us_slide" style={{backgroundImage: `url(${redbull})`}}>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trust-us_slide" style={{backgroundImage: `url(${uesf})`}}>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trust-us_slide" style={{backgroundImage: `url(${echampions})`}}>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default TrustUs;