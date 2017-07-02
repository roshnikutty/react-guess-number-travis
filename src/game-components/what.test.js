import React from 'react';
import {shallow} from 'enzyme';

import What from './what';

describe('<What />', () => {
    it('Renders without crashing', ()=>{
        shallow(<What />);
    });
    it('Should render what_position', ()=>{
        const wrapper = shallow(<What />);
        expect(wrapper.hasClass('what_position')).toEqual(true);
    });
    it('Should update state to show clicked', ()=> {
        const wrapper=shallow(<What />);
        wrapper.simulate('click');
        expect(wrapper.state('clicked')).toEqual(false);
    });

});