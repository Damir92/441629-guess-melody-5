import {loadQuestions, requireAuthorization, redirectToRoute} from './action';

import {APIRoutes, Routes} from '../const/routes';
import {AuthorizationStatus} from '../const/auth';

export const fetchQuestionList = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.QUESTIONS)
    .then(({data}) => dispatch(loadQuestions(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoutes.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(Routes.RESULT)))
);
