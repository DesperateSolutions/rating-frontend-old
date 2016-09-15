/* global Materialize */
import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import { GET_ALL_LEAGUES } from '../containers/Leagues/action-types';
import { GET_ALL_PLAYERS } from '../containers/Ranking/action-types';
import { CREATE_PLAYER } from '../containers/AddPlayer/action-types';
import { GET_ALL_GAMES } from '../containers/Games/action-types';
import { ADD_GAME } from '../containers/AddGame/action-types';
import { getLeaguesSuccess, getLeaguesError } from '../containers/Leagues/actions';
import { getPlayersSuccess, getPlayersError } from '../containers/Ranking/actions';
import { createPlayerSuccess, createPlayerError } from '../containers/AddPlayer/actions';
import { getGamesSuccess, getGamesError } from '../containers/Games/actions';
import { addGameSuccess, addGameError } from '../containers/AddGame/actions';
import * as API from '../apiUtils/api';

function* allLeaguesSaga(action) {
  const { response, error } = yield call(API.getAllLeagues, action.query);
  if (response) {
    yield put(getLeaguesSuccess(response));
  } else {
    yield put(getLeaguesError(error));
  }
}

function* allPlayersSaga(action) {
  const { response, error } = yield call(API.getAllPlayers, action.query);
  if (response) {
    yield put(getPlayersSuccess(response));
  } else {
    yield put(getPlayersError(error));
  }
}

function* createPlayerSaga(action) {
  const { response, error } = yield call(API.createPlayer, action.query);
  if (response) {
    yield put(createPlayerSuccess(response));
  } else {
    Materialize.toast('ERROR ADDING PLAYER', 4000, 'red');
    yield put(createPlayerError(error));
  }
}

function* allGamesSaga(action) {
  const { response, error } = yield call(API.getAllGames, action.query);
  if (response) {
    yield put(getGamesSuccess(response));
  } else {
    yield put(getGamesError(error));
  }
}

function* addGameSaga(action) {
  const { response, error } = yield call(API.addGame, action.query);
  if (response) {
    yield put(addGameSuccess(response));
  } else {
    yield put(addGameError(error));
  }
}

function* watchLeagues() {
  yield* takeEvery(GET_ALL_LEAGUES, allLeaguesSaga);
}

function* watchPlayers() {
  yield* takeEvery(GET_ALL_PLAYERS, allPlayersSaga);
}

function* watchCreatePlayer() {
  yield* takeEvery(CREATE_PLAYER, createPlayerSaga);
}

function* watchGames() {
  yield* takeEvery(GET_ALL_GAMES, allGamesSaga);
}

function* watchAddGame() {
  yield* takeEvery(ADD_GAME, addGameSaga);
}

export default function* rootSaga() {
  yield [
    fork(watchLeagues),
    fork(watchPlayers),
    fork(watchCreatePlayer),
    fork(watchGames),
    fork(watchAddGame),
  ];
}
