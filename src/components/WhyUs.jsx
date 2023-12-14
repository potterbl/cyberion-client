/* eslint-disable */
import React, {useEffect, useRef, useState} from 'react';

import '../styles/WhyUs.css'

import whyImage from '../img/whyUsPeople.png'
import {motion, useScroll, useTransform} from "framer-motion";
import {useSelector} from "react-redux";

const WhyUs = React.forwardRef((props, ref) => {
    const {offsetTop, offsetBottom, isInView: opacity} = useSelector(state => state.blocks)
    console.log(opacity)
    const childrenRef = useRef(null)

    const {scrollY} = useScroll()

    const [blockHeight, setBlockHeight] = useState(0)
    const [isInView, setIsInView] = useState(false)

    let scale = window.innerWidth > 770 ?
        useTransform(scrollY, [offsetTop, offsetTop + (blockHeight * 0.7)], [1, 0.2])
        : 1

    useEffect(() => {
        if(ref.current){
            setBlockHeight(ref.current.getBoundingClientRect().height)
        }
    }, [ref])

    useEffect(() => {
        if(ref.current && childrenRef.current){
            const handleScroll = () => {
                const scrollPosition = window.scrollY
                if (scrollPosition < ref.current.getBoundingClientRect().top + (childrenRef.current.getBoundingClientRect().height / 2) + window.scrollY || scrollPosition > offsetBottom) {
                    setIsInView(false);
                } else {
                    setIsInView(true)
                }
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
        }
    }, [offsetBottom]);


    const containerAnimation= {
        initial: {
            scaleX: 0,
            opacity: 0,
        },
        visible: {
            scaleX: 1,
            opacity: 1,
            transition: {
                duration: 0.35,
            }
        }
    }

    const circleAnimation = {
        initial: {
            opacity: 0.15,
            x: "-100%"
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                bounce: 0.3,
                delay: 0.5,
                duration: 0.6,
            }
        }
    }

    const circleMobileAnimation = {
        initial: {
            opacity: 0,
            y: '100%'
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.3,
                delay: 0.5,
                duration: 0.6,
            }
        }
    }

    const textAnimation = {
        initial: {
            opacity: 0,
            x: "-100%"
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.9
            }
        }
    }

    const textBackAnimation = {
        initial: {
            opacity: 1,
            x: "0"
        },
        visible: {
            opacity: 0,
            x: "-100%",
            transition: {
                delay: 0.9
            }
        }
    }

    const imageAnimation = {
        initial: {
            y: "100%",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.25,
                delay: 0.9,
            },
        }
    }

    return (
        <div className="why-us_container" ref={ref}>
            <motion.div
                className={`why-us ${isInView && window.innerWidth > 770 ? 'why-us_top' : ''}`}
                initial="initial"
                whileInView="visible"
                variants={containerAnimation}
                style={{
                    scale: scale,
                }}
                ref={childrenRef}
            >
                <motion.div
                    className="why-us_left"
                    style={{
                        opacity: opacity ? 0 : 1
                    }}
                >

                    <motion.div

                        className="why-us_left-inner"
                        variants={textAnimation}
                    >
                        <h2 className={`${window.innerWidth <= 1000 ? 'heading' : window.innerWidth <= 1200 ? 'heading-smaller' : 'heading'} span-yellow uppercase`}>
                            ЧОМУ МИ<br/>
                            ОБРАЛИ САМЕ<br/>
                            ЦЮ НІШУ?<br/>
                        </h2>
                        {
                            window.innerWidth > 854 || window.innerWidth <= 768 ?
                                <p className="body-text">
                                    Давайте разом проаналізуємо, як<br/>
                                    ми прийшли до рішення<br/>
                                    відкриття кіберспортивних клубів,<br/>
                                    що наштовхнуло на це і які<br/>
                                    можливості існують у цьому бізнесі<br/>
                                </p>
                                : null
                        }
                        <p className="body-text">
                            Якщо ти вже знаєш чому цей бізнес актуальний,<br/>
                            тисни на кнопку нижче...<br/>
                        </p>
                        <a href="https://t.me/Artem_Natanzon" className="body-text-bigger">
                            Задати питання у
                            Telegram→
                        </a>
                    </motion.div>
                </motion.div>
                <div className="why-us_right">
                    <motion.div
                        className="why-us_right-circle"
                        variants={window.innerWidth > 1000 ? circleAnimation : circleMobileAnimation}
                    >
                    </motion.div>
                </div>
                <motion.img
                    src={whyImage}
                    className="why-us_image"
                    variants={imageAnimation}
                />
            </motion.div>
        </div>
    );
});

export default WhyUs;
