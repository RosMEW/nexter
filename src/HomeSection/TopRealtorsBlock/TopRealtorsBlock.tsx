import React, { useState } from 'react';

import RealtorCard from './RealtorCard/RealtorCard';
import { getRealtors } from '../../shared/helpers';
import './TopRealtorsBlock.scss';
import '../../style/typography.scss';

const TopRealtorsBlock = () => {
    const [topRealtors] = useState(getRealtors());

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
