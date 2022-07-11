import { createSlice } from '@reduxjs/toolkit';
import mock from '../mock.json';

interface Area {
    id: number,
    name: string,
    countryCode: string,
};

export interface Competition {
    id: number,
    area: Area,
    name: string,
}

interface InitialState {
    competitions: Competition[]
};

const initialState: InitialState = {
    competitions: mock.competitions as Competition[],
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    }
});

export const {  } = counterSlice.actions;
export default counterSlice.reducer;
