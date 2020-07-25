import { combineReducers, createStore } from 'redux'

import CalcReducer from './calcReducer';

const reducer = combineReducers({
    CalcReducer
})

export const store = createStore(reducer);

export default store;