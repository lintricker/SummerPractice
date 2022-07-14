import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import leaguesReducer from './leagueSlice';
import leagueSaga from './LeagueSaga';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    leagues: leaguesReducer,
  },
  middleware: [saga],
});
saga.run(leagueSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
