import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withUserAnswer from './with-user-answer';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withUserAnswer(MockComponent);

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

it(`Should change answers`, () => {
  const wrapper = shallow(<MockComponentWrapped
    question={question}
    onAnswer={() => {}}
  />);

  expect(wrapper.props().userAnswers).toEqual({});

  wrapper.props().onChange({target: {checked: true}}, 0);
  expect(wrapper.props().userAnswers).toEqual({0: true});

  wrapper.props().onChange({target: {checked: false}}, 0);
  expect(wrapper.props().userAnswers).toEqual({0: false});

  wrapper.props().onChange({target: {checked: true}}, 1);
  expect(wrapper.props().userAnswers).toEqual({0: false, 1: true});
});
