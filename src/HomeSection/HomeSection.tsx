import React from 'react';

import IntroductionBlock from './IntroductionBlock/IntroductionBlock';
import TopRealtorsBlock from './TopRealtorsBlock/TopRealtorsBlock';

const HomeSection = () => {
    return (
        <React.Fragment>
            <IntroductionBlock />
            <TopRealtorsBlock />
        </React.Fragment>
    );
};

export default HomeSection;
