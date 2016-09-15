import * as types from './action-types';

export function addGame(query) {
  return {
    type: types.ADD_GAME,
    query,
  };
}

export function addGameSuccess(response) {
  return {
    type: types.ADD_GAME_SUCCESS,
    response,
  };
}

export function addGameError(error) {
  return {
    type: types.ADD_GAME_ERROR,
    error,
  };
}
