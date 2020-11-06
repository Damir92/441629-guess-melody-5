import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GenreQuestionScreen from './genre-question-screen';

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      src: `path`,
      genre: `rock`,
    },
    {
      src: `path`,
      genre: `jazz`,
    },
    {
      src: `path`,
      genre: `jazz`,
    },
    {
      src: `path`,
      genre: `blues`,
    },
  ],
};

const noop = () => {};

configure({adapter: new Adapter()});

it(`When user answers genre question form is not sent`, () => {
  const onAnswer = jest.fn();

  const screen = shallow(
      <GenreQuestionScreen
        mistakes={0}
        onAnswer={onAnswer}
        onChange={noop}
        question={question}
        renderPlayer={noop}
        userAnswers={{}}
      />
  );

  const form = screen.find(`form`);
  const formSendPrevention = jest.fn();

  form.simulate(`submit`, {
    preventDefault: formSendPrevention,
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});

it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
  const onAnswer = jest.fn();
  const userAnswer = [true, false, false, false];

  const screen = mount(
      <GenreQuestionScreen
        mistakes={0}
        onAnswer={onAnswer}
        onChange={noop}
        question={question}
        renderPlayer={noop}
        userAnswers={{0: true}}
      />
  );

  const form = screen.find(`form`);
  const inputOne = screen.find(`input`).at(0);

  inputOne.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toEqual(void 0);

  expect(
      screen.find(`input`).map((it) => it.prop(`checked`))
  ).toEqual(userAnswer);
});
