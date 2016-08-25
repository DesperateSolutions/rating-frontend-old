import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import { GET_ALL_LEAGUES } from '../containers/Leagues/action-types';
import {
  getLeaguesSuccess,
  getLeaguesError,
} from '../containers/Leagues/actions';
import getAll from '../apiUtils/LeagueApi';

function* allLeaguesSaga() {
  const { response, error } = yield call(getAll);
  if (response) {
    yield put(getLeaguesSuccess(response));
  } else {
    yield put(getLeaguesError(error));
  }
}

function* watchLeagues() {
  yield* takeEvery(GET_ALL_LEAGUES, allLeaguesSaga);
}

export default function* rootSaga() {
  yield [
    fork(watchLeagues),
  ];
}
