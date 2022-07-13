import { createAction, createSlice } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { put, call, takeLatest } from 'redux-saga/effects';
import { getLeagues } from '../api';

interface Area {
  name: string;
}

export interface ICompetition {
  name: string;
  area: Area;
  id: string;
}

interface ICompetitionState {
  competitions: ICompetition[];
  isLoading: boolean;
}

const defaultState: ICompetitionState = {
  isLoading: false,
  competitions: [],
};

export const slice = createSlice({
  name: 'leagues/competitionsList',
  initialState: defaultState,
  reducers: {
    getLeaguesFetch: (state) => {
      state.isLoading = true;
    },
    getLeaguesSuccess: (state, action) => {
      state.competitions = action.payload;
      state.isLoading = false;
    },
    getLeaguesFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getLeaguesSuccess, getLeaguesFetch, getLeaguesFailure } = slice.actions;
export const getLeaguesInfo = createAction(`leagues/get-competitions`);

function* handleCompetitions(): SagaIterator {
  yield put(getLeaguesFetch());
  const reply = yield call(getLeagues);
  debugger;
  if (reply) {
    yield put(getLeaguesSuccess(reply));
  } else put(getLeaguesFailure());
}

export function* saga(): SagaIterator {
  yield takeLatest(getLeaguesInfo.match, handleCompetitions);
}

export default slice.reducer;
