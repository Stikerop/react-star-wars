import React from 'react';
import img from '../../static/not-found.jpg'
import {useLocation} from "react-router";
import s from './NodeFoundPage.module.css'

const NodeFoundPage = () => {
    let location = useLocation();



    return (
        <div>
            <img className={s.picture} src={img} alt='Not Found' />
            <p className={s.text}>No match for <u>{location.pathname} </u> </p>
        </div>
    );
};

export default NodeFoundPage;