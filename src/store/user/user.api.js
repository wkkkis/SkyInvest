import { authActions } from "../auth/auth.api";
import userService from "./user.service";

let initialState = {
    user: null,
    traider_data: null,
    messages: null,
    isTraider: false,
    loaded: false,
    complete: "",
    balance: 0,
    verification: "",
    profile: null,
    profile_tabs: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                ...action.payload,
            };
        case "SET_PROFILE":
            return {
                ...state,
                profile: action.payload,
            };
        case "SET_TRAIDER_DATA":
            return {
                ...state,
                traider_data: action.payload,
            };
        case "SET_BALANCE":
            return {
                ...state,
                balance: action.payload,
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
        case "SET_VERIFICATION":
            return {
                ...state,
                verification: action.payload,
            };
        case "SET_LOAD_USER":
            return {
                ...state,
                loaded: action.payload,
            };
        case "SET_PROFILE_TABS":
            return {
                ...state,
                profile_tabs: action.payload,
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
    setAnyUser: (data) => ({
        type: "SET_PROFILE",
        payload: data,
    }),
    setTraiderData: (data) => ({
        type: "SET_TRAIDER_DATA",
        payload: data,
    }),
    setProfileTabs: (data) => ({
        type: "SET_PROFILE_TABS",
        payload: data,
    }),
    resetUser: () => ({
        type: "RESET_USER",
        payload: null,
    }),
    setBalance: (data) => ({
        type: "SET_BALANCE",
        payload: data,
    }),
    setLoad: (toggle) => ({
        type: "SET_LOAD_USER",
        payload: toggle,
    }),
    message: (message) => ({ type: "SET_MESSAGE", payload: message }),
    complete: (message) => ({ type: "SET_COMPLETE", payload: message }),
    verification: (message) => ({ type: "SET_VERIFICATION", payload: message }),
};

export const binanceApiActive = (data) => async (dispatch) => {
    dispatch(userActions.message(""));
    dispatch(userActions.setLoad(true));
    try {
        const token = localStorage.getItem("token");
        let response = await userService.trader_apply(token, data);
        dispatch(userActions.complete(response.data.message));
        dispatch(userActions.setLoad(false));
    } catch (e) {
        dispatch(userActions.setLoad(false));
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
        dispatch(userActions.setLoad(false));
    } catch (e) {
        dispatch(userActions.message(e.response.data));
        dispatch(userActions.setLoad(false));
    }
    dispatch(userActions.setLoad(false));
};

export const getBalance = () => async (dispatch) => {
    dispatch(userActions.setLoad(true));
    try {
        const token = localStorage.getItem("token");
        let response = await userService.getBalance(token);
        dispatch(userActions.setBalance(response.data.balance));
        dispatch(userActions.setLoad(false));
    } catch (e) {
        dispatch(userActions.message(e.response.data));
        dispatch(userActions.setLoad(false));
    }
    dispatch(userActions.setLoad(false));
};

export const getProfileInfo = (id) => async (dispatch) => {
    dispatch(userActions.setLoad(true));
    try {
        let response = await userService.getAnyUser(id);
        dispatch(userActions.setAnyUser(response.data));
    } catch (e) {
        dispatch(userActions.message(e.response.data));
    }
    dispatch(userActions.setLoad(false));
};

export const getTraderDashboard = () => async (dispatch) => {
    dispatch(userActions.setLoad(true));
    try {
        const token = localStorage.getItem("token");
        let response = await userService.traderDashboard(token);
        dispatch(userActions.setDataUser(response.data.user));
        dispatch(userActions.setTraiderData(response.data));
        dispatch(userActions.setLoad(false));
    } catch (e) {
        dispatch(userActions.message(e.response.data));
        dispatch(userActions.setLoad(false));
    }
    dispatch(userActions.setLoad(false));
};

export const getProfileStatistik = (id) => async (dispatch) => {
    dispatch(userActions.setLoad(true));
    try {
        let response = await userService.getAnyUser(id);
        dispatch(userActions.setAnyUser(response.data));
    } catch (e) {
        dispatch(userActions.message(e.response.data));
    }
    dispatch(userActions.setLoad(false));
};

export const verificationFetch = (data) => async (dispatch) => {
    dispatch(userActions.message(""));
    dispatch(userActions.setLoad(true));
    try {
        const token = localStorage.getItem("token");
        let response = await userService.verification(data, token);
        if (response.status === 201) {
            dispatch(getVerificationStatus());
        }
        dispatch(userActions.setLoad(false));
    } catch (e) {
        dispatch(userActions.message(e.response.data));
        dispatch(userActions.setLoad(false));
    }
    dispatch(userActions.setLoad(false));
};

export const getVerificationStatus = () => async (dispatch) => {
    dispatch(userActions.message(""));
    dispatch(userActions.setLoad(true));
    try {
        const token = localStorage.getItem("token");
        let response = await userService.getVerificationStatus(token);
        dispatch(userActions.verification(response.data));
        dispatch(userActions.setLoad(false));
    } catch (e) {
        dispatch(userActions.message(e.response.data));
        dispatch(userActions.setLoad(false));
    }
    dispatch(userActions.setLoad(false));
};

export const imageVerification = (data) => async (dispatch) => {
    dispatch(userActions.message(""));
    dispatch(userActions.setLoad(true));
    try {
        const token = localStorage.getItem("token");
        let response = await userService.imageVerification(data, token);
        dispatch(userActions.complete(response.data.message));
        dispatch(userActions.setLoad(false));
    } catch (e) {
        dispatch(userActions.message(e.response.data));
        dispatch(userActions.setLoad(false));
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
        dispatch(userActions.setLoad(false));
        dispatch(me());
    } catch (e) {
        dispatch(userActions.message(e.response.data));
        dispatch(userActions.setLoad(false));
    }
    dispatch(userActions.setLoad(false));
};

export const changePassword = (data) => async (dispatch) => {
    dispatch(userActions.message(""));
    dispatch(userActions.setLoad(true));
    try {
        const token = localStorage.getItem("token");
        let response = await userService.changePassword(data, token);
        dispatch(userActions.complete(response.data.message));
        dispatch(userActions.setLoad(false));
    } catch (e) {
        dispatch(userActions.message(e.response.data));
        dispatch(userActions.setLoad(false));
    }
    dispatch(userActions.setLoad(false));
};

export const changeRate = (id, data) => async (dispatch) => {
    dispatch(userActions.message(""));
    dispatch(userActions.setLoad(true));
    try {
        const token = localStorage.getItem("token");
        let response = await userService.changeRate(id, data, token);
        dispatch(userActions.complete(response.data.message));
        dispatch(getProfileInfo(id));
        dispatch(userActions.setLoad(false));
    } catch (e) {
        dispatch(userActions.message(e.response.data));
        dispatch(userActions.setLoad(false));
    }
    dispatch(userActions.setLoad(false));
};

export default userReducer;
