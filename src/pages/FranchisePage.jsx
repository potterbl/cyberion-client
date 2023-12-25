/* eslint-disable */
import React, {useEffect, useRef, useState} from 'react';

import Container from "../components/Container";

import '../styles/FranchisePage.css'

import FranchiseCover from "../components/FranchiseCover";
import VideoCarousel from "../components/VideoCarousel";
import Philosophy from "../components/Philosophy";
import WhyUs from "../components/WhyUs";
import Proposition from "../components/Proposition";
import CyberSport from "../components/CyberSport";
import Infrastructure from "../components/Infrastructure";
import NewFormat from "../components/NewFormat";
import YellowSection from "../components/YellowSection";
import OurExperience from "../components/OurExperience";
import {useDispatch} from "react-redux";
import {actions} from "../store/slices/blocks.slice";
import OurAdvantages from "../components/OurAdvantages";
import GetProposition from "../components/GetProposition";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";

import tournament from '../img/tournament.jpg'
import grid from '../img/grid.svg'
import ourExperience from '../img/OurExpirience.jpg'
import getProposition from '../img/getProposition.jpg'

import Callback from "../components/Callback";
import TrustUs from "../components/TrustUs";
import Reviews from "../components/Reviews";
import Rebrending from "../components/Rebrending";

const FranchisePage = () => {

    const [isLoaded, setIsLoaded] = useState()

    const dispatch = useDispatch()

    const [currentSection, setCurrentSection] = useState(-1)
    const [isWhyUsInView, setIsWhyUsInView] = useState(false)
    const [isPropositionInView, setIsPropositionInView] = useState(false)
    const [isCybersportInView, setIsCybersportInView] = useState(false)
    const [isInfrastructureInView, setIsInfrastructureInView] = useState(false)
    const [isNewFormatInView, setIsNewFormatInView] = useState(false)

    const sections = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ]

    const callbackFunctions = (setVisible) => (entries) => {
        const [ entry ] = entries
        setVisible(entry.isIntersecting)
    }

    const options = {
        root: null,
        threshold: 0.15
    }

    useEffect(() => {
        const whyUsObserver = new IntersectionObserver(callbackFunctions(setIsWhyUsInView), options)
        const propostitionObserver = new IntersectionObserver(callbackFunctions(setIsPropositionInView), options)
        const cybersportObserver = new IntersectionObserver(callbackFunctions(setIsCybersportInView), options)
        const infrastructureObserver = new IntersectionObserver(callbackFunctions(setIsInfrastructureInView), options)
        const newFormatObserver = new IntersectionObserver(callbackFunctions(setIsNewFormatInView), options)

        if(
            sections[0].current &&
            sections[1].current &&
            sections[2].current &&
            sections[3].current &&
            sections[4].current
        ){
            whyUsObserver.observe(sections[0].current)
            propostitionObserver.observe(sections[1].current)
            cybersportObserver.observe(sections[2].current)
            infrastructureObserver.observe(sections[3].current)
            newFormatObserver.observe(sections[4].current)
        }

        return () => {
            whyUsObserver.disconnect()
            propostitionObserver.disconnect()
            cybersportObserver.disconnect()
            infrastructureObserver.disconnect()
            newFormatObserver.disconnect()
        }
    }, [setIsWhyUsInView, setIsPropositionInView, setIsCybersportInView, setIsInfrastructureInView, setIsNewFormatInView, sections])

    useEffect(() => {
        const sectionsVisible = [
            isWhyUsInView,
            isPropositionInView,
            isCybersportInView,
            isInfrastructureInView,
            isNewFormatInView,
        ];

        dispatch(actions.setInView(
            isPropositionInView ||
            isCybersportInView ||
            isInfrastructureInView ||
            isNewFormatInView
        ))

        const currentVisibleSection = sectionsVisible.findIndex(
            (visible, index) => visible && index !== currentSection
        );

        if (currentSection !== currentVisibleSection && sections[currentVisibleSection]) {
            const targetSection = sections[currentVisibleSection].current;

            if (targetSection) {
                const start = window.scrollY;
                const end = Math.round(targetSection.getBoundingClientRect().top + start);
                const duration = 300;

                let startTime;

                function scrollToTop(timestamp) {
                    if (!startTime) {
                        startTime = timestamp;
                    }

                    const elapsed = timestamp - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const currentPosition = start + progress * (end - start);

                    window.scrollTo({
                        top: currentPosition,
                        behavior: 'auto',
                    });

                    if (progress < 1) {
                        requestAnimationFrame(scrollToTop);
                    } else {
                        setCurrentSection(currentVisibleSection);
                    }
                }

                requestAnimationFrame(scrollToTop);
            }
        }
    }, [
        isWhyUsInView,
        isPropositionInView,
        isCybersportInView,
        isInfrastructureInView,
        isNewFormatInView,
        currentSection,
    ]);

    useEffect(() => {
        if(sections[4].current && sections[0].current){
            const updateOffset = () => {
                dispatch(actions.setBlocksBottomOffset(sections[4].current.getBoundingClientRect().bottom + window.scrollY))
                dispatch(actions.setBlocksTopOffset(sections[0].current.getBoundingClientRect().top + window.scrollY))
            }
            updateOffset()

            window.addEventListener('scroll', updateOffset)

            return () => {
                window.removeEventListener('scroll', updateOffset)
            }
        }
    }, [sections[4], sections[0]])

    useEffect(() => {
        const body = document.querySelector('body')

        body.style = 'overflow: hidden;';

        if (document.readyState) {
            body.style = ''
            setIsLoaded(true)
        }
    }, []);

    return (
        <div className="franchise">
            {
                !isLoaded &&
                <Loader/>
            }
            <Header/>
            <Callback/>
            <Container custom={{backgroundImage: tournament, backgroundColor: 'rgba(14, 14, 14, 0.6)'}} type={"end"}>
                <FranchiseCover/>
            </Container>
            <Container>
                <VideoCarousel/>
                <Philosophy/>
            </Container>
            <Container custom={{backgroundImage: grid, backgroundColor: 'rgba(14, 14, 14, 0.6)'}} type={"center"}>
                <WhyUs ref={sections[0]}/>
                <Proposition ref={sections[1]}/>
                <CyberSport ref={sections[2]}/>
                <Infrastructure ref={sections[3]}/>
                <NewFormat ref={sections[4]}/>
            </Container>
            <Container>
                <YellowSection/>
            </Container>
            <Container custom={{backgroundImage: ourExperience, backgroundColor: 'rgba(14, 14, 14, 0.6)'}} type={"start"}>
                <OurExperience/>
            </Container>
            <Container>
                <OurAdvantages/>
                <TrustUs/>
                <Rebrending/>
                <Reviews/>
            </Container>
            <Container custom={{backgroundImage: getProposition, backgroundColor: 'rgba(14, 14, 14, 0.6)'}} type={"start"}>
                <GetProposition/>
            </Container>
            <Container>
                <Footer/>
            </Container>
        </div>
    );
};

export default FranchisePage;
