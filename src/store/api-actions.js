import {loadQuestions} from './action';

import {APIRoutes} from '../const/routes';

export const fetchQuestionList = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.QUESTIONS)
    .then(({data}) => dispatch(loadQuestions(data)))
);
