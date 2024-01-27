import React, {useEffect, useRef, useState} from 'react';

import '../styles/StatsAndMap.css'
import {Loader} from "@googlemaps/js-api-loader";

import marker from '../img/marker.svg'
import markerDisabled from '../img/marker_disabled.svg'
import {useInView} from "framer-motion";

const center = {
    lat: 49.171923,
    lng: 32.020557,
}

const markers = [
    {
        lat: 50.45534352633145,
        lng: 30.502216067808153,
        title: "CYBERION Оbservatorna",
        icon: marker,
        description: "вулиця Обсерваторна, 12A, Київ, 02000"
    },
    {
        lat: 50.38666303055694,
        lng: 30.46787892883679,
        title: "CYBERION Likohrad",
        icon: marker,
        description: "вулиця Юлії Здановської, 46/1, Київ, 02000"
    },
    {
        lat: 50.40604586454374,
        lng: 30.609171484324463,
        title: "CYBERION RiverMall",
        icon: marker,
        description: "Дніпровська набережна, 12, Київ, 02081"
    },
    {
        lat: 50.45787860784336,
        lng: 30.612743991269685,
        title: "CYBERION Darnytsia",
        icon: marker,
        description: "вулиця Андрія Малишка, 5, Київ, 02000"
    },
    {
        lat: 50.45042726829859,
        lng: 30.46836280514628,
        title: "CYBERION Polytech",
        icon: marker,
        description: "Берестейський проспект, 31, Київ, 02000"
    },



    {
        lat: 50.50307296692755,
        lng: 30.421776089916193,
        title: "CYBERION Vinogradar",
        icon: markerDisabled,
        description: "вул. Родини Крістерів, Київ, 02000"
    },
    {
        lat: 49.44447303641288,
        lng: 32.061566361970556,
        title: "CYBERION Cherkasy-Central",
        icon: markerDisabled,
        description: "вулиця Лазарєва, 6, Черкаси, Черкаська область, 18000"
    },
    {
        lat: 49.84052337629803,
        lng: 24.024178213483165,
        title: "CYBERION Lviv",
        icon: markerDisabled,
        description: "вулиця Січових Стрільців, 10, Львів, Львівська область, 79000"
    },
    {
        lat: 50.46618123292347,
        lng: 30.5118300782076,
        title: "CYBERION Podil",
        icon: markerDisabled,
        description: "вулиця Нижній Вал, 23, Київ, 02000"
    },
    {
        lat: 48.45324774658392,
        lng: 35.064333071611564,
        title: "CYBERION Nagorka",
        icon: markerDisabled,
        description: "проспект Гагаріна, 3, Дніпро, Дніпропетровська область, 49000"
    },
    {
        lat: 50.5194662245259,
        lng: 30.608157906746115,
        title: "CYBERION Troya",
        icon: markerDisabled,
        description: "вул. Оноре де Бальзака, 66, Київ, 02232"
    },
    {
        lat: 48.429864797434334,
        lng: 35.010671835582464,
        title: "CYBERION Titova",
        icon: markerDisabled,
        description: "вулиця Титова, 11, Дніпро, Дніпропетровська область, 49000"
    },
    {
        lat: 50.5178266018977,
        lng: 30.779282935582035,
        title: "CYBERION Brovary",
        icon: markerDisabled,
        description: "вулиця Соборна, 21, Бровари, Київська обл., 07402"
    },
];

