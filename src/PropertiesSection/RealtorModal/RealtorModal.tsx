import React from 'react';

import './RealtorModal.scss';

type RealtorModalProps = {
    onClick: () => void;
};

const RealtorModal = (props: RealtorModalProps) => {
    return (
        <React.Fragment>
            <div className='Backdrop' onClick={props.onClick} />
            <div className='Modal' onClick={props.onClick}>
                <img
                    src='./images/Realtors/realtor-2.jpeg'
                    alt='Kim_Brown'
                    className='Modal__img'
                />
                <div className='Modal__info'>
                    <div className='heading-3 Modal__name'>Kim Brown</div>
                    <div className='Modal__title mb-md'>Real Estate Agent</div>
                    <div className='Modal__tel'>514 - XXX XXXX</div>
                    <div className='Modal__email'>kimbrown@email.com</div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default RealtorModal;
