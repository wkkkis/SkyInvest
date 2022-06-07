import { authActions } from "../auth/auth.api";
import userService from "./user.service";

let initialState = {
    user: null,
    messages: null,
    isTraider: false,
    loaded: false,
    complete: "",
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                ...action.payload,
            };
        case "RESET_USER":
            return {
                ...state,
                user: action.payload,
                messages: "",
            };
        case "SET_MESSAGE":
            return {
                ...state,
                messages: action.payload,
            };
        case "SET_COMPLETE":
            return {
                ...state,
                complete: action.payload,
            };
        case "SET_LOAD":
            return {
                ...state,
                loaded: action.payload,
            };
        default:
            return state;
    }
};

export const userActions = {
    setDataUser: (data) => ({
        type: "SET_USER",
        payload: { user: data, isTraider: data.is_trader },
    }),
    resetUser: () => ({
        type: "RESET_USER",
        payload: null,
    }),
    setLoad: (toggle) => ({
        type: "SET_LOAD",
        payload: toggle,
    }),
    message: (message) => ({ type: "SET_MESSAGE", payload: message }),
    complete: (message) => ({ type: "SET_COMPLETE", payload: message }),
};

export const binanceApiActive = (data) => async (dispatch) => {
    dispatch(userActions.message(""));
    dispatch(userActions.setLoad(true));
    try {
        const token = localStorage.getItem("token");
        let response = await userService.trader_apply(token, data);
        dispatch(userActions.complete(response.data.message));
    } catch (e) {
        dispatch(userActions.message(e.response.data));
    }
    dispatch(userActions.setLoad(false));
};

export const me = () => async (dispatch) => {
    dispatch(userActions.setLoad(true));
    try {
        const token = localStorage.getItem("token");
        let response = await userService.me(token);
        dispatch(authActions.setIsAuth(true));
        dispatch(userActions.setDataUser(response.data));
    } catch (e) {
        dispatch(userActions.message(e.response.data));
    }
    dispatch(userActions.setLoad(false));
};

export const verification = (data) => async (dispatch) => {
    dispatch(userActions.message(""));
    dispatch(userActions.setLoad(true));
    try {
        const token = localStorage.getItem("token");
        let response = await userService.verification(data, token);
        dispatch(userActions.complete(response.data.message));
    } catch (e) {
        dispatch(userActions.message(e.response.data));
    }
    dispatch(userActions.setLoad(false));
};

export const editUser = (data) => async (dispatch) => {
    dispatch(userActions.message(""));
    dispatch(userActions.setLoad(true));
    try {
        const token = localStorage.getItem("token");
        let response = await userService.editUser(data, token);
        dispatch(userActions.complete(response.data.message));
        dispatch(me());
    } catch (e) {
        dispatch(userActions.message(e.response.data));
    }
    dispatch(userActions.setLoad(false));
};

export default userReducer;
