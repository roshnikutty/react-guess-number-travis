import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessCounter from './guess-counter';

describe(`<GuessCounter />`, () => {

    it(`Should render without crashing`, () => {
        shallow(<GuessCounter />);
    });

    it(`Should respond to props and check classes`, () =>{
        const wrapper = mount(<GuessCounter counter={12}/>);
        expect(wrapper.props().counter).toEqual(12);
        wrapper.setProps({ counter: 11 });
        expect(wrapper.props().counter).toEqual(11);
        expect(wrapper.find('div.counterNumber')).toHaveLength(1);
    });
});