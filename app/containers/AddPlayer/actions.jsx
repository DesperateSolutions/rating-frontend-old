import * as types from './action-types';

export function createPlayer(query) {
  return {
    type: types.CREATE_PLAYER,
    query,
  };
}

export function createPlayerSuccess(response) {
  return {
    type: types.CREATE_PLAYER_SUCCESS,
    response,
  };
}

export function createPlayerError(error) {
  return {
    type: types.CREATE_PLAYER_ERROR,
    error,
  };
}
