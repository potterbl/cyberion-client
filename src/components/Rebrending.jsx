import React, {useState} from 'react';

import '../styles/Rebrending.css'
import {useSelector} from "react-redux";

import rebrending1 from '../img/rebrending_1.png'
import rebrending2 from '../img/rebrending_2.png'
import Modal from "./Modal";

const Rebrending = () => {
    const [isModal, setIsModal] = useState(false)

    const {offsetLeft} = useSelector(state => state.container)
    return (
        <>
            <Modal title="Фінансова модель для ребрендингу" isActive={isModal} setIsActive={setIsModal}/>

            <div className="rebrending">
                <div className="rebrending-wrapper" style={{left: -offsetLeft + 'px'}}>

                </div>

                <div className="rebrending-left">
                    <div className="rebrending-left_head">
                        <h3 className="heading-smaller black-font">
                            Є свій клуб? Зробіть
                            {
                                window.innerWidth > 790 ?
                                    <br/>
                                    : ' '
                            }
                            ребрендинг та
                            {
                                window.innerWidth > 790 ?
                                    <br/>
                                    : ' '
                            }
                            працюйте під
                            {
                                window.innerWidth > 790 ?
                                    <br/>
                                    : ' '
                            }
                            брендом CYBERION
                            {
                                window.innerWidth > 790 ?
                                    <br/>
                                    : ' '
                            }
                        </h3>
                    </div>
                    <div className="rebrending-left_body">
                        <p className="body-text black-font">
                            Якщо у вас вже є свій кіберклуб, але ви не
                            {
                                window.innerWidth > 790 ?
                                    <br/>
                                    : ' '
                            }
                            задоволені результами або просто не вистачає
                            {
                                window.innerWidth > 790 ?
                                    <br/>
                                    : ' '
                            }
                            досвіду, ми пропонуємо доєднатися до нашої
                            {
                                window.innerWidth > 790 ?
                                    <br/>
                                    : ' '
                            }
                            мережі клубів та зростати разом
                        </p>
                        <button
                            onClick={() => setIsModal(!isModal)}
                            className="body-text-bigger bold black-font"
                            style={{width: "max-content"}}
                        >
                                Дізнатись умови ➜
                        </button>
                    </div>
                </div>
                <div className="rebrending-right">
                    <img src={rebrending1} alt="" className="rebrending-right_first"/>
                    <img src={rebrending2} alt="" className="rebrending-right_last"/>
                </div>
            </div>
        </>

    );
};

export default Rebrending;
