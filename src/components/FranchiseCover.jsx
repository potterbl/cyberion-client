import React, {useEffect, useRef, useState} from 'react';

import '../styles/FranchiseCover.css'

import cover from '../img/FranchiseCover.png'

import CustomButton from "./CustomButton";
import {motion, useScroll, useTransform} from "framer-motion";

const FranchiseCover = () => {
    const coverRef = useRef(null);
    const { scrollY } = useScroll();
    const [sectionHeight, setSectionHeight] = useState(0)

    let y = useTransform(scrollY, [0, sectionHeight], ['0%', '-75%']);
    let y2 = useTransform(scrollY, [0, sectionHeight], ['0%', '-50%']);
    let opacity = useTransform(scrollY, [0, sectionHeight / 2], ['100%', '0%']);

    useEffect(() => {
        setSectionHeight(coverRef.current.offsetHeight)
    }, [coverRef])

    return (
        <div className={'franchise-cover'} ref={coverRef}>
            <div className="franchise-cover_left">
                <div className="franchise-cover_left-head">
                    <motion.h1
                        className="title"
                        style={{
                            opacity: coverRef.current ? opacity : 0
                        }}
                    >
                        Франшиза<br/>
                        кіберклубів<br/>
                        <span className={"span-yellow"}>Cyberion</span><br/>
                    </motion.h1>
                    <p className={"body-text"}>
                        Перетворюємо поняття комп'ютерних клубів з 90-х<br/>
                        у сучасний та перспективний бізнес у сфері кіберспорт.<br/>
                        Будуємо найбільшу мережу кіберспортивних клубів<br/>
                        України для найвибагливіших геймерів та кіберспортсменів!<br/>
                    </p>
                </div>
                <div className="franchise-cover_left-footer">
                    <CustomButton customStyle={'primary-button'}>
                        Відкрити власний клуб
                    </CustomButton>
                    <CustomButton customStyle={'secondary-button'}>
                        Задати питання у телеграм
                    </CustomButton>
                </div>
            </div>
            <div className="franchise-cover_right">
                <motion.img
                    src={cover}
                    alt="cover"
                    className={'franchise-cover_right-image'}
                    style={{
                        y: coverRef.current ? y : 0
                    }}
                />
                <motion.div
                    style={{
                        y: coverRef.current ? y2 : 0
                    }}
                    className={'franchise-cover_right-image-background'}
                />
            </div>
        </div>
    );
};

export default FranchiseCover;
