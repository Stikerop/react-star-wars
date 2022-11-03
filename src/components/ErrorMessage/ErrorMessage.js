import React from 'react';

const ErrorMessage = () => {
    return (

            <p    width = "600px"
            margin ="auto"
            margin-top= "100px"
            line-height= "1.7"
            font-size= "var(--font-size-header)"
            color= "var(--color-yellow) "
            text-align ="center"
            text-shadow= "0  0 2px var(--color-white)
            -webkit-text-stroke-color: var(--color-yellow)
            -webkit-text-stroke-width: .5px;
            -webkit-text-fill-color: transparent"

            >
                The dark  side of the force has won. <br/>
                We cannot display. <br/>
                Come back when we fix everything.
            </p>

    );
};

export default ErrorMessage;