import {configureStore} from "@reduxjs/toolkit";
import reducer from "./features/counterSlice";
import {logger} from "redux-logger";

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: import.meta.env.NODE_ENV !== 'production',
});

export default store;
