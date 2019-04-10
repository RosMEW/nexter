import React from 'react';

import Button from '../../shared/Button/Button';
import './IntroductionBlock.scss';
import '../../style/typography.scss';

const IntroductionBlock = () => {
    return (
        <header className='Introduction'>
            <img
                src='./images/Logos/logo.png'
                alt='Logo-Nexter'
                className='Introduction__logo'
            />
            <h3 className='heading-3'>Your own home :</h3>
            <h1 className='heading-1'>The ultimate personal freedom</h1>
            <Button classes='Introduction__btn' text='View our properties' />
            <div className='Introduction__seenon-text'>Seen on</div>
            <div className='Introduction__seenon-logos'>
                <img src='./images/Logos/logo-bbc.png' alt='Logo-BBC' />
                <img src='./images/Logos/logo-forbes.png' alt='Logo-Forbes' />
                <img src='./images/Logos/logo-techcrunch.png' alt='Logo-TC' />
                <img src='./images/Logos/logo-bi.png' alt='Logo-BI' />
            </div>
        </header>
    );
};

export default IntroductionBlock;
