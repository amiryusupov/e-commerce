import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import NavbarReducer from './reducers/NavbarReducer';
import RecommendedReducer from "./reducers/RecommendedProducts";
import ProductsReducer from "./reducers/ProductsReducer";
import CardReducer from "./reducers/CartReducer";

const reducers = combineReducers({
    navbar: NavbarReducer,
    recommended: RecommendedReducer,
    categoryProducts: ProductsReducer,
    cartReducer: CardReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store;