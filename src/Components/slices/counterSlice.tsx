import { createSlice } from '@reduxjs/toolkit';
import mock from '../mock.json';


const initialState = {
    competions: mock.competitions,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {}
    },
);

//export const {  } = counterSlice.actions;

export default counterSlice;