import React from 'react';

import Button from '../../shared/Button/Button';
import { House } from './House.model';
import SvgIcon from '../../shared/SvgIcon';
import './HouseCard.scss';

type HouseCardProps = {
    house: House;
    onClick: () => void;
};

const HouseCard = (props: HouseCardProps) => {
    const { house, onClick } = props;

    return (
        <div className='House'>
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
                onClick={onClick}
            />
        </div>
    );
};

export default HouseCard;
