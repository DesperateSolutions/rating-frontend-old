import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import { GET_ALL_LEAGUES } from '../containers/Leagues/action-types';
import { GET_ALL_PLAYERS } from '../containers/Ranking/action-types';
import { CREATE_PLAYER } from '../containers/AddPlayer/action-types';
import {
  getLeaguesSuccess,
  getLeaguesError,
} from '../containers/Leagues/actions';
import {
  getPlayersSuccess,
  getPlayersError,
} from '../containers/Ranking/actions';
import {
  createPlayerSuccess,
  createPlayerError,
} from '../containers/AddPlayer/actions';
import getAllLeagues from '../apiUtils/LeagueApi';
import * as playerAPI from '../apiUtils/PlayerApi';
import * as API from '../apiUtils/api';

function* allLeaguesSaga(action) {
  console.log(action.query);
  const { response, error } = yield call(API.getAllLeagues, action.query);
  if (response) {
    yield put(getLeaguesSuccess(response));
  } else {
    yield put(getLeaguesError(error));
  }
}

function* allPlayersSaga(action) {
  console.log(action.query);
  const { response, error } = yield call(API.getAllPlayers, action.query);
  if (response) {
    yield put(getPlayersSuccess(response));
  } else {
    yield put(getPlayersError(error));
  }
}

function* createPlayerSaga(action) {
  const { response, error } = yield call(playerAPI.create, action.query);
  if (response) {
    yield put(createPlayerSuccess(response));
  } else {
    yield put(createPlayerError(error));
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

export default function* rootSaga() {
  yield [
    fork(watchLeagues),
    fork(watchPlayers),
    fork(watchCreatePlayer),
  ];
}
