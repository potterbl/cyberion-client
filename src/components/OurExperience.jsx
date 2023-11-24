import React from 'react';

import '../styles/OurExperience.css'

import ourTeam1 from '../img/команда2 copy 3.png'
import ourTeam2 from '../img/команда2 copy 4.png'
import ourTeam3 from '../img/команда2 copy 5.png'
import ourTeam4 from '../img/команда2 copy 6.png'
import ourTeam5 from '../img/команда2 copy 7.png'
import ourTeam6 from '../img/команда2 copy 8.png'

const OurExperience = () => {
    return (
        <div className="our-experience">
            <div className="our-experience_head">
                <h3 className="heading-smaller">
                    НАША КОМАНДА МАЄ ВЕЛИКИЙ<br/>
                    ДОСВІД ВІДКРИТТЯ КІБЕР КЛУБІВ
                </h3>
                <div className="our-experience_head-container_right">
                    <p className="our-experience_nine span-yellow">
                        9
                    </p>
                    <div className="our-experience_head-container_right_inner">
                        <p className="body-text-bigger uppercase">
                            Клубів<br/>
                            відкрито
                        </p>
                        <p className="body-text span-yellow">
                            всі фінансово<br/>
                            успішні
                        </p>
                    </div>
                </div>
            </div>
            <div className="our-experience_body">
                <div className="our-experience_body-progressbar">
                    <div className="our-experience_body-progressbar_container">
                        <div className="our-experience_body-progressbar_circle"></div>
                        <p className="body-text bold">
                            2018-2020
                        </p>
                    </div>
                    <div className="our-experience_body-progressbar_container">
                        <div className="our-experience_body-progressbar_circle"></div>
                        <p className="body-text bold">
                            2021
                        </p>
                    </div>
                    <div className="our-experience_body-progressbar_container">
                        <div className="our-experience_body-progressbar_circle"></div>
                        <p className="body-text bold">
                            2022
                        </p>
                    </div>
                    <div className="our-experience_body-progressbar_container">
                        <div className="our-experience_body-progressbar_circle"></div>
                        <p className="body-text bold">
                            2023
                        </p>
                    </div>
                </div>
                <div className="our-experience_body-text">
                    <div className="our-experience_body-text_container">
                        <p className="body-text gray-text">
                            Збудували найбільшу мережу<br/>
                            кібер клубів України власноруч, 5<br/>
                            закладів відкриті та продовжують<br/>
                            успішно працювати навіть в<br/>
                            період пандемії та війни<br/>
                        </p>
                    </div>
                    <div className="our-experience_body-text_container">
                        <p className="body-text gray-text">
                            Опрацювання всього досвіду<br/>
                            ведення мережі та допущених<br/>
                            помилок, прийняття рішення про<br/>
                            створення Франшизи CYBERION,<br/>
                            розробка брендбуку та стандартів<br/>
                        </p>
                    </div>
                    <div className="our-experience_body-text_container">
                        <p className="body-text gray-text">
                            Відкриття трьох нових<br/>
                            кіберспортивних клубів<br/>
                            під брендом CYBERION!<br/>
                        </p>
                    </div>
                    <div className="our-experience_body-text_container">
                        <p className="body-text gray-text">
                            Відкриття нового клубу<br/>
                            під брендом CYBERION<br/>
                            в Києві на КПІ та<br/>
                            будівництво ще трьох<br/>
                            нових клубів<br/>
                        </p>
                    </div>
                </div>
            </div>
            <div className="our-experience_footer">
                <img src={ourTeam1} alt="our-team" className="our-experience_footer-image"/>
                <img src={ourTeam2} alt="our-team" className="our-experience_footer-image"/>
                <img src={ourTeam3} alt="our-team" className="our-experience_footer-image"/>
                <img src={ourTeam4} alt="our-team" className="our-experience_footer-image"/>
                <img src={ourTeam5} alt="our-team" className="our-experience_footer-image"/>
                <img src={ourTeam6} alt="our-team" className="our-experience_footer-image"/>
            </div>
        </div>
    );
};

export default OurExperience;
