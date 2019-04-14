import React from 'react';

import HomeSection from './HomeSection/HomeSection';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import TestimonialSection from './TestimonialSection/TestimonialSection';
import PropertiesSection from './PropertiesSection/PropertiesSection';
import GallerySection from './GallerySection/GallerySection';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import './App.scss';

const App = () => {
    return (
        <div className='Container'>
            <Sidebar />
            <HomeSection />
            <DescriptionSection />
            <TestimonialSection />
            <PropertiesSection />
            <GallerySection />
            <Footer />
        </div>
    );
};

export default App;
