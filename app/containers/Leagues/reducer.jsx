import * as types from './action-types';

const initialState = {
  leagues: [],
  loading: false,
  error: false,
};

function getAllLeagues(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_LEAGUES: {
      return Object.assign({}, state, {
        loading: true,
      });
    }
    case types.GET_ALL_LEAGUES_SUCCESS: {
      return Object.assign({}, state, {
        leagues: action.response,
        loading: false,
      });
    }
    case types.GET_ALL_LEAGUES_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: true,
      });
    }
    default:
      return state;
  }
}

export default getAllLeagues;
