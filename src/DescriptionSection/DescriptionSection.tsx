import React, { useState, useEffect } from 'react';

import './DescriptionSection.scss';
import '../style/typography.scss';
import { qualitiesData } from '../shared/helpers';
import { IQuality } from './Quality.model';

const DescriptionSection = () => {
    const [qualities, setqualities] = useState([] as IQuality[]);
    useEffect(() => setqualities(qualitiesData()), []);

    const qualitiesList = qualities.map(quality => (
        <div className='Quality' key={quality.id}>
            <svg className='Quality__icon'>
                <use xlinkHref={`/images/sprite.svg#icon-${quality.icon}`} />
            </svg>
            <h4 className='heading-4 heading-4--dark'>{quality.heading}</h4>
            <p className='Quality__text'>{quality.text}</p>
        </div>
    ));

    return <section className='Description'>{qualitiesList}</section>;
};

export default DescriptionSection;
