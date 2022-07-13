import { SagaIterator } from 'redux-saga';
import { saga as competitionsSaga } from './leagues';
import { fork } from 'redux-saga/effects';

function* rootSaga(): SagaIterator {
  yield fork(competitionsSaga);
}

export default rootSaga;
