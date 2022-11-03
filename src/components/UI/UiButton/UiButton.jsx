import React from 'react';
import s from './UiButton.module.css'
import PropTypes from "prop-types";

const UiButton = ({text, onClick, disabled}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={s.button}
        >
            {text}
        </button>
    );

    UiButton.propTypes  = {
        text:PropTypes.string
    }
};

export default UiButton;