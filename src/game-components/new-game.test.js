import React from 'react';
import {shallow, mount} from 'enzyme';

import NewGame from './new-game';

describe(`<NewGame />`, ()=>{
    it(`Should render without crashing`, () => {
        shallow(<NewGame />);
    });

    it(`Should appear on right top screen`, ()=>{
        const wrapper = shallow(<NewGame />);
        expect(wrapper.hasClass('right')).toEqual(true);
    });

    it(`Should clear game area`, ()=>{
        const callback = jest.fn();
        const wrapper = mount(<NewGame onClick={callback} />);
        wrapper.simulate('click');
        expect(callback).toHaveBeenCalled();
    })

});