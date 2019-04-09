import React from 'react';

import { IRealtor } from './Realtor.model';
import './Realtor.scss';
import '../../../style/typography.scss';

type RealtorProps = {
    realtorsList: IRealtor[];
};

const Realtor = (props: RealtorProps) => {
    const realtors = props.realtorsList.map(realtor => (
        <React.Fragment key={realtor.name + Date.now()}>
            <img
                src={realtor.img}
                alt={realtor.name.trim()}
                className='Realtors-img'
            />
            <div className='Realtors-details'>
                <h4 className='heading-4'>{realtor.name}</h4>
                <p className='Realtors-sold'>{realtor.sold} houses sold</p>
            </div>
        </React.Fragment>
    ));

    return <React.Fragment>{realtors}</React.Fragment>;
};

export default Realtor;
