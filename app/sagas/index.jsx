import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import { GET_ALL_LEAGUES } from '../containers/Leagues/action-types';
import { GET_ALL_PLAYERS } from '../containers/Ranking/action-types';
import {
  getLeaguesSuccess,
  getLeaguesError,
} from '../containers/Leagues/actions';
import {
  getPlayersSuccess,
  getPlayersError,
} from '../containers/Ranking/actions';
import getAllLeagues from '../apiUtils/LeagueApi';
import * as playerAPI from '../apiUtils/PlayerApi';

function* allLeaguesSaga() {
  const { response, error } = yield call(getAllLeagues);
  if (response) {
    yield put(getLeaguesSuccess(response));
  } else {
    yield put(getLeaguesError(error));
  }
}

function* allPlayersSaga() {
  const { response, error } = yield call(playerAPI.getAllPlayers);
  if (response) {
    yield put(getPlayersSuccess(response));
  } else {
    yield put(getPlayersError(error));
  }
}

function* watchLeagues() {
  yield* takeEvery(GET_ALL_LEAGUES, allLeaguesSaga);
}

function* watchPlayers() {
  yield* takeEvery(GET_ALL_PLAYERS, allPlayersSaga);
}

export default function* rootSaga() {
  yield [
    fork(watchLeagues),
    fork(watchPlayers),
  ];
}
