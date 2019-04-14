import React from 'react';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className='Footer'>
            <ul className='nav'>
                <li>
                    <a href='#' className='nav__link'>
                        Find your dream home
                    </a>
                </li>
                <li>
                    <a href='#' className='nav__link'>
                        Request proposal
                    </a>
                </li>
                <li>
                    <a href='#' className='nav__link'>
                        Download home planner
                    </a>
                </li>
                <li>
                    <a href='#' className='nav__link'>
                        Contact us
                    </a>
                </li>
                <li>
                    <a href='#' className='nav__link'>
                        Submit your property
                    </a>
                </li>
                <li>
                    <a href='#' className='nav__link'>
                        Come work with us!
                    </a>
                </li>
            </ul>
            <p className='copyright'>
                &copy; Copyright 2019. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit.
            </p>
        </footer>
    );
};

export default Footer;
