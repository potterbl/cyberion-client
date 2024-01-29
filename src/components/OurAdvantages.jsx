import React, {useEffect, useRef, useState} from 'react';

import '../styles/OurAdvantages.css'
import {motion} from "framer-motion";

import img1 from '../img/photo.svg fill.svg'
import img2 from '../img/photo.svg fill (1).svg'
import img3 from '../img/build.svg fill.svg'
import img4 from '../img/team.svg fill.svg'
import img5 from '../img/photo.svg fill (2).svg'
import img6 from '../img/photo.svg fill (3).svg'
import img7 from '../img/photo.svg fill (4).svg'
import img8 from '../img/photo.svg fill (5).svg'
import img9 from '../img/photo.svg fill (6).svg'
import img10 from '../img/kolo.svg fill.svg'
import Btn from "./Btn";
import {useInView} from "react-intersection-observer";
import Modal from "./Modal";

const OurAdvantages = () => {
    const [isModal, setIsModal] = useState(false)

    const [contentRef, isInView] = useInView()

    const bodyRef = useRef(null)

    const sections = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ]

    const [visibleSections, setVisibleSections] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
});

    const [progress, setProgress] = useState(0);

    const callbackFunctions = (section) => (entries) => {
        const [entry] = entries;
        setVisibleSections((prevVisibleSections) => {
            const newVisibleSections = { ...prevVisibleSections };
            newVisibleSections[section] = entry.isIntersecting;

            const keys = Object.keys(newVisibleSections);
            if (keys.length > 10) {
                const firstKeys = keys.slice(0, 9);
                const limitedVisibleSections = Object.fromEntries(firstKeys.map(key => [key, newVisibleSections[key]]));
                return limitedVisibleSections;
            }

            return newVisibleSections;
        });
    };

    const observerOptions = {
        threshold: 1,
        root: null,
    };

    useEffect(() => {
        if(
            sections[0].current &&
            sections[1].current &&
            sections[2].current &&
            sections[3].current &&
            sections[4].current &&
            sections[5].current &&
            sections[6].current &&
            sections[7].current &&
            sections[8].current &&
            sections[9].current
        ){
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    callbackFunctions(index)([entry]);
                });
            }, observerOptions);

            sections.forEach((section) => {
                observer.observe(section?.current);
            });

            return () => {
                observer.disconnect();
            };
        }
        //eslint-disable-next-line
    }, [sections]);


    useEffect(() => {
        if(
            sections[0].current &&
            sections[1].current &&
            sections[2].current &&
            sections[3].current &&
            sections[4].current &&
            sections[5].current &&
            sections[6].current &&
            sections[7].current &&
            sections[8].current &&
            sections[9].current
        ) {
            let lastVisibleSection = Object.keys(visibleSections).findLast((key) => visibleSections[key]);


            if (lastVisibleSection && sections[lastVisibleSection] && sections[lastVisibleSection].current) {
                const section = sections[lastVisibleSection].current;
                const body = bodyRef.current;
                const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                const bodyTop = body.getBoundingClientRect().top + window.scrollY;
                const newProgress = sectionTop - bodyTop;

                if (newProgress !== progress) {
                    setProgress(newProgress);
                }
            }
        }
        //eslint-disable-next-line
    }, [visibleSections, sections]);

    const circleAnimation = {
        initial: {
            opacity: 0,
            x: '-100%'
        },
        visible: (custom) => ({
            opacity: custom ? 1 : 0,
            x: custom ? 0 : '-100%',
            transition: {
                type: 'spring',
                bounce: 0.2,
            }
        })
    }

    const textAnimation = {
        initial: {
            opacity: 0,
            y: '100%'
        },
        visible: (custom) => ({
            opacity: custom ? 1 : 0,
            y: custom ? 0 : '100%',
            transition: {
                type: 'spring',
                bounce: 0.2,
            }
        })
    }

    return (
        <>
            <Modal title="Отримати консультацію" isActive={isModal} setIsActive={setIsModal}/>

            <div className="our-advantages" ref={contentRef}>
                <div className="our-advantages_head">
                    <h2 className="title uppercase">
                        які переваги роботи по франшизі?
                    </h2>
                </div>
                <div
                    className="our-advantages_body"
                    ref={bodyRef}
                >
                    <div className="our-advantages_body-card">
                        <motion.div
                            className={`our-advantages_body-card_circle`}
                            ref={sections[0]}
                            variants={circleAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[0]}
                            style={{
                                backgroundImage: `url("${img1}")`
                            }}
                        >

                        </motion.div>
                        <motion.div
                            className="our-advantages_body-card_content break-word"
                            variants={textAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[0]}
                        >
                            <h4 className="body-text-bigger uppercase">підбір локації</h4>
                            <p className="body-text">Допоможемо з підбором та аналізом приміщення у Вашому місті, надамо
                                технічні рекомендації та чек-лист пошуку приміщення</p>
                        </motion.div>
                    </div>
                    <div className="our-advantages_body-card">
                        <motion.div
                            className="our-advantages_body-card_circle"
                            ref={sections[1]}
                            variants={circleAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[1]}
                            style={{
                                backgroundImage: `url("${img2}")`
                            }}
                        >

                        </motion.div>
                        <motion.div
                            className="our-advantages_body-card_content break-word"
                            variants={textAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[1]}
                        >
                            <h4 className="body-text-bigger uppercase">фірмовий стиль</h4>
                            <p className="body-text">Надамо доступ до нашого брендбуку та створимо унікальний дизайн
                                проект
                                вашого приміщення</p>
                        </motion.div>
                    </div>
                    <div className="our-advantages_body-card">
                        <motion.div
                            className="our-advantages_body-card_circle"
                            ref={sections[2]}
                            variants={circleAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[2]}
                            style={{
                                backgroundImage: `url("${img3}")`
                            }}
                        >

                        </motion.div>
                        <motion.div
                            className="our-advantages_body-card_content break-word"
                            variants={textAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[2]}
                        >
                            <h4 className="body-text-bigger uppercase">ПЕРЕВІРЕНІ ПІДРЯДНИКИ ТА ПОСТАЧАЛЬНИКИ</h4>
                            <p className="body-text">Надамо базу підрядників та постачальників, які підійдуть саме для
                                вас.
                                Сформуємо специфікацію для вашого клубу</p>
                        </motion.div>
                    </div>
                    <div className="our-advantages_body-card">
                        <motion.div
                            className="our-advantages_body-card_circle"
                            ref={sections[3]}
                            variants={circleAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[3]}
                            style={{
                                backgroundImage: `url("${img4}")`
                            }}
                        >

                        </motion.div>
                        <motion.div
                            className="our-advantages_body-card_content break-word"
                            variants={textAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[3]}
                        >
                            <h4 className="body-text-bigger uppercase">ПЕРСОНАЛЬНИЙ МЕНЕДЖЕР</h4>
                            <p className="body-text">Персональний менеджер та проектна команда для кожного партнера на
                                кожному етапі будівництва</p>
                        </motion.div>
                    </div>
                    <div className="our-advantages_body-card">
                        <motion.div
                            className="our-advantages_body-card_circle"
                            ref={sections[4]}
                            variants={circleAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[4]}
                            style={{
                                backgroundImage: `url("${img5}")`
                            }}
                        >

                        </motion.div>
                        <motion.div
                            className="our-advantages_body-card_content break-word"
                            variants={textAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[4]}
                        >
                            <h4 className="body-text-bigger uppercase">БАЗА ЗНАНЬ</h4>
                            <p className="body-text">Передамо Вам наш досвід та знання, позбавимо вас від необхідності
                                повторювати наш шлях від новачків до досвідчених власників кіберклубів</p>
                        </motion.div>
                    </div>
                    <div className="our-advantages_body-card">
                        <motion.div
                            className="our-advantages_body-card_circle"
                            ref={sections[5]}
                            variants={circleAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[5]}
                            style={{
                                backgroundImage: `url("${img6}")`
                            }}
                        >

                        </motion.div>
                        <motion.div
                            className="our-advantages_body-card_content break-word"
                            variants={textAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[5]}
                        >
                            <h4 className="body-text-bigger uppercase">СТАНДАРТИ ТА РЕГЛАМЕНТИ</h4>
                            <p className="body-text">Усі необхідні правила та регламенти по роботі клубу є ключевим
                                елементом
                                успішної операційної діяльності і всі вони вже сформовані для Вас</p>
                        </motion.div>
                    </div>
                    <div className="our-advantages_body-card">
                        <motion.div
                            className="our-advantages_body-card_circle"
                            ref={sections[6]}
                            variants={circleAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[6]}
                            style={{
                                backgroundImage: `url("${img7}")`
                            }}
                        >

                        </motion.div>
                        <motion.div
                            className="our-advantages_body-card_content break-word"
                            variants={textAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[6]}
                        >
                            <h4 className="body-text-bigger uppercase">ПІДТРИМКА 24/7</h4>
                            <p className="body-text">Відділ IT, що займається технічною підтримкою 24/7</p>
                        </motion.div>
                    </div>
                    <div className="our-advantages_body-card">
                        <motion.div
                            className="our-advantages_body-card_circle"
                            ref={sections[7]}
                            variants={circleAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[7]}
                            style={{
                                backgroundImage: `url("${img8}")`
                            }}
                        >

                        </motion.div>
                        <motion.div
                            className="our-advantages_body-card_content break-word"
                            variants={textAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[7]}
                        >
                            <h4 className="body-text-bigger uppercase">ПІДГОТОВКА</h4>
                            <p className="body-text">Школа франчайзі, навчання та атестація персоналу</p>
                        </motion.div>
                    </div>
                    <div className="our-advantages_body-card">
                        <motion.div
                            className="our-advantages_body-card_circle"
                            ref={sections[8]}
                            variants={circleAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[8]}
                            style={{
                                backgroundImage: `url("${img9}")`
                            }}
                        >

                        </motion.div>
                        <motion.div
                            className="our-advantages_body-card_content break-word"
                            variants={textAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[8]}
                        >
                            <h4 className="body-text-bigger uppercase">КОНТРОЛЬ ЯКОСТІ</h4>
                            <p className="body-text">Система контролю якості та постійне оцінювання успішності клубу</p>
                        </motion.div>
                    </div>
                    <div className="our-advantages_body-card">
                        <motion.div
                            className="our-advantages_body-card_circle"
                            ref={sections[9]}
                            variants={circleAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[9]}
                            style={{
                                backgroundImage: `url("${img10}")`
                            }}
                        >

                        </motion.div>
                        <motion.div
                            className="our-advantages_body-card_content break-word"
                            variants={textAnimation}
                            initial="initial"
                            animate="visible"
                            custom={visibleSections[9]}
                        >
                            <h4 className="body-text-bigger uppercase">КЛУБНА ЛІГА</h4>
                            <p className="body-text">Власна ліга, яка доступна тільки клубам-партнерам CYBERION.
                                Актуальні
                                дисципліни та формати, великі призові - потужний інструмент для залучення
                                гравців</p>
                        </motion.div>
                    </div>
                    <div className="our-advantages_body_progress-wrapper">
                        {
                            isInView &&
                            <motion.div
                                className="our-advantages_body_progress"
                                style={{
                                    height: `${window.innerWidth <= 336 ? progress - 20 + 'px' : progress + 'px'}`
                                }}
                            >

                            </motion.div>
                        }

                    </div>
                </div>
                <div className="our-advantages_footer">
                    <div
                        onClick={() => setIsModal(!isModal)}
                    >
                        <Btn type="primary">
                            Замовити безкоштовну консультацію
                        </Btn>
                    </div>
                </div>
            </div>
        </>

    );
};

export default OurAdvantages;
