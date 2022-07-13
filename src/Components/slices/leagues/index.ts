import { combineReducers } from '@reduxjs/toolkit';
import competitionsList, { saga as competitionsListSaga } from './competitionsList';
import { SagaIterator } from 'redux-saga';
import { fork } from 'redux-saga/effects';

const reducer = combineReducers({
    competitionsList,
});

export default reducer;

export function* saga(): SagaIterator {
  yield fork(competitionsListSaga);
}
