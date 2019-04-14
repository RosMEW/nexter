import React from 'react';

import './Button.scss';

type ButtonProps = {
    text: string;
    classes?: string;
    onClick?: () => void;
    href?: string;
};

const Button = (props: ButtonProps) => {
    return (
        <a
            className={`btn ${props.classes}`}
            onClick={props.onClick}
            href={props.href}>
            {props.text}
        </a>
    );
};

export default Button;
