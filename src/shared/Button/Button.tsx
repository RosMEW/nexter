import React from 'react';

import './Button.scss';

type ButtonProps = {
    text: string;
    classes?: string;
};

const Button = (props: ButtonProps) => {
    return <button className={`btn ${props.classes}`}>{props.text}</button>;
};

export default Button;
