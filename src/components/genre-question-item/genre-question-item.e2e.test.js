import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GenreQuestionItem from './genre-question-item';

const answer = {
  src: `songURL`,
  genre: `rock`,
};

const noop = () => {};
const ID = 10;

configure({adapter: new Adapter()});

it(`Change input calls callback`, () => {
  const handleInputChange = jest.fn();

  const wrapper = shallow(
      <GenreQuestionItem
        answer={answer}
        id={ID}
        onChange={handleInputChange}
        renderPlayer={noop}
        userAnswer={false}
      />
  );

  wrapper.find(`.game__input`).simulate(`change`);

  expect(handleInputChange).toHaveBeenCalledTimes(1);
  expect(handleInputChange.mock.calls[0][1]).toBe(ID);
});
