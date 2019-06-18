import React from 'react';

import './GallerySection.scss';

const pictures = [
    {
        name: 'gal-1.jpeg',
        alt: 'Gallery image 1'
    },
    {
        name: 'gal-2.jpeg',
        alt: 'Gallery image 2'
    },
    {
        name: 'gal-3.jpeg',
        alt: 'Gallery image 3'
    },
    {
        name: 'gal-4.jpeg',
        alt: 'Gallery image 4'
    },
    {
        name: 'gal-5.jpeg',
        alt: 'Gallery image 5'
    },
    {
        name: 'gal-6.jpeg',
        alt: 'Gallery image 6'
    },
    {
        name: 'gal-7.jpeg',
        alt: 'Gallery image 7'
    },
    {
        name: 'gal-8.jpeg',
        alt: 'Gallery image 8'
    },
    {
        name: 'gal-9.jpeg',
        alt: 'Gallery image 9'
    },
    {
        name: 'gal-10.jpeg',
        alt: 'Gallery image 10'
    },
    {
        name: 'gal-11.jpeg',
        alt: 'Gallery image 11'
    },
    {
        name: 'gal-12.jpeg',
        alt: 'Gallery image 12'
    },
    {
        name: 'gal-13.jpeg',
        alt: 'Gallery image 13'
    },
    {
        name: 'gal-14.jpeg',
        alt: 'Gallery image 14'
    }
];

const GallerySection = () => {
    return (
        <section className='Gallery'>
            {pictures.map((pic, index) => (
                <figure
                    className={'Gallery__item Gallery__item--' + (index + 1)}
                    key={index + 1}>
                    <img
                        src={`/images/Gallery/${pic.name}`}
                        alt={pic.alt}
                        className='Gallery__img'
                    />
                </figure>
            ))}
        </section>
    );
};

export default GallerySection;
