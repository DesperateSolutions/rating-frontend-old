import * as types from './action-types';

const initialState = {
  games: [],
  loading: false,
  error: false,
};

function getAllGames(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_GAMES: {
      return Object.assign({}, state, {
        loading: true,
      });
    }
    case types.GET_ALL_GAMES_SUCCESS: {
      return Object.assign({}, state, {
        games: action.response,
        loading: false,
      });
    }
    case types.GET_ALL_GAMES_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: true,
      });
    }
    default:
      return state;
  }
}

export default getAllGames;
