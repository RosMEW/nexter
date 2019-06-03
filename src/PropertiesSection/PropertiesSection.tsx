import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './PropertiesSection.scss';
import HouseCard from './HouseCard/HouseCard';
import { getProperties } from '../shared/helpers';
import RealtorModal from './RealtorModal/RealtorModal';

const PropertiesSection = () => {
    const [properties] = useState(getProperties());
    const [showModal, setShowModal] = useState(false);

    const showRealtorModal = () => {
        setShowModal(true);
    };

    const hideRealtorModal = () => {
        setShowModal(false);
    };

    return (
        <React.Fragment>
            <section className='Properties' id='properties-section'>
                {properties.map(house => (
                    <HouseCard
                        house={house}
                        onClick={showRealtorModal}
                        key={house.id}
                    />
                ))}
            </section>
            <CSSTransition
                in={showModal}
                timeout={200}
                unmountOnExit
                mountOnEnter
                classNames='RealtorModal'>
                <RealtorModal onClick={hideRealtorModal} />
            </CSSTransition>
        </React.Fragment>
    );
};

export default PropertiesSection;
