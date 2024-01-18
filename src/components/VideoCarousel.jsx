/* eslint-disable */
import React, {useEffect, useState} from 'react';

import '../styles/VideoCarousel.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation} from "swiper/modules";
import ButtonSlide from "./ButtonSlide";
import axios from "axios";

const VideoCarousel = () => {

    const [videos, setVideos] = useState([
    ])
    useEffect(() => {
        async function getVideos() {
            await axios
                .get("https://great-wasp-engaged.ngrok-free.app/youtube")
                .then(res => {
                    setVideos(res.data)
                })
                .catch(err => console.log(err))
        }

        getVideos()
    }, [])


    return (
        <div className="video-carousel">
            <div className="video-carousel_inner">
                <ButtonSlide type={'next'} id="nextSlideVideos"/>
                <ButtonSlide type={'prev'} id="prevSlideVideos"/>
                <div className="video-carousel_gradient"></div>
                {
                    videos && videos.length &&
                    <Swiper
                        modules={[A11y, Navigation]}
                        slidesPerView={
                            window.innerWidth < 400 ?
                                1.2
                                : window.innerWidth < 670 ?
                                    1.5
                                    : window.innerWidth < 750 ?
                                        2.5
                                        : window.innerWidth < 820 ?
                                            3.2
                                            : window.innerWidth > 820 ?
                                                3.5
                                                : 2.5
                        }
                        spaceBetween="10"
                        navigation={{
                            nextEl: "#nextSlideVideos",
                            prevEl: "#prevSlideVideos"
                        }}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = "#prevSlideVideos"
                            swiper.params.navigation.nextEl = "#nextSlideVideos"
                        }}
                        loop={true}
                    >
                        {
                            videos.map(v => (
                                <SwiperSlide>
                                    <div className="video-carousel_slide">
                                        <iframe className="video-carousel_video" src={v.link}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen></iframe>
                                        <p className="body-text gray-text">{v.title.replace(/&#39;/g, "'")}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                }
            </div>
        </div>
    );
};

export default VideoCarousel;
