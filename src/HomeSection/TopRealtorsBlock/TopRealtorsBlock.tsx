import React, { useState, useEffect } from 'react';

import RealtorCard from './RealtorCard/RealtorCard';
import './TopRealtorsBlock.scss';
import '../../style/typography.scss';
import { Realtor } from './RealtorCard/Realtor.model';
import { getRealtors } from '../../shared/helpers';

const TopRealtorsBlock = () => {
    const [topRealtors, setTopRealtors] = useState([] as Realtor[]);
    useEffect(() => setTopRealtors(getRealtors()), []);

    return (
        <div className='TopRealtors'>
            <h3 className='heading-3 mb-lg'>Top 3 Realtors</h3>
            <div className='TopRealtors__list'>
                <RealtorCard realtors={topRealtors} />
            </div>
        </div>
    );
};

export default TopRealtorsBlock;
