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

// Create endpoint

// create endpoint success

// create endpoint error

// delete endpoint

// delete endpoint success

// delete endpoint error
