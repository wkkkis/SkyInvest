import { userActions } from "../user/user.api";
import authService from "./auth.service";

let initialState = {
    messages: null,
    complete: null,
    isAuth: false,
    loaded: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MESSAGE":
            return {
                ...state,
                messages: action.payload,
            };
        case "SET_CONFIRM":
            return {
                ...state,
                complete: action.payload,
            };
        case "SET_IS_AUTH":
            return {
                ...state,
                isAuth: action.payload,
            };
        case "SET_LOAD_AUTH":
            return {
                ...state,
                loaded: action.payload,
            };
        default:
            return state;
    }
};

export const authActions = {
    setIsAuth: (toggle) => ({
        type: "SET_IS_AUTH",
        payload: toggle,
    }),
    setLoad: (toggle) => ({
        type: "SET_LOAD_AUTH",
        payload: toggle,
    }),
    message: (message) => ({ type: "SET_MESSAGE", payload: message }),
    complete: (message) => ({ type: "SET_CONFIRM", payload: message }),
};

export const login = (data) => async (dispatch) => {
    dispatch(authActions.message(""));
    dispatch(authActions.setLoad(true));
    try {
        let response = await authService.login(data);
        dispatch(authActions.setIsAuth(true));
        localStorage.setItem("token", response.data.auth_token);
        dispatch(authActions.setLoad(false));
    } catch (e) {
        dispatch(authActions.message(e.response.data));
        dispatch(authActions.setLoad(false));
    }
    dispatch(authActions.setLoad(false));
};

export const activation = (data) => async (dispatch) => {
    dispatch(authActions.message(""));
    dispatch(authActions.setLoad(true));
    try {
        let response = await authService.activation(data);
        dispatch(authActions.complete("complete_activation"));
        dispatch(authActions.setLoad(false));
    } catch (e) {
        dispatch(authActions.message(e.response.data));
        dispatch(authActions.setLoad(false));
    }
    dispatch(authActions.setLoad(false));
};

export const regiter = (data) => async (dispatch) => {
    dispatch(authActions.message(""));
    dispatch(authActions.setLoad(true));
    try {
        let response = await authService.register(data);
        if (response.status === 201) {
            dispatch(authActions.complete("register_success"));
        }
    } catch (e) {
        dispatch(authActions.setLoad(false));
        dispatch(authActions.message(e.response.data));
    }
    dispatch(authActions.setLoad(false));
};

export const logOut = () => async (dispatch) => {
    dispatch(authActions.message(""));
    dispatch(authActions.setLoad(true));
    try {
        const token = localStorage.getItem("token");
        let response = await authService.logout(token);
        localStorage.removeItem("token");
        dispatch(userActions.resetUser());
        dispatch(authActions.setIsAuth(false));
    } catch (e) {
        dispatch(authActions.setLoad(false));
        dispatch(authActions.message(e.response.data));
    }
    dispatch(authActions.setLoad(false));
};

export const resetPassword = (email) => async (dispatch) => {
    dispatch(authActions.message(""));
    dispatch(authActions.setLoad(true));
    try {
        let response = await authService.reset_password(email);
        dispatch(authActions.message("reset_success"));
        dispatch(authActions.setLoad(false));
    } catch (e) {
        dispatch(authActions.message(e.response.data));
        dispatch(authActions.setLoad(false));
    }
    dispatch(authActions.setLoad(false));
};

export const confirmPassword = (data) => async (dispatch) => {
    dispatch(authActions.message(""));
    try {
        dispatch(authActions.setLoad(true));
        let response = await authService.confirm_password(data);
        dispatch(authActions.complete("confirm_password_success"));
        dispatch(authActions.setLoad(false));
    } catch (e) {
        dispatch(authActions.message(e.response.data));
        dispatch(authActions.setLoad(false));
    }
};

export default authReducer;
