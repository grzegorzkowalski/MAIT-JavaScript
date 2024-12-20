const START_TIMER = "START_TIMER";
const STOP_TIMER = "STOP_TIMER";
const UPDATE_TIMER = "UPDATE_TIMER";
const SET_ID = "SET_ID";
const ADD_TO_LIST = "ADD_TO_LIST";

const startTimer = () => {
    return {
        type: START_TIMER
    }
}

const stopTimer = () => {
    return {
        type: STOP_TIMER
    }
}

const updateTimer = () => {
    return {
        type: UPDATE_TIMER
    }
}

const setID = (id) => {
    return {
        type: SET_ID,
        payload: id
    }
}

const startCounter = () => {
    return (dispatch) => {
        dispatch(startTimer())
        const id = setInterval(() => {
            dispatch(updateTimer())
        }, 1000);
        dispatch(setID(id));
    }
}

const addToList = (counter) => {
    return {
        type: ADD_TO_LIST,
        payload: counter
    }
}

export {
    START_TIMER,
    STOP_TIMER,
    UPDATE_TIMER,
    SET_ID,
    ADD_TO_LIST,
    stopTimer,
    startCounter,
    addToList
}