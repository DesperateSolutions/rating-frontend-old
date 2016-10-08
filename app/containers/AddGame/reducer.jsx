import * as types from './action-types';

const initialState = {
  success: false,
  loading: false,
  error: false,
  selectedWhitePlayer: { name: 'Player One' },
  selectedBlackPlayer: { name: 'Player Two' },
};

function addGame(state = initialState, action) {
  switch (action.type) {
    case types.ADD_GAME: {
      return Object.assign({}, state, {
        success: false,
        loading: true,
        error: false,
      });
    }
    case types.ADD_GAME_SUCCESS: {
      return Object.assign({}, state, {
        success: true,
        loading: false,
        error: false,
      });
    }
    case types.ADD_GAME_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        success: false,
        error: true,
      });
    }
    case types.CHANGE_WHITE_PLAYER: {
      return Object.assign({}, state, action.query);
    }
    case types.CHANGE_BLACK_PLAYER: {
      return Object.assign({}, state, action.query);
    }
    case types.CHANGE_WINNER: {
      return Object.assign({}, state, action.query);
    }
    default:
      return state;
  }
}

export default addGame;
