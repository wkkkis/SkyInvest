import { userActions } from "../user/user.api";
import authService from "./auth.service";

let initialState = {
    messages: null,
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
        case "SET_IS_AUTH":
            return {
                ...state,
                isAuth: action.payload,
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

export const authActions = {
    setIsAuth: (toggle) => ({
        type: "SET_IS_AUTH",
        payload: toggle,
    }),
    setLoad: (toggle) => ({
        type: "SET_LOAD",
        payload: toggle,
    }),
    message: (message) => ({ type: "SET_MESSAGE", payload: message }),
};

export const login = (data) => async (dispatch) => {
    dispatch(authActions.message(""));
    dispatch(authActions.setLoad(true));
    try {
        let response = await authService.login(data);
        dispatch(authActions.setIsAuth(true));
        localStorage.setItem("token", response.data.auth_token);
    } catch (e) {
        if (e.response.data.message) {
            dispatch(
                authActions.message({ message: [e.response.data.message] })
            );
        } else {
            dispatch(authActions.message(e.response.data));
        }
    }
    dispatch(authActions.setLoad(false));
};

export const activation = (data) => async (dispatch) => {
    dispatch(authActions.message(""));
    dispatch(authActions.setLoad(true));
    try {
        let response = await authService.activation(data);
        dispatch(authActions.message(response.data.message));
    } catch (e) {
        if (e.response.data.message) {
            dispatch(
                authActions.message({ message: [e.response.data.message] })
            );
        } else {
            dispatch(authActions.message(e.response.data));
        }
    }
    dispatch(authActions.setLoad(false));
};

export const regiter = (data) => async (dispatch) => {
    dispatch(authActions.message(""));
    dispatch(authActions.setLoad(true));
    try {
        let response = await authService.register(data);
        dispatch(authActions.message(response.data.message));
    } catch (e) {
        dispatch(authActions.setLoad(false));
        if (e.response.data.message) {
            dispatch(
                authActions.message({ message: [e.response.data.message] })
            );
        } else {
            dispatch(authActions.message(e.response.data));
        }
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
        if (e.response.data.message) {
            dispatch(
                authActions.message({ message: [e.response.data.message] })
            );
        } else {
            dispatch(authActions.message(e.response.data));
        }
    }
    dispatch(authActions.setLoad(false));
};

export const resetPassword = (email) => async (dispatch) => {
    dispatch(authActions.message("visa_false"));
    dispatch(authActions.setLoad(true));
    try {
        let response = await authService.reset_password(email);
        dispatch(authActions.message(response.data.message));
    } catch (e) {
        dispatch(authActions.setLoad(false));
        if (e.response.data.message) {
            dispatch(
                authActions.message({ message: [e.response.data.message] })
            );
        } else {
            dispatch(authActions.message(e.response.data));
        }
    }
    dispatch(authActions.setLoad(false));
};

export const confirmPassword = (data) => async (dispatch) => {
    dispatch(authActions.message(""));
    try {
        dispatch(authActions.setLoad(true));
        let response = await authService.confirm_password(data);
        if (response) {
            dispatch(authActions.message(response.data.message));
        }
        dispatch(authActions.setLoad(false));
    } catch (e) {
        dispatch(authActions.setLoad(false));
        if (e.response.data.message) {
            dispatch(
                authActions.message({ message: [e.response.data.message] })
            );
        } else {
            dispatch(authActions.message(e.response.data));
        }
    }
};

export default authReducer;
