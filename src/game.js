export const isArtistAnswerCorrect = (question, answer) => {
  return question.song.artist === answer.artist;
};

export const isGenreAnswerCorrect = (question, answer) => {
  return question.answers.every((item, index) => {
    return (question.genre === item.genre) === !!answer[index];
  });
};
