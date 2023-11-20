import React from 'react';

import Container from "../components/Container";

import '../styles/FranchisePage.css'
import FranchiseCover from "../components/FranchiseCover";
import BusinessModel from "../components/BusinessModel";
import Philosophy from "../components/Philosophy";
import WhyUs from "../components/WhyUs";
import Proposition from "../components/Proposition";
import CyberSport from "../components/CyberSport";
import Infrastructure from "../components/Infrastructure";

const FranchisePage = () => {
    return (
        <Container>
            <div className="franchise">
                <FranchiseCover/>
                <BusinessModel/>
                <Philosophy/>
                <WhyUs/>
                <Proposition/>
                <CyberSport/>
                <Infrastructure/>
            </div>
        </Container>
    );
};

export default FranchisePage;
