import React, { useState, useEffect } from 'react';

import './PropertiesSection.scss';
import HouseCard from './HouseCard/HouseCard';
import { House } from './HouseCard/House.model';
import { getProperties } from '../shared/helpers';
import RealtorModal from './RealtorModal/RealtorModal';

const PropertiesSection = () => {
    const [properties, setProperties] = useState([] as House[]);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => setProperties(getProperties()), []);

    const showRealtorModal = () => {
        setShowModal(true);
    };

    const hideRealtorModal = () => {
        setShowModal(false);
    };

    return (
        <React.Fragment>
            <section className='Properties' id='properties-section'>
                <HouseCard properties={properties} onClick={showRealtorModal} />
            </section>
            {showModal ? <RealtorModal onClick={hideRealtorModal} /> : null}
        </React.Fragment>
    );
};

export default PropertiesSection;
