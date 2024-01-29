import React, {useEffect, useState} from 'react';

import Container from "../components/Container";

import '../styles/FranchisePage.css'

import FranchiseCover from "../components/FranchiseCover";
import Philosophy from "../components/Philosophy";
import WhyUs from "../components/WhyUs";
import Proposition from "../components/Proposition";
import CyberSport from "../components/CyberSport";
import Infrastructure from "../components/Infrastructure";
import YellowSection from "../components/YellowSection";
import OurExperience from "../components/OurExperience";
import OurAdvantages from "../components/OurAdvantages";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";

import tournament from '../img/R.webp'
import grid from '../img/grid.svg'
import ourExperience from '../img/OurExpirience.webp'
import getProposition from '../img/getProposition.webp'

import Callback from "../components/Callback";
import TrustUs from "../components/TrustUs";
import Reviews from "../components/Reviews";
import Rebrending from "../components/Rebrending";
import ReadUTM from "../components/ReadUTM";
import ArrowToTop from "../components/ArrowToTop";
import VideoCarousel from "../components/VideoCarousel";
import NewFormat from "../components/NewFormat";
import StatsAndMap from "../components/StatsAndMap";
import {actions} from "../store/slices/container.slice";
import {useDispatch, useSelector} from "react-redux";

const FranchisePage = () => {
    const dispatch = useDispatch()
    const {offsetLeft} = useSelector(state => state.container)

    useEffect(() => {
        const handleResize = () => {
            const newOffset = window && window.innerWidth <= 550 ? 20
                : window && window.innerWidth <= 768 ? 80
                    : window && window.innerWidth <= 1024 ? 20
                        : window && window.innerWidth <= 1200 ? 72
                            : (window.innerWidth - 1200) / 2;

            if (offsetLeft !== newOffset) {
                dispatch(actions.setOffsetLeft(newOffset));
            }

        };

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
        // eslint-disable-next-line
    }, [offsetLeft]);

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        let isReady = false;

        const body = document.querySelector('body');
        const html = document.querySelector('html');

        body.style.overflow = 'hidden';
        html.style.overflow = 'hidden';


        const handleReady = () => {
            if (isReady) {
                body.style.overflow = "";
                html.style.overflow = "";

                window.scrollTo({
                    top: 0,
                });

                setIsLoaded(true);
            }
        };

        const readyTimeout = setTimeout(() => {
            isReady = true;
            handleReady();
        }, 3000);

        document.addEventListener('readystatechange', handleReady);

        return () => {
            document.removeEventListener('readystatechange', handleReady);
            clearTimeout(readyTimeout);
        };
    }, []);


    return (
        <div className="franchise">
            {
                !isLoaded &&
                <Loader/>
            }
            <Header/>
            <ArrowToTop/>
            <Callback/>
            <Container custom={{backgroundImage: tournament, backgroundColor: 'rgba(14, 14, 14, 0.6)'}} type={"end"}>
                <FranchiseCover isLoaded={isLoaded}/>
            </Container>
            <Container>
                    <VideoCarousel/>
                <Philosophy offsetLeft={offsetLeft}/>
            </Container>
            <Container custom={{backgroundImage: grid, backgroundColor: 'rgba(14, 14, 14, 0.6)'}} type={"center"}>
                <WhyUs/>
                <Proposition/>
                <CyberSport/>
                <Infrastructure/>
                    <NewFormat/>
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
                <StatsAndMap/>
            </Container>
            <Container>
                <Footer/>
            </Container>
            <ReadUTM/>
        </div>
    );
};

export default FranchisePage;
