import React, {useEffect, useRef, useState} from 'react';

import '../styles/BusinessModel.css'

import {motion} from "framer-motion";

const BusinessModel = () => {

    const contentRef = useRef(null)
    const youtubeRef = useRef(null)
    const [videoHeight, setVideoHeight] = useState(0)

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
        if(contentRef){
            setVideoHeight(contentRef.current.clientHeight + 40)
        }
    }, [contentRef])

    return (
        <div
            className={"business-model"}
        >
            <div className="business-model_video">
                {
                    contentRef &&
                    <iframe ref={youtubeRef} height={`${videoHeight}`} style={{aspectRatio: '16/9'}} src="https://www.youtube.com/embed/N6qU-Fohhkk?si=zORCCZmZqq1DQ8Ml" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                }
            </div>
            <div className="business-model_content" ref={contentRef}>
                <motion.h3
                    variants={variants}
                    className="business-model_content-head heading-smaller"
                    initial="hidden"
                    whileInView="visible"
                >
                        <span className="span-yellow">
                            Готова бізнес-модель та<br/>
                            стандарти роботи для вашого<br/>
                            розвитку<br/>
                        </span>
                </motion.h3>
                <motion.p
                    className="body-text"
                    initial="hiddenText"
                    whileInView="visibleText"
                    variants={variants}
                >
                    Дивись відео про секрет нашої франшизи. Чи можливо<br/>
                    заробити <b>400 000 гривень</b> на місяць у комп'ютерному<br/>
                    клубі?<br/>
                    Приготуйтеся до шокуючих фактів.<br/>
                </motion.p>
            </div>
        </div>
    );
};

export default BusinessModel;
