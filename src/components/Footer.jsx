import React, {useState} from 'react';

import '../styles/Footer.css'
import {useSelector} from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import Cookies from "js-cookie";

const Footer = () => {
    const {offsetLeft} = useSelector(state => state.container)

    const [email, setEmail] = useState('')

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
        if(email === ''){
            return
        }

        await axios
            .post('https://great-wasp-engaged.ngrok-free.app/mail', {
                name: "",
                phone: "",
                email: email,
                link: window.location.href,
                form: "Footer залишити заявку",
                subject: "Footer залишити заявку",
                time: "",
                campaign: splitedCookies[1],
                term: splitedCookies[3],
                source: splitedCookies[0],
                content: splitedCookies[2],
            })
            .then( () => {
                setEmail('')
                swal({
                    icon: "success",
                    title: "Ваша заявка була успішно надіслана!"
                })
            })
            .catch(err => {
                swal({
                    icon: "error",
                    title: "Сталася помилка, спробуйте ще раз або пізніше!"
                })
                console.log(err)
            })
    }

    return (
        <footer className="footer">
            <div className="footer-wrapper" style={{left: -offsetLeft + 'px'}}>

            </div>
            <div className="footer-body">
                <div className="footer-col">
                    <p className="body-text footer-header">
                        Наші соц. мережі
                    </p>
                    <a href="https://www.instagram.com/cyberion_ua/">
                        <p className="body-text">
                            Instagram
                        </p>
                    </a>
                    <a href="https://www.youtube.com/@cyberion_ukraine">
                        <p className="body-text">
                            YouTube
                        </p>
                    </a>
                    <a href="https://t.me/cyberion_ukraine">
                        <p className="body-text">
                            Telegram
                        </p>
                    </a>
                </div>
                <div className="footer-col">
                    <p className="body-text footer-header">
                        Співпраця
                    </p>
                        <p className="body-text">
                            Франшиза
                        </p>
                    <a href="https://cyberion.com.ua/partnership">
                        <p className="body-text">
                            Партнерство
                        </p>
                    </a>
                </div>
                <div className="footer-col">
                    <p className="body-text footer-header">
                        Карта сайту
                    </p>
                    <a href="https://cyberion.com.ua/news">
                        <p className="body-text">
                            Новини
                        </p>
                    </a>
                        <p className="body-text">
                            FAQ
                        </p>
                        <p className="body-text">
                            Правила
                        </p>
                    <a href="https://cyberion.com.ua/contacts">
                        <p className="body-text">
                            Клуби
                        </p>
                    </a>
                    <p className="body-text">
                        Франшиза
                    </p>
                </div>
                <div className="footer-col">
                    <p className="body-text footer-header">
                        Залишай заявку
                    </p>
                    <div className="footer-col_cols">
                        <input
                            type="text"
                            className="footer-input"
                            placeholder="Мій EMAIL"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            className="footer-button"
                            onClick={handleSend}
                        />
                    </div>
                </div>
            </div>
            <div className="footer-footer">
                <a href="https://cyberion.com.ua">
                    <svg viewBox="0 0 310 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer-logo">
                        <g clip-path="url(#clip0_193_81)">
                            <mask id="mask0_193_81" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="-1" y="0"
                                  width="311" height="65">
                                <path d="M-0.458984 0H310V64.0449H-0.458984V0Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_193_81)">
                                <path
                                    d="M279.922 9.73168C292.204 9.58672 302.32 19.2989 302.464 31.6204C302.609 43.9418 292.927 54.0889 280.644 54.2338C280.355 54.2338 280.211 54.2338 279.922 54.2338H216.196C203.913 54.6687 193.798 44.8115 193.653 32.4901C193.509 20.1687 203.19 10.0216 215.473 9.73168C215.762 9.73168 215.907 9.73168 216.196 9.73168H279.922ZM279.922 6.83252H216.196C202.323 6.97748 191.197 18.5741 191.341 32.4901C191.486 46.1162 202.468 57.133 216.196 57.4229H279.922C293.794 57.5678 305.21 46.551 305.499 32.4901C305.643 18.5741 294.661 7.12244 280.644 6.83252C280.5 6.83252 280.211 6.83252 279.922 6.83252Z"
                                    fill="#FFED00"/>
                                <path
                                    d="M271.686 15.3853H276.166V49.0155H271.975L249.577 23.068V48.8706H245.098V15.3853H248.999L271.542 41.4777L271.686 15.3853Z"
                                    fill="white"/>
                                <path
                                    d="M13.1701 41.3326C10.7136 39.0132 9.26855 35.6792 9.41305 32.2002C9.26855 28.7212 10.7136 25.3872 13.1701 23.0678C15.7712 20.6036 18.9503 19.4439 22.7073 19.4439C26.4644 19.4439 30.2215 20.6036 34.2676 22.7779V17.7044C29.9325 15.8199 26.0309 14.9502 22.5628 14.9502C17.5052 14.9502 13.1701 16.5447 9.70206 19.8788C6.23399 23.0678 4.35545 27.5615 4.49995 32.2002C4.49995 35.2443 5.22246 38.1435 6.812 40.7527C8.25703 43.362 10.4246 45.5363 13.0256 46.9859C15.6267 48.4355 18.8058 49.3053 22.5628 49.3053C26.7534 49.4502 30.944 48.4355 34.7011 46.4061V41.0426C30.7995 43.5069 26.8979 44.8116 22.7073 44.8116C18.9503 44.9565 15.7712 43.7968 13.1701 41.3326Z"
                                    fill="white"/>
                                <path
                                    d="M56.2315 26.9819L47.1278 15.3853H41.3477L53.7749 31.1857V49.0155H58.688V31.1857L71.1153 15.3853H65.1907L56.2315 26.9819Z"
                                    fill="white"/>
                                <path
                                    d="M93.0791 31.1857C96.5472 29.7361 98.1367 27.4168 98.1367 24.0827C98.2812 20.7487 96.4027 17.8495 93.3681 16.4C91.9231 15.6752 89.7556 15.3853 86.8655 15.3853H78.1953V49.0155H89.6111C91.7786 49.1605 93.9462 48.5807 95.9692 47.7109C97.5587 46.9861 98.8593 45.8265 99.8708 44.3769C100.738 43.0722 101.171 41.4777 101.171 39.7382C101.171 37.7088 100.449 35.6794 99.0038 34.0848C97.2697 32.6353 95.2467 31.6206 93.0791 31.1857ZM82.9639 19.589H87.1545C91.2006 19.589 93.3681 21.1836 93.3681 24.3727C93.3681 25.8222 92.7901 27.2718 91.7786 28.1416C90.7671 29.1563 88.8885 29.5911 86.2875 29.5911H83.1084V19.589H82.9639ZM95.2467 42.2025C94.6687 43.0722 93.9462 43.6521 92.9346 44.087C92.0676 44.5218 90.1891 44.6668 87.588 44.6668H82.8194V33.9399H87.299C89.7556 33.9399 91.4896 34.0848 92.5011 34.5197C93.5126 34.8096 94.3797 35.5344 95.1022 36.4042C95.6802 37.2739 95.9692 38.1437 95.9692 39.1584C96.1137 40.318 95.8247 41.3328 95.2467 42.2025Z"
                                    fill="white"/>
                                <path
                                    d="M114.466 34.2298H128.194V29.8811H114.466V19.589H128.772V15.3853H109.697V48.8706H129.205V44.6668H114.466V34.2298Z"
                                    fill="white"/>
                                <path
                                    d="M163.019 24.8075C163.019 17.8495 157.383 15.3853 150.592 15.3853H139.754V49.0155H144.667V34.8096H150.158L158.25 49.0155H163.308L154.782 34.2298C159.406 33.2151 163.019 30.026 163.019 24.8075ZM144.667 19.589H150.014C155.216 19.589 158.106 21.3285 158.106 24.8075C158.106 28.5764 155.216 30.4609 150.014 30.4609H144.667V19.589Z"
                                    fill="white"/>
                                <path d="M179.349 15.3853H174.58V49.0155H179.349V15.3853Z" fill="white"/>
                                <path
                                    d="M216.487 49.4502C225.984 49.4502 233.683 41.7271 233.683 32.2002C233.683 22.6733 225.984 14.9502 216.487 14.9502C206.99 14.9502 199.291 22.6733 199.291 32.2002C199.291 41.7271 206.99 49.4502 216.487 49.4502Z"
                                    fill="#FFED00"/>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_193_81">
                                <rect width="310" height="63" fill="white" transform="translate(0 0.321289)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </a>

            </div>
        </footer>
    );
};

export default Footer;
