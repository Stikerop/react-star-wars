import React from 'react';
import img from './img/not-found.jpg'
import {useLocation} from "react-router";
import s from './NodeFoundPage.module.css'

const NodeFoundPage = () => {
    let location = useLocation();



    return (
        <>
            <img className={s.img} src={img} alt='Not Found' />
            <p className={s.text}>No match for <u>{location.pathname} </u> </p>
        </>
    );
};

export default NodeFoundPage;