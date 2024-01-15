/* eslint-disable */
import React, {useEffect, useState} from 'react';

import '../styles/Modal.css'
import Input from "./Input";
import Btn from "./Btn";

import Cookies from 'js-cookie'
import axios from "axios";

import swal from 'sweetalert'

const Modal = ({title, isActive, setIsActive}) => {
    const [problemMessage, setProblemMessage] = useState('')

    const [name, setName] = useState('')
    const [number, setNumber ] = useState('')
    const [email, setEmail ] = useState('')
    const [time, setTime ] = useState('')

    const cookies = Cookies.get('_aaa_utmz')
    let splitedCookies;

    if(cookies !== undefined){
        splitedCookies = cookies.split('|')
    } else {
        splitedCookies = []
        splitedCookies[0] = ""
        splitedCookies[1] = ""
        splitedCookies[2] = ""
        splitedCookies[3] = ""
    }

    const handleSend = async () => {
        if(name === "" || number === ''  || email === '' || time === ''){
            return setProblemMessage('Усі поля мають бути заповнені!')
        }

        await axios
            .post('https://ea2d-195-189-226-219.ngrok-free.app/common/send', {
                name: name,
                phone: number,
                email: email,
                time: time,
                link: window.location.href,
                campaign: splitedCookies[1],
                term: splitedCookies[3],
                source: splitedCookies[0],
                content: splitedCookies[2],
                form: title,
                subject: title
            })
            .then(res => {
                setIsActive(false)
                swal({
                    icon: "success",
                    title: "Ваша заявка була успішно надіслана!"
                })
            })
            .catch(err => {
                setIsActive(false)
                swal({
                    icon: "error",
                    title: "Сталася помилка, спробуйте ще раз або пізніше!"
                })
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
                                <p className="body-text-bigger bold">
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
                                {
                                    problemMessage !== '' &&
                                    <p className="body-text modal-inner_footer-error">{problemMessage}</p>
                                }
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
