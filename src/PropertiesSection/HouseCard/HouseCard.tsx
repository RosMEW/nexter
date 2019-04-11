import React from 'react';

import Button from '../../shared/Button/Button';
import { IHouseCard } from './HouseCard.model';
import SvgIcon from '../../shared/SvgIcon';
import './HouseCard.scss';

type HouseCardProps = {
    properties: IHouseCard[];
    onClick: () => void;
};

const HouseCard = (props: HouseCardProps) => {
    const houses = props.properties.map(house => (
        <div className='House' key={house.id}>
            <img
                src={`/images/Properties/${house.img}.jpeg`}
                alt={house.img}
                className='House__img'
            />
            <svg className='House__like'>
                <use xlinkHref='/images/sprite.svg#icon-heart-full' />
            </svg>
            <h5 className='House__name'>{house.name}</h5>
            <div className='House__location'>
                <SvgIcon icon='map-pin' />
                <p>{house.location}</p>
            </div>
            <div className='House__rooms'>
                <SvgIcon icon='profile-male' />
                <p>{house.rooms} rooms</p>
            </div>
            <div className='House__area'>
                <SvgIcon icon='expand' />
                <p>
                    {house.area} m<sup>2</sup>
                </p>
            </div>
            <div className='House__price'>
                <SvgIcon icon='key' />
                <p>{house.price}</p>
            </div>
            <Button
                text='Contact realtor'
                classes='House__btn'
                onClick={props.onClick}
            />
        </div>
    ));

    return <React.Fragment>{houses}</React.Fragment>;
};

export default HouseCard;
