import React, {useState} from 'react';

import '../styles/VideoCarousel.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation} from "swiper/modules";
import ButtonSlide from "./ButtonSlide";

const VideoCarousel = () => {

    const [videos, setVideos] = useState([
        {link: 'https://www.youtube.com/embed/4Uw_X6dLmfQ?si=36epocfBTJjYF-B7', title: ''},
        {link: 'https://www.youtube.com/embed/Z665kqXEGz4?si=6kdowOBpK7HddZ50', title: ''},
        {link: 'https://www.youtube.com/embed/kAEpt7y4HVc?si=pl1hAUbqPG6KRSaL', title: ''},
        {link: 'https://www.youtube.com/embed/kAEpt7y4HVc?si=pl1hAUbqPG6KRSaL', title: ''},
        {link: 'https://www.youtube.com/embed/kAEpt7y4HVc?si=pl1hAUbqPG6KRSaL', title: ''},
    ])

    setVideos(videos)

    const API_KEY = "AIzaSyBfoNRR1D8PHglhZSBhVEDc3pL02OFdzE8";

    const channelId = "UCSHRxvJENC5Hn71y4beRkcQ";

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&key=${API_KEY}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // const videos = data.items;

            console.log(data)

            // const embedLinks = videos.map((video) => {
            //     return `https://www.youtube.com/embed/${video.id.videoId}`;
            // });

            // console.log(embedLinks);
        });

    return (
        <div className="video-carousel">
            <div className="video-carousel_inner">
                <ButtonSlide type={'next'} id="nextSlideVideos"/>
                <ButtonSlide type={'prev'} id="prevSlideVideos"/>
                <div className="video-carousel_gradient"></div>
                <Swiper
                    modules={[A11y, Navigation]}
                    slidesPerView={3.5}
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
                                    <iframe className="video-carousel_video" title={"v"} src={v.link}
                                            frameBorder="0"></iframe>
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
