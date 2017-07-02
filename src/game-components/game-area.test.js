import React from 'react';
import { shallow, mount } from 'enzyme';

import GameArea from './game-area';

describe(`<GameArea />`, () => {

    it(`Renders without crashing`, () => {
        shallow(<GameArea 
                    history={[50, 25]}
                    counter= {2}
                    feedbackText={`Test feedback text`}
                    winningNumber={19}
                />);
    });

});