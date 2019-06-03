import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import PropertiesSection from './PropertiesSection';

const setup = () => {
    cleanup();
    const wrapper = render(<PropertiesSection />);
    return {
        wrapper,
        houseCardButton: wrapper.container.getElementsByClassName(
            'House__btn'
        )[0],
        getBackdrop: () =>
            wrapper.container.getElementsByClassName('Backdrop')[0],
        getModal: () => wrapper.container.getElementsByClassName('Modal')[0]
    };
};

describe('<PropertiesSection />', () => {
    it('should not render RealtorModal by default', () => {
        const { getBackdrop, getModal } = setup();
        expect(getBackdrop()).toBeFalsy();
        expect(getModal()).toBeFalsy();
    });

    it('should render RealtorModal when click on HouseCard button', () => {
        const { houseCardButton, getBackdrop, getModal } = setup();
        fireEvent.click(houseCardButton);

        expect(getBackdrop()).toBeTruthy();
        expect(getModal()).toBeTruthy();
    });

    it('should hide RealtorModal when click on backdrop', async () => {
        const { houseCardButton, getBackdrop, getModal } = setup();
        fireEvent.click(houseCardButton);
        fireEvent.click(getBackdrop());

        await wait(200);
        expect(getBackdrop()).toBeFalsy();
        expect(getModal()).toBeFalsy();
    });

    it('should hide RealtorModal when click on modal', async () => {
        const { houseCardButton, getBackdrop, getModal } = setup();
        fireEvent.click(houseCardButton);
        fireEvent.click(getModal());

        await wait(200);
        expect(getBackdrop()).toBeFalsy();
        expect(getModal()).toBeFalsy();
    });
});

function wait(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
