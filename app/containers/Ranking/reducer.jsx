import * as types from './action-types';

const initialState = {
  players: [],
  loading: false,
  error: false,
};

function getAllPlayers(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_PLAYERS: {
      return Object.assign({}, state, {
        loading: true,
      });
    }
    case types.GET_ALL_PLAYERS_SUCCESS: {
      return Object.assign({}, state, {
        players: action.response,
        loading: false,
        error: false,
      });
    }
    case types.GET_ALL_PLAYERS_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: true,
      });
    }
    default:
      return state;
  }
}

export default getAllPlayers;
