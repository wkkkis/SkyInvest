import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

//Reducers
import userReducer from "./user/user.api";

let reducers = combineReducers({
    user: userReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
