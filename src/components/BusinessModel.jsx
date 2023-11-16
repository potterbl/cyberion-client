import React from 'react';

import '../styles/BusinessModel.css'

import {motion} from "framer-motion";

const BusinessModel = () => {

    const variants = {
        hidden: {
            opacity: 0,
            x: 100
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1
            }
        },
        hiddenText: {
            y: 100,
            opacity: 0
        },
        visibleText: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1
            }
        }
    }

    return (
        <div
            className={"business-model"}
        >
            <div className="business-model_content">
                <motion.h3
                    variants={variants}
                    className="business-model_content-head heading-smaller"
                    initial="hidden"
                    whileInView="visible"
                >
                        <span className="span-yellow">
                            Готова бізнес-модель та<br/>
                            стандарти роботи для вашого<br/>
                            розвитку<br/>
                        </span>
                </motion.h3>
                <motion.p
                    className="body-text"
                    initial="hiddenText"
                    whileInView="visibleText"
                    variants={variants}
                >
                    Дивись відео про секрет нашої франшизи. Чи можливо<br/>
                    заробити <b>400 000 гривень</b> на місяць у комп'ютерному<br/>
                    клубі?<br/>
                    Приготуйтеся до шокуючих фактів.<br/>
                </motion.p>
            </div>
        </div>
    );
};

export default BusinessModel;
