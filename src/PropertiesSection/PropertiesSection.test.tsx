import React from 'react';
import {
    render,
    cleanup,
    fireEvent,
    RenderResult
} from 'react-testing-library';

import PropertiesSection from './PropertiesSection';

const setup = () => {
    cleanup();
    const wrapper = render(<PropertiesSection />);
    return { wrapper };
};

const openModal = (wrapper: RenderResult) => {
    const onClickHouseCardButton = wrapper.container.getElementsByClassName(
        'House__btn'
    )[0];
    fireEvent.click(onClickHouseCardButton);
};

describe('<PropertiesSection />', () => {
    const { wrapper } = setup();
    const backdrop = wrapper.container.getElementsByClassName('Backdrop');
    const modal = wrapper.container.getElementsByClassName('Modal');

    it('should not render RealtorModal by default', () => {
        expect(backdrop).toHaveLength(0);
        expect(modal).toHaveLength(0);
    });

    it('should render RealtorModal when click on HouseCard button', () => {
        openModal(wrapper);

        expect(backdrop).toHaveLength(1);
        expect(modal).toHaveLength(1);
    });

    it('should hide RealtorModal when click on backdrop', () => {
        const onClickBackdrop = wrapper.container.getElementsByClassName(
            'Backdrop'
        )[0];
        fireEvent.click(onClickBackdrop);

        expect(backdrop).toHaveLength(0);
        expect(modal).toHaveLength(0);
    });

    it('should hide RealtorModal when click on modal', () => {
        openModal(wrapper);

        const onClickModal = wrapper.container.getElementsByClassName(
            'Modal'
        )[0];
        fireEvent.click(onClickModal);

        expect(backdrop).toHaveLength(0);
        expect(modal).toHaveLength(0);
    });
});
