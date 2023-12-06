import React, {useEffect, useRef, useState} from 'react';

import '../styles/Rebrending.css'
import {useScroll, useTransform, motion} from "framer-motion";
import {useSelector} from "react-redux";

import mainImg from '../img/cyber-2 (1).jpg'

import img0 from '../img/cyber-60.jpg'
import img3 from '../img/cyber-32.jpg'
import img2 from '../img/cyber-42.jpg'
import img1 from '../img/ciber-32.jpg'
import img4 from '../img/IMG_9827.jpg'
import img5 from '../img/IMG_9931.jpg'
import Btn from "./Btn";

const Rebrending = () => {
    const {offsetLeft} = useSelector(state => state.container)

    const bodyRef = useRef(null)

    const [top, setTop] = useState(0)
    const [bottom, setBottom] = useState(0)

    const {scrollY} = useScroll()

    useEffect(() => {
        if (bodyRef.current) {
            const callbackFunctions = (entries) => {
                const [entry] = entries;
                const newTop = entry.boundingClientRect.top + window.scrollY;
                const newBottom = entry.boundingClientRect.bottom + window.scrollY;

                setTop(newTop)
                setBottom(newBottom)
            };

            const observer = new IntersectionObserver(callbackFunctions, {
                threshold: [0, 0.25],
                root: null
            });

            observer.observe(bodyRef.current);

            return () => {
                observer.disconnect();
            };
        }
    }, [bodyRef, scrollY]);

    let scale = useTransform(scrollY, [top, bottom - window.innerHeight], [2, 1])
    let y = useTransform(scrollY, [top, bottom - window.innerHeight], ['50%', '0%'])

    return (
        <div className="rebrending" ref={bodyRef} style={
            {
                left: `-${offsetLeft}px`,
            }
        }>

            <motion.div
                className="rebrending-other"
                style={{
                    scale: scale,
                    y: y,
                    transition: {ease: "easeInOut", duration: 0.5}
                }}
            >
                <div className="rebrending-other_column" id="firstColumnRebrending">
                    <div style={{backgroundImage: `url("${img0}")`}} className="rebrending-other_column-img"></div>
                    <div style={{backgroundImage: `url("${img1}")`}} className="rebrending-other_column-img"></div>
                    <div style={{backgroundImage: `url("${img2}")`}} className="rebrending-other_column-img"></div>
                </div>
                <div className="rebrending-other_column" id="secondColumnRebrending">
                    <motion.div
                        className={`rebrending-main`}
                        style={{
                            backgroundImage: `url("${mainImg}")`
                        }}
                    >

                    </motion.div>
                    <h3 className="heading-smaller rebrending-other_column_text">
                        Є свій клуб? Зробіть
                        ребрендинг та
                        працюйте під
                        брендом <span className="span-yellow">CYBERION</span>
                    </h3>
                    <Btn type={"primary"}>
                        Дізнатись умови
                    </Btn>
                </div>
                <div className="rebrending-other_column" id="thirdColumnRebrending">
                    <div style={{backgroundImage: `url("${img3}")`}} className="rebrending-other_column-img"></div>
                    <div style={{backgroundImage: `url("${img4}")`}} className="rebrending-other_column-img"></div>
                    <div style={{backgroundImage: `url("${img5}")`}} className="rebrending-other_column-img"></div>
                </div>
            </motion.div>
        </div>
    );
};

export default Rebrending;
