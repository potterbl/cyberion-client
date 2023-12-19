import React from 'react';

import '../styles/Modal.css'
import Input from "./Input";
import Btn from "./Btn";

const Modal = ({title, isActive, setIsActive}) => {
    return (
        <>
            {
                isActive
                &&
                <div className="modal">
                    <div className="modal-wrapper">
                        <div className="modal-inner">
                            <div className="modal-inner_header">
                                <p className="body-text-bigger">
                                    {title}
                                </p>
                                <button
                                    onClick={() => setIsActive(!isActive)}
                                >
                                    <svg width="24px">
                                        <line
                                            x1="0%" y1="0%"
                                            x2="100%" y2="100%"
                                            stroke="white" strokeWidth="4"
                                        />
                                        <line
                                            x1="100%" y1="0%"
                                            x2="0%" y2="100%"
                                            stroke="white" strokeWidth="4"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="modal-inner_body">
                                <Input>
                                    Ім'я
                                </Input>
                                <Input type="number">
                                    Номер телефону
                                </Input>
                                <Input>
                                    Email
                                </Input>
                                <Input type="time">
                                    Час для дзвінку
                                </Input>
                            </div>
                            <div className="modal-inner_footer">
                                <Btn
                                    type="primary"
                                >
                                    Надіслати
                                </Btn>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;
