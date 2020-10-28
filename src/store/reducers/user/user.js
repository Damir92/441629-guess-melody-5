import {AuthorizationStatus} from '../../../const/auth';
import {ActionType} from '../../action';
import {updateObject} from '../../../utils';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return updateObject(state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};

export {user};
