import React from 'react';
import Cookies from "js-cookie";

const ReadUtm = () => {
        let currentURL = window.location.href;

        const questionMarkIndex = currentURL.indexOf('?');

        if (questionMarkIndex !== -1) {
            currentURL = currentURL.substring(questionMarkIndex + 1);
        }

        const urlParams = new URLSearchParams(currentURL);

        let utmSource = urlParams.get("utm_source") || "";
        let utmCampaign = urlParams.get("utm_campaign") || "";
        let utmContent = urlParams.get("utm_content") || "";
        let utmTerm = urlParams.get("utm_term") || "";

        const createCookie = () => {
            let cookies = Cookies.get('_aaa_utmz')
            if (cookies) {
                cookies = cookies.split('|');
                if (utmSource === '') {
                    utmSource = cookies[0];
                }
                if (utmCampaign === '') {
                    utmCampaign = cookies[1];
                }
                if (utmContent === '') {
                    utmContent = cookies[2];
                }
                if (utmTerm === '') {
                    utmTerm = cookies[3];
                }
            }

            if (utmSource || utmCampaign || utmContent || utmTerm) {
                if (utmSource === undefined || utmSource === 'undefined' || utmSource === '') {
                    utmSource = 'null';
                }

                if (utmCampaign === undefined || utmCampaign === 'undefined' || utmCampaign === '') {
                    utmCampaign = 'null';
                }

                if (utmContent === undefined || utmContent === 'undefined' || utmContent === '') {
                    utmContent = 'null';
                }


                if (utmTerm === undefined || utmTerm === 'undefined' || utmTerm === '') {
                    utmTerm = 'null';
                }

                Cookies.set('_aaa_utmz', `${utmSource}|${utmCampaign}|${utmContent}|${utmTerm}`, {expires: 14})
            }
        }

        createCookie();
    return (
        <>
        </>
    );
};

export default ReadUtm;