import React from 'react';

import './TestimonialPictures.scss';

const TestimonialPictures = () => {
    return (
        <div className='TestimonialPictures'>
            <img
                src='/images/Background/story-1.jpeg'
                alt='Couple with new house'
                className='TestimonialPictures__img--1'
            />
            <img
                src='/images/Background/story-2.jpeg'
                alt='New house'
                className='TestimonialPictures__img--2'
            />
        </div>
    );
};

export default TestimonialPictures;
