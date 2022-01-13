import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import NavbarReducer from './reducers/NavbarReducer';
import RecommendedReducer from "./reducers/RecommendedProducts";

const reducers = combineReducers({
    navbar: NavbarReducer,
    recommended: RecommendedReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store;