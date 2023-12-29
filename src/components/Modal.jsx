/* eslint-disable */
import React, {useState} from 'react';

import '../styles/Modal.css'
import Input from "./Input";
import Btn from "./Btn";

import Cookies from 'js-cookie'
import axios from "axios";

const Modal = ({title, isActive, setIsActive}) => {
    const [name, setName] = useState('')
    const [number, setNumber ] = useState('')
    const [email, setEmail ] = useState('')
    const [time, setTime ] = useState('')

    const cookies = Cookies.get('_aaa_utmz')
    let splitedCookies;

    if(cookies !== undefined){
        splitedCookies = cookies.split('|')
    }

    const handleSend = async () => {
        if(name === "" || number === ''  || email === '' || time === ''){
            return
        }

        await axios
            .post('https://1cd5-34-172-33-18.ngrok-free.app/mail', {
                name: name,
                phone: number,
                email: email,
                link: window.location.href,
                form: title,
                subject: title
            })
            .then(res => {
                setIsActive(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

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
                                <Input setParental={setName}>
                                    Ім'я
                                </Input>
                                <Input type="number" setParental={setNumber}>
                                    Номер телефону
                                </Input>
                                <Input setParental={setEmail}>
                                    Email
                                </Input>
                                <Input type="time" setParental={setTime}>
                                    Час для дзвінку
                                </Input>
                            </div>
                            <div className="modal-inner_footer">
                                <div
                                    onClick={handleSend}
                                >
                                    <Btn
                                        type="primary"
                                    >
                                        Надіслати
                                    </Btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;
