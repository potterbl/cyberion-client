/* eslint-disable */
import React, {useEffect, useState} from 'react';

import '../styles/VideoCarousel.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation} from "swiper/modules";
import ButtonSlide from "./ButtonSlide";

const VideoCarousel = () => {

    const [videos, setVideos] = useState([
    ])

    const API_KEY = "AIzaSyBfoNRR1D8PHglhZSBhVEDc3pL02OFdzE8";

    const channelId = "UC5CzPPsxGrh9jdI5HuTA_-A";

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&key=${API_KEY}`;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const videos = data.items;

                const embedLinks = videos.map((video) => {
                    return {link: `https://www.youtube.com/embed/${video.id.videoId}`, title: video.snippet.title}
                });

                setVideos(embedLinks.slice(1))
            });
    }, [])


    return (
        <div className="video-carousel">
            <div className="video-carousel_inner">
                <ButtonSlide type={'next'} id="nextSlideVideos"/>
                <ButtonSlide type={'prev'} id="prevSlideVideos"/>
                <div className="video-carousel_gradient"></div>
                <Swiper
                    modules={[A11y, Navigation]}
                    slidesPerView={
                    window.innerWidth > 768 ?
                        3.5
                        : 2.5
                    }
                    spaceBetween="10"
                    navigation={{
                        nextEl: "#nextSlideVideos",
                        prevEl: "#prevSlideVideos"
                    }}
                    loop={true}
                >
                    {
                        videos.map(v => (
                            <SwiperSlide>
                                <div className="video-carousel_slide">
                                    <iframe className="video-carousel_video" src={v.link} title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen></iframe>
                                    <p className="body-text gray-text">{v.title.replace(/&#39;/g, "'")}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default VideoCarousel;
