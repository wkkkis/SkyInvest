import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

//Reducers
import userReducer from "./user/user.api";
import authReducer from "./auth/auth.api";
import groupReducer from "./group/group.api";
import mainReducer from "./main/main.api";
import payReducer from "./payment/pay.api";
import secuReducer from "./security/secu.api";
import historyReducer from "./history/history.api";

let reducers = combineReducers({
    user: userReducer,
    history: historyReducer,
    secu: secuReducer,
    group: groupReducer,
    pay: payReducer,
    main: mainReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
