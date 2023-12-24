import React from 'react';

import '../styles/TrustUs.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay} from "swiper/modules";

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
                        <div className="trust-us_slide">

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trust-us_slide">

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trust-us_slide">

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trust-us_slide">

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trust-us_slide">

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trust-us_slide">

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default TrustUs;