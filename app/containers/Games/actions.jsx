import * as types from './action-types';

export function getAllGames(query) {
  return {
    type: types.GET_ALL_GAMES,
    query,
  };
}

export function getGamesSuccess(response) {
  return {
    type: types.GET_ALL_GAMES_SUCCESS,
    response,
  };
}

export function getGamesError(error) {
  return {
    type: types.GET_ALL_GAMES_ERROR,
    error,
  };
}
