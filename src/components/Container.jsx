import React, {useEffect, useRef, useState} from 'react';
import '../styles/Container.css'
import {useSelector} from "react-redux";
import {useScroll, useTransform, motion} from "framer-motion";

const Container = ({children, custom, type}) => {
    const {offsetLeft} = useSelector(state => state.container)
    const containerRef = useRef(null)

    const [offsetTop, setOffsetTop] = useState(0)
    const [offsetBottom, setOffsetBottom] = useState(0)

    const {scrollY} = useScroll()

    const opacity1 = useTransform(
        scrollY,
        [offsetTop - (window.innerHeight / 2), offsetTop + (window.innerHeight / 2)],
        ['0%', '100%'],
    );

    const opacity2 = useTransform(
        scrollY,
        [offsetBottom - window.innerHeight, offsetBottom],
        ['100%', '0%'],
    );

    useEffect(() => {
        if(containerRef.current && custom){
            const updateOffset = () => {
                const rect = containerRef.current.getBoundingClientRect()
                setOffsetTop(rect.top + window.scrollY)
                setOffsetBottom(rect.bottom + window.scrollY)
            }

            updateOffset()

            window.addEventListener('scroll', updateOffset)

            return () => {
                window.removeEventListener('scroll', updateOffset)
            }
        }
    }, [containerRef, custom])

    return (
        <div className="container" ref={containerRef}>
            {children}
            {
                custom &&
                <motion.div
                    className="container-suctom-bg"
                    style={{
                        left: `-${offsetLeft}px`,
                        opacity: type === "center" ?
                            opacity1.current === "100%" ? opacity2 : opacity1
                            : type === "end" ? opacity2
                                : type === "start" ?
                                    opacity1
                                    : 0
                        ,
                        backgroundImage: `url(${custom.backgroundImage})`
                    }}
                >
                    {
                        custom.backgroundColor &&
                        <div
                            className="container-suctom-bg_opacity"
                            style={{
                                backgroundColor: custom.backgroundColor
                            }}
                        >

                        </div>
                    }
                </motion.div>
            }
        </div>
    );
};


export default Container;
