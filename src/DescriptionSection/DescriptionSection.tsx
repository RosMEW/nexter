import React, { useState, useEffect } from 'react';

import './DescriptionSection.scss';
import '../style/typography.scss';
import { Quality } from './Quality.model';
import SvgIcon from '../shared/SvgIcon';

const qualitiesData = [
    {
        icon: 'global',
        id: `${Date.now()}_global`,
        heading: "World's best luxury homes",
        text:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.'
    },
    {
        icon: 'trophy',
        id: `${Date.now()}_trophy`,
        heading: 'Only the best properties',
        text:
            'Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.'
    },
    {
        icon: 'map-pin',
        id: `${Date.now()}_map-pin`,
        heading: 'All homes in in top locations',
        text:
            'Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.'
    },
    {
        icon: 'key',
        id: `${Date.now()}_key`,
        heading: 'New home in one week',
        text:
            'Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        icon: 'presentation',
        id: `${Date.now()}_presentation`,
        heading: 'Top 1% realtors',
        text:
            'Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.'
    },
    {
        icon: 'lock',
        id: `${Date.now()}_lock`,
        heading: 'Secure payments on nexter',
        text:
            'Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.'
    }
];

const DescriptionSection = () => {
    const [qualities, setqualities] = useState([] as Quality[]);
    useEffect(() => setqualities(qualitiesData), []);

    const qualitiesList = qualities.map(quality => (
        <div className='Quality' key={quality.id}>
            <SvgIcon icon={quality.icon} classes='Quality__icon' />
            <h4 className='heading-4 heading-4--dark'>{quality.heading}</h4>
            <p className='Quality__text'>{quality.text}</p>
        </div>
    ));

    return <section className='Description'>{qualitiesList}</section>;
};

export default DescriptionSection;
