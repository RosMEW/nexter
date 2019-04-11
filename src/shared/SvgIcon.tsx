import React from 'react';

type SvgIconProps = {
    icon: string;
    classes?: string;
};

const SvgIcon = (props: SvgIconProps) => {
    return (
        <svg className={props.classes}>
            <use xlinkHref={`/images/sprite.svg#icon-${props.icon}`} />
        </svg>
    );
};

export default SvgIcon;
