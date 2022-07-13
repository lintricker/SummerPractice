import { createSlice } from '@reduxjs/toolkit';

export const leagueSlice = createSlice({
  name: 'leagues',
  initialState: {
    leagues: [],
    isLoading: false,
  },
  reducers: {
    getLeaguesFetch: (state) => {
      state.isLoading = true;
    },
    getLeaguesSuccess: (state, action) => {
      state.leagues = action.payload;
      state.isLoading = false;
    },
    getLeaguesFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getLeaguesFetch, getLeaguesSuccess, getLeaguesFailure } = leagueSlice.actions;
export default leagueSlice.reducer;
