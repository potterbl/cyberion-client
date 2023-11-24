import React, {useEffect, useState} from 'react';

import '../styles/YellowSection.css'

const YellowSection = () => {
    const [sectionLeft, setSectionLeft] = useState(0)

    useEffect(() => {
        const updateSectionLeft = () => {
            if (window && window.innerWidth <= 1200) {
                setSectionLeft(72);
            } else {
                setSectionLeft((window.innerWidth - 1200) / 2);
            }
        };

        updateSectionLeft();
    }, []);
    console.log(sectionLeft)

    return (
        <div className="yellow-section">
            <div className="yellow-section_outer" style={{left: `-${sectionLeft}px`}}>
            </div>
            <div className="yellow-section_container">
                <p className="body-text-bigger black-font bold">
                    Інвестиції від
                    {
                        window.innerWidth < 1200 &&
                        <br/>
                    }
                    70 000 $
                </p>
            </div>
            <div className="yellow-section_container">
                <p className="body-text-bigger black-font bold">
                    Прибуток від
                    {
                        window.innerWidth < 1200 &&
                        <br/>
                    }
                    5 000 $
                </p>
            </div>
            <div className="yellow-section_container">
                <p className="body-text-bigger black-font bold">
                    Окупність від
                    {
                        window.innerWidth < 1200 &&
                        <br/>
                    }
                    14 місяців
                </p>
            </div>
        </div>
    );
};

export default YellowSection;
