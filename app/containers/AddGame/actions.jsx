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

export function changeWhitePlayer(query) {
  return {
    type: types.CHANGE_WHITE_PLAYER,
    query,
  };
}

export function changeBlackPlayer(query) {
  return {
    type: types.CHANGE_BLACK_PLAYER,
    query,
  };
}

export function changeWinner(query) {
  return {
    type: types.CHANGE_WINNER,
    query,
  };
}
