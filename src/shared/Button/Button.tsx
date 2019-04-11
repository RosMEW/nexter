import React from 'react';

import './Button.scss';

type ButtonProps = {
    text: string;
    classes?: string;
    onClick?: () => void;
};

const Button = (props: ButtonProps) => {
    return (
        <button className={`btn ${props.classes}`} onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default Button;
