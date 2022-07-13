import { combineReducers } from '@reduxjs/toolkit';
import leagues from './leagues';

const rootReducer = combineReducers({
  leagues,
});

export default rootReducer;
