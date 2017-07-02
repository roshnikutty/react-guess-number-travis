import React from 'react';
import { shallow, mount } from 'enzyme';
import Game from './game';

describe(`<Game />`, () => {
    
    it(`Renders without crashing`, () => {
        shallow(<Game />);
    });

    it(`Updates history in state`, () => {
        const wrapper = shallow(<Game />);
        const instance = wrapper.instance();
        let guessed = 15;
        instance.addGuessedNumber(guessed);
        expect(instance.state.history.length).toEqual(1);
    });
});