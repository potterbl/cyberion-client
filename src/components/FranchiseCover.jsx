import React, {useEffect, useRef, useState} from 'react';

import '../styles/FranchiseCover.css'

import cover from '../img/FranchiseCover.png'

import {motion, useScroll, useTransform} from "framer-motion";
import Btn from "./Btn";
import TypewriterComponent from "typewriter-effect";
import {useInView} from "react-intersection-observer";
import {useDispatch} from "react-redux";
import {actions} from "../store/slices/header.slice";

const FranchiseCover = () => {
    const dispatch = useDispatch()

    const coverRef = useRef(null);
    const { scrollY } = useScroll();
    const [sectionHeight, setSectionHeight] = useState(0)

    const {ref, inView} = useInView({
        threshold: 0
    })

    useEffect(() => {
        dispatch(actions.setInView(inView))
    }, [inView, dispatch])

    let yHero = useTransform(scrollY, [0, sectionHeight], [0, sectionHeight])
    let y = useTransform(scrollY, [0, sectionHeight], ['0%', '-100%']);
    let y2 = useTransform(scrollY, [0, sectionHeight], ['0%', '-80%']);
    let opacity = useTransform(scrollY, [0, sectionHeight / 2], ['100%', '0%']);

    useEffect(() => {
        setSectionHeight(coverRef.current.offsetHeight)
    }, [coverRef])

    return (
        <div className="franchise-hero" ref={ref}>
            <div className="franchise-hero_gradient"></div>
            <motion.div className={'franchise-cover'} ref={coverRef} style={{y: yHero}}>
                <div className="franchise-cover_left">
                    <div className="franchise-cover_left-head">
                        <motion.h1
                            className="title uppercase"
                            style={{
                                opacity: coverRef.current ? opacity : 0
                            }}
                        >
                            Франшиза<br/>
                            кіберклубів<br/>
                            <span className={"span-yellow"}>
                                <TypewriterComponent
                                    options={{
                                        strings: ['CYBERION'],
                                        autoStart: true,
                                        loop: false,
                                        wrapperClassName: 'span-yellow',
                                        deleteSpeed: Infinity
                                    }}
                                />
                            </span><br/>
                        </motion.h1>
                        <p className={"body-text"}>
                            Перетворюємо поняття комп'ютерних клубів з 90-х<br/>
                            у сучасний та перспективний бізнес у сфері кіберспорт.<br/>
                            Будуємо найбільшу мережу кіберспортивних клубів<br/>
                            України для найвибагливіших геймерів та кіберспортсменів!<br/>
                        </p>
                    </div>
                    <div className="franchise-cover_left-footer">
                        <Btn type={'primary'}>
                            Відкрити власний клуб
                        </Btn>
                        <Btn type={'second'}>
                            Задати питання у телеграм
                        </Btn>
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
            </motion.div>
        </div>
    );
};

export default FranchiseCover;
