import React from 'react';

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
import VideosSection from "../components/VideosSection";

const FranchisePage = () => {
    return (
        <div className="franchise">
            <Container>
                <FranchiseCover/>
                <VideoCarousel/>
                <Philosophy/>
                <WhyUs/>
                <Proposition/>
                <CyberSport/>
                <Infrastructure/>
                <NewFormat/>
                <YellowSection/>
                <OurExperience/>
                <VideosSection/>
            </Container>
        </div>
    );
};

export default FranchisePage;
