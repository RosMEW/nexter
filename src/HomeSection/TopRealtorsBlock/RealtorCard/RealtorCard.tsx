import React from 'react';

import { Realtor } from './Realtor.model';
import './RealtorCard.scss';
import '../../../style/typography.scss';

type RealtorCardProps = {
    realtors: Realtor[];
};

const RealtorCard = (props: RealtorCardProps) => {
    return (
        <React.Fragment>
            {props.realtors.map(realtor => (
                <React.Fragment key={realtor.id}>
                    <img
                        src={realtor.img}
                        alt={realtor.name.trim()}
                        className='Realtors-img'
                    />
                    <div className='Realtors-details'>
                        <h4 className='heading-4'>{realtor.name}</h4>
                        <p className='Realtors-sold'>
                            {realtor.sold} houses sold
                        </p>
                    </div>
                </React.Fragment>
            ))}
        </React.Fragment>
    );
};

export default RealtorCard;
