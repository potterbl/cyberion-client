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

const FranchisePage = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {

        window.scrollTo({
            top: 0,
        })

        const body = document.querySelector('body')
        const html = document.querySelector('html')

        setTimeout(() => {
            setIsReady(true)
        }, 3000)


        body.style = 'overflow: hidden;';
        html.style = 'overflow: hidden;';

        if (document.readyState && isReady) {
            body.style = ''
            html.style = ''
            setIsLoaded(true)
        }
    }, [isReady]);


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
                <FranchiseCover isLoaded={isReady}/>
            </Container>
            <Container>
                    <VideoCarousel/>
                <Philosophy/>
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
