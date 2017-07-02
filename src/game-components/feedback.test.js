import React from 'react';
import { shallow, mount } from 'enzyme';
import Feedback from './feedback';

describe(`<Feedback />`, () => {
    it(`Renders without crashing`, ()=>{
        shallow(<Feedback />);
    });

    it(`Should respond to props`, () =>{
        const wrapper = mount(<Feedback feedbackText={`Feedback component testing`}/>);
        expect(wrapper.props().feedbackText).toEqual(`Feedback component testing`);
        wrapper.setProps({ feedbackText: `New Feedback text` });
        expect(wrapper.props().feedbackText).toEqual(`New Feedback text`);
    });
}); 