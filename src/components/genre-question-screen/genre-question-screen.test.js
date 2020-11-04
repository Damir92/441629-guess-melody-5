import React from 'react';
import renderer from 'react-test-renderer';

import GenreQuestionScreen from './genre-question-screen';

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }],
};

const noop = () => {};

it(`GenreQuestionScreen was render correctly`, () => {
  const tree = renderer
    .create(<GenreQuestionScreen
      mistakes={0}
      onAnswer={noop}
      onChange={noop}
      question={question}
      renderPlayer={noop}
      userAnswers={{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
