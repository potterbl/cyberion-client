import React from 'react';

import Container from "../components/Container";

import '../styles/FranchisePage.css'
import FranchiseCover from "../components/FranchiseCover";
import BusinessModel from "../components/BusinessModel";
import Philosophy from "../components/Philosophy";
import WhyUs from "../components/WhyUs";

const FranchisePage = () => {
    return (
        <Container>
            <div className="franchise">
                <FranchiseCover/>
                <BusinessModel/>
                <Philosophy/>
                <WhyUs/>
            </div>
        </Container>
    );
};

export default FranchisePage;
