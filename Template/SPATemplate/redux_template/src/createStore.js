import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import CounterReducer from './reducers/CounterReducer';
import FetchDataReducer from './reducers/FetchDataReducer';

export default function createStore() {

    const store = reduxCreateStore(
        combineReducers({
            CounterReducer,
            FetchDataReducer
        }),
        applyMiddleware(logger)
    );
    
  return store;
}