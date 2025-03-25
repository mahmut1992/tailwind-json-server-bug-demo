import { applyMiddleware, combineReducers, createStore } from "redux";
import restaurantReducers from "./reducers/restaurantReducers";
import { thunk } from "redux-thunk";
import cartReducer from "./reducers/cartReducer";

const rootReducers = combineReducers({ restaurantReducers, cartReducer });
const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;
