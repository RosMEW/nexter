import React, { useState, useEffect } from 'react';

import Realtor from './Realtor/Realtor';
import './TopRealtorsBlock.scss';
import '../../style/typography.scss';
import { IRealtor } from './Realtor/Realtor.model';
import { realtorsData } from '../../shared/helpers';

const TopRealtorsBlock = () => {
    const [topRealtors, setTopRealtors] = useState([] as IRealtor[]);
    useEffect(() => setTopRealtors(realtorsData()), []);

    return (
        <div className='TopRealtors'>
            <h3 className='heading-3 mb-lg'>Top 3 Realtors</h3>
            <div className='TopRealtors__list'>
                <Realtor realtorsList={topRealtors} />
            </div>
        </div>
    );
};

export default TopRealtorsBlock;
