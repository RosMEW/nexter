import React, { useState, useEffect } from 'react';

import './PropertiesSection.scss';
import HouseCard from './HouseCard/HouseCard';
import { IHouseCard } from './HouseCard/HouseCard.model';
import { propertiesData } from '../shared/helpers';

const PropertiesSection = () => {
    const [properties, setProperties] = useState([] as IHouseCard[]);
    useEffect(() => setProperties(propertiesData()), []);

    return (
        <section className='Properties'>
            <HouseCard properties={properties} />
        </section>
    );
};

export default PropertiesSection;
