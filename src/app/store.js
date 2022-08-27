import { useReducer } from 'react';
import counterReducer from '../feature/Counter/counterSlice';

const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
    count: counterReducer,
    user: useReducer,

}

const store = configureStore({
    reducer: rootReducer,

});

export default store;
