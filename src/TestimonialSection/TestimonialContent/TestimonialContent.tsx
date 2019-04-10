import React from 'react';

import './TestimonialContent.scss';
import '../../style/typography.scss';
import Button from '../../shared/Button/Button';

const TestimonialContent = () => {
    return (
        <div className='TestimonialContent'>
            <h3 className='heading-3 mb-sm'>Happy Customers</h3>
            <h2 className='heading-2 heading-2--dark mb-md'>
                &ldquo;The best decision of our lives&rdquo;
            </h2>
            <p className='TestimonialContent__text mb-lg'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem
                consequatur harum volupta!
            </p>
            <Button
                text='Find your own home'
                buttonClass='TestimonialContent'
            />
        </div>
    );
};

export default TestimonialContent;
