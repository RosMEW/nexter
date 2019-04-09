import React from 'react';

import './Button.scss';

type ButtonProps = {
    text: string;
    buttonClass: string;
};

const Button = (props: ButtonProps) => {
    return (
        <button className={`btn btn__${props.buttonClass}`}>
            {props.text}
        </button>
    );
};

export default Button;
