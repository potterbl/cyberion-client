import React from 'react';

import '../styles/Modal.css'
import Input from "./Input";

const Modal = () => {
    return (
        <div className="modal">
            <div className="modal-wrapper">
                <div className="modal-inner">
                    <Input>
                        Ім'я
                    </Input>
                    <Input>
                        Номер телефону
                    </Input>
                    <Input>
                        Email
                    </Input>
                    <Input type="time">
                        Час для дзвінку
                    </Input>
                </div>
            </div>
        </div>
    );
};

export default Modal;