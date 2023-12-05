import React, {useEffect} from 'react';
import '../styles/Container.css'
import {useDispatch} from "react-redux";
import {actions} from "../store/slices/container.slice";

const Container = ({children}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        const updateSectionLeft = () => {
            if (window && window.innerWidth <= 768) {
                dispatch(actions.setOffsetLeft(80))
            } else if (window && window.innerWidth <= 1024) {
                dispatch(actions.setOffsetLeft(20))
            } else if (window && window.innerWidth <= 1200) {
                dispatch(actions.setOffsetLeft(72))
            } else {
                dispatch(actions.setOffsetLeft((window.innerWidth - 1200) / 2))
            }
        };

        updateSectionLeft();

        window.addEventListener('resize', updateSectionLeft)

        return () => {
            window.removeEventListener('resize', updateSectionLeft)
        }
        //eslint-disable-next-line
    }, []);

    return (
        <div className="container">
            {children}
        </div>
    );
};


export default Container;
