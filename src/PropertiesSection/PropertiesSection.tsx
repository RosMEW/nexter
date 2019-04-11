import React, { useState, useEffect } from 'react';

import './PropertiesSection.scss';
import HouseCard from './HouseCard/HouseCard';
import { IHouseCard } from './HouseCard/HouseCard.model';
import { propertiesData } from '../shared/helpers';
import RealtorModal from './RealtorModal/RealtorModal';

const PropertiesSection = () => {
    const [properties, setProperties] = useState([] as IHouseCard[]);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => setProperties(propertiesData()), []);

    const showRealtorModal = () => {
        setShowModal(true);
    };

    const hideRealtorModal = () => {
        setShowModal(false);
    };

    return (
        <React.Fragment>
            <section className='Properties'>
                <HouseCard properties={properties} onClick={showRealtorModal} />
            </section>
            {showModal ? <RealtorModal onClick={hideRealtorModal} /> : null}
        </React.Fragment>
    );
};

export default PropertiesSection;
