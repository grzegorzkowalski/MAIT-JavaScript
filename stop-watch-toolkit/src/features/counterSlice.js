import {createSlice} from "@reduxjs/toolkit";

const initialCounterState = {
    isCounting: false,
    value: 0,
    id: 0,
    list: []
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        start: (state) => {
            state.isCounting = true;
        },
        stop: (state) => {
            state.isCounting = false;
        },
        addToList: (state) => {
            state.list.push(state.value);
        },
    },
});

export const {
    increment,
    start,
    stop,
    addToList
} = counterSlice.actions;

export default counterSlice.reducer;