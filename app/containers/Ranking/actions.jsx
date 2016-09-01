import * as types from './action-types';

export function getAllPlayers(query) {
  return {
    type: types.GET_ALL_PLAYERS,
    query,
  };
}

export function getPlayersSuccess(response) {
  return {
    type: types.GET_ALL_PLAYERS_SUCCESS,
    response,
  };
}

export function getPlayersError(error) {
  return {
    type: types.GET_ALL_PLAYERS_ERROR,
    error,
  };
}

// Create player

// create player success

// create player error

// delete player

// delete player success

// delete player error
