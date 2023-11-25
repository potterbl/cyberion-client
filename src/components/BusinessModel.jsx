import React, {useEffect, useRef, useState} from 'react';

import '../styles/BusinessModel.css'

import {motion} from "framer-motion";

const BusinessModel = () => {

    const videoContainerRef = useRef(null)
    const [videoWidth, setVideoWidth] = useState(0)

    const variants = {
        hidden: {
            opacity: 0,
            x: 100
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1
            }
        },
        hiddenText: {
            y: 100,
            opacity: 0
        },
        visibleText: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1
            }
        }
    }

    useEffect(() => {
        if( window.innerWidth > 1000 && videoContainerRef){
            setVideoWidth(videoContainerRef.current.clientWidth)
        } else if (videoContainerRef && window.innerWidth > 702) {
            setVideoWidth(window.innerWidth - 167)
        } else if(videoContainerRef){
            setVideoWidth(window.innerWidth - 40)
        }
    }, [videoContainerRef])

    return (
        <div
            className={"business-model"}
        >
            <div className="business-model_video" ref={videoContainerRef}>
                {
                    videoContainerRef &&
                    <iframe width={`${videoWidth}`} style={{aspectRatio: '16/9'}} src="https://www.youtube.com/embed/N6qU-Fohhkk?si=zORCCZmZqq1DQ8Ml" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                }
            </div>
            <div className="business-model_content">
                <motion.h3
                    variants={variants}
                    className="business-model_content-head heading-smaller"
                    initial="hidden"
                    whileInView="visible"
                >
                    {
                        window.innerWidth > 1200 ?
                        <span className="span-yellow">
                            Готова бізнес
                            {
                                window.innerWidth < 1200 &&
                                <br/>
                            }
                            -модель та<br/>
                            стандарти роботи
                            {
                                window.innerWidth < 1200 &&
                                <br/>
                            }
                            для вашого<br/>
                            розвитку<br/>
                        </span>
                        :
                            <span className="span-yellow">
                                Готова бізнес-модель та стандарти
                                роботи для вашого розвитку
                            </span>
                    }

                </motion.h3>
                <motion.p
                    className="body-text break-word"
                    initial="hiddenText"
                    whileInView="visibleText"
                    variants={variants}
                >
                    {
                        window.innerWidth > 1000 ?
                            <>
                                Дивись відео про секрет нашої франшизи. Чи можливо<br/>
                                заробити <b>400 000 гривень</b> на місяць у комп'ютерному<br/>
                                клубі?<br/>
                                Приготуйтеся до шокуючих фактів.<br/>
                            </>
                            :
                            <>
                                Дивись відео про секрет нашої франшизи. Чи можливо
                                заробити <b>400 000 гривень</b> на місяць у комп'ютерному
                                клубі?
                                Приготуйтеся до шокуючих фактів.
                            </>
                    }

                </motion.p>
            </div>
        </div>
    );
};

export default BusinessModel;
