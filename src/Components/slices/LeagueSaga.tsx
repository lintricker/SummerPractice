import { call, put, takeEvery } from 'redux-saga/effects';
import { getLeaguesSuccess } from './leagueSlice';

function* workGetLeaguesFetch() {
  const leagues = yield call(() => fetch('http://api.football-data.org/v2/competitions/'));
  const formattedLeagues = yield leagues.JSON();
  yield put(getLeaguesSuccess(formattedLeagues));
}

function* LeagueSaga() {
  yield takeEvery('leagues/getLeaguesFetch', workGetLeaguesFetch);
}

export default LeagueSaga;