const StatsAndMap = () => {
    // eslint-disable-next-line
    const [map, setMap] = useState(null)
    const mapRef = useRef(null)

    const [clubsCount, setClubsCount] = useState(0)
    const [buildingCount, setBuildingCount] = useState(0)
    const [usersCount, setUsersCount] = useState(0)
    const [giftsCount, setGiftsCount] = useState(0)
    const [computersCount, setComputersCount] = useState(0)

    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        if (!mapRef.current) return;
        const loader = new Loader({
            apiKey: "AIzaSyDAs1eT7QSsYKtntVD3uPWUNIkKfQvfAIs",
            language: "uk",
        })
        loader.load().then(function (google) {
            const map = new google.maps.Map(mapRef.current, {
                mapId: "d6fbbac220d8c0ea",
                center: center,
                zoom: window.innerWidth > 810 ? 6 : window.innerWidth > 400 ? 5 : 4,
                mapTypeControl: false,
            });

            const infoWindow = new google.maps.InfoWindow();

            markers.forEach(markerData => {
                const marker = new google.maps.Marker({
                    position: {
                        lat: markerData.lat,
                        lng: markerData.lng,
                    },
                    map: map,
                    title: markerData.title,
                    icon: {
                        url: markerData.icon,
                        scaledSize: new google.maps.Size(50, 50)
                    },
                });

                marker.addListener('click', () => {
                    const content = `<div style="color: black">${markerData.description}</div>`;
                    infoWindow.setContent(content);
                    infoWindow.open(map, marker);
                });
            });

            setMap(map);
        });
    }, [mapRef]);

    const incrementState = (state, setState, limit, seconds) => {
        const steps = limit - state;
        const interval = steps / (seconds * 100);

        let currentState = state;

        const incrementWithInterval = setInterval(() => {
            if (currentState < limit) {
                currentState += interval;
                setState(currentState);
            } else if (currentState >= limit) {
                clearInterval(incrementWithInterval);
                setState(limit);
            }
        }, 10);

        return incrementWithInterval;
    };

    useEffect(() => {
        if (isInView) {
            const intervalIds = [
                incrementState(clubsCount, setClubsCount, 13, 1.4),
                incrementState(buildingCount, setBuildingCount, 10, 1.4),
                incrementState(usersCount, setUsersCount, 1000, 1.4),
                incrementState(giftsCount, setGiftsCount, 10000, 1.4),
                incrementState(computersCount, setComputersCount, 1000, 1.4)
            ];

            return () => {
                intervalIds.forEach(clearInterval);
            };
        } else {
            setClubsCount(0);
            setBuildingCount(0);
            setUsersCount(0);
            setGiftsCount(0);
            setComputersCount(0);
        }
        //eslint-disable-next-line
    }, [isInView]);


    return (
        <div className="statsAndMap">
            <div className="stats" ref={ref}>
                <div className="stats_top">
                    <div className="stats_item">
                        <h2 className={window.innerWidth > 1200 ? 'heading' : window.innerWidth > 440 ? 'heading-smaller' : "body-text-bigger"}>Відкрито<br/>
                            <span className={`span-yellow ${window.innerWidth > 1200 ? "title" : window.innerWidth > 440 ? "heading" : "heading-smaller"}`}>{clubsCount.toFixed(0)}</span><br/>
                            Клубів</h2>
                    </div>
                    <div className="stats_item">
                        <h2 className={window.innerWidth > 1200 ? 'heading' : window.innerWidth > 440 ? 'heading-smaller' : "body-text-bigger"}>Будується<br/>
                            <span className={`span-yellow ${window.innerWidth > 1200 ? "title" : window.innerWidth > 440 ? "heading" : "heading-smaller"}`}>{buildingCount.toFixed(0)}</span><br/>
                            Клубів</h2>
                    </div>
                </div>
                <div className="stats_bottom">
                    <div className="stats_item">
                        <h2 className={window.innerWidth > 1200 ? "heading-smaller" : window.innerWidth > 440 ? "body-text-bigger" : "body-text"}>Нам довіряють<br/>
                            <span className={`span-yellow ${window.innerWidth > 1200 ? 'heading' : window.innerWidth > 440 ? 'heading-smaller' : "body-text-bigger"}`}>{usersCount.toFixed(0)}</span><br/>
                            Користувачів</h2>
                    </div>
                    <div className="stats_item">
                        <h2 className={window.innerWidth > 1200 ? "heading-smaller" : window.innerWidth > 440 ? "body-text-bigger" : "body-text"}>Розіграли понад<br/>
                            <span className={`span-yellow ${window.innerWidth > 1200 ? 'heading' : window.innerWidth > 440 ? 'heading-smaller' : "body-text-bigger"}`}>{giftsCount.toFixed(0)}</span><br/>
                            Грн у власних турнірах</h2>
                    </div>
                    <div className="stats_item">
                        <h2 className={window.innerWidth > 1200 ? "heading-smaller" : window.innerWidth > 440 ? "body-text-bigger" : "body-text"}>Кількість ПК<br/>
                            <span className={`span-yellow ${window.innerWidth > 1200 ? 'heading' : window.innerWidth > 440 ? 'heading-smaller' : "body-text-bigger"}`}>{computersCount.toFixed(0)}</span><br/>
                            у мережі</h2>
                    </div>
                </div>
            </div>
            <div ref={mapRef} className="map">

            </div>
        </div>
    );
};

export default StatsAndMap;
