import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from './slice';
import createSagaMiddleware from 'redux-saga';
import countriesSaga from "./saga";

const sagaMiddlware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        countries: countriesSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddlware)
    ,
});

sagaMiddlware.run(countriesSaga)
 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
