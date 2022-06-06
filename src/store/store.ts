import {combineReducers, configureStore} from "@reduxjs/toolkit";
import reducers from './reducers/index'

const rootReducer = combineReducers(reducers)

export const getStore = () => {
    return configureStore({
        reducer: rootReducer,

    })
}

export type AppRoot = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof getStore>;
export type AppDispatch = AppStore['dispatch'];