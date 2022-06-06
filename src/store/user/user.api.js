import userService from "./user.service";

let initialState = {
    user: null,
    messages: null,
    groups: null,
    isAuth: false,
    isTraider: false,
    payment: null,
    loaded: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                ...action.payload,
            };
        case "SET_GROUP":
            return {
                ...state,
                groups: action.payload,
            };
        case "SET_PAYMENT":
            return {
                ...state,
                payment: action.payload,
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

export const actions = {
    setDataUser: (data) => ({
        type: "SET_USER",
        payload: { user: data, isTraider: data.is_trader },
    }),
    setIsAuth: (toggle) => ({
        type: "SET_IS_AUTH",
        payload: toggle,
    }),
    setPay: (data) => ({
        type: "SET_PAYMENT",
        payload: data,
    }),
    setDataGroup: (data) => ({
        type: "SET_GROUP",
        payload: data,
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
};

export const paymetVisa = (data) => async (dispatch) => {
    try {
        dispatch(actions.setLoad(true));
        const token = localStorage.getItem("token");
        let response = await userService.paymentVisa(token, data);
        if (response.data) {
            dispatch(actions.setPay(response.data));
        }
        dispatch(actions.setLoad(false));
    } catch (e) {
        if (e.response) {
            dispatch(actions.message("visa_false"));
        }
    }
};

export const binanceApiActive = (data) => async (dispatch) => {
    try {
        dispatch(actions.setLoad(true));
        const token = localStorage.getItem("token");
        let response = await userService.trader_apply(token, data);
        if (response.data) {
            dispatch(actions.message("binance_active"));
        }
        dispatch(actions.setLoad(false));
    } catch (e) {
        if (e.response.data.message) {
            dispatch(actions.message(e.response.data.message[0]));
        }
    }
};

export const login = (data) => async (dispatch) => {
    try {
        dispatch(actions.setLoad(true));
        let response = await userService.login(data);
        if (response.data) {
            dispatch(actions.setIsAuth(true));
            localStorage.setItem("token", response.data.auth_token);
        }
        dispatch(actions.setLoad(false));
    } catch (e) {
        if (e.response.data) {
            dispatch(actions.message(e.response.data));
        }
    }
};

export const activation = (data) => async (dispatch) => {
    try {
        dispatch(actions.setLoad(true));
        let response = await userService.activation(data);
        if (response.status === 204) {
            dispatch(actions.message("activated"));
        }
        dispatch(actions.setLoad(false));
    } catch (e) {
        dispatch(actions.message("error_activation"));
    }
};

export const regiter = (data) => async (dispatch) => {
    try {
        dispatch(actions.setLoad(true));
        let response = await userService.register(data);
        if (response.status === 201) {
            dispatch(actions.message("register_success"));
        } else {
            dispatch(actions.message(response.data));
        }
        dispatch(actions.setLoad(false));
    } catch (e) {
        dispatch(actions.message(e.response.data));
    }
};

export const me = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        let response = await userService.me(token);
        if (response.data) {
            dispatch(actions.setIsAuth(true));
            dispatch(actions.setDataUser(response.data));
        }
    } catch (e) {
        dispatch(actions.message("error_me"));
    }
};

export const getMyGroups = () => async (dispatch) => {
    try {
        dispatch(actions.setLoad(true));
        const token = localStorage.getItem("token");
        let response = await userService.getMyGroups(token);
        if (response.data) {
            dispatch(actions.setDataGroup(response.data));
        }
        dispatch(actions.setLoad(false));
    } catch (e) {
        dispatch(actions.message("error_groups"));
    }
};

export const logOut = () => async (dispatch) => {
    try {
        dispatch(actions.setLoad(true));
        const token = localStorage.getItem("token");
        let response = await userService.logout(token);
        if (response) {
            localStorage.removeItem("token");
            dispatch(actions.resetUser());
            dispatch(actions.setIsAuth(false));
        }
        dispatch(actions.setLoad(false));
    } catch (e) {
        dispatch(actions.message("error_logout"));
    }
};

export const resetPassword = (email) => async (dispatch) => {
    try {
        dispatch(actions.setLoad(true));
        let response = await userService.reset_password(email);
        if (response) {
            dispatch(actions.message("reset_success"));
        }
        dispatch(actions.setLoad(false));
    } catch (e) {
        dispatch(actions.message("error_reset"));
    }
};

export const confirmPassword = (data) => async (dispatch) => {
    try {
        dispatch(actions.setLoad(true));
        let response = await userService.confirm_password(data);
        if (response) {
            dispatch(actions.message("confirm_password_success"));
        }
        dispatch(actions.setLoad(false));
    } catch (e) {
        dispatch(actions.message("error_confirm_password"));
    }
};

export const verification = (data) => async (dispatch) => {
    try {
        dispatch(actions.setLoad(true));
        const token = localStorage.getItem("token");
        let response = await userService.verification(data, token);
        if (response) {
            dispatch(actions.message("verification_success"));
        }
        dispatch(actions.setLoad(false));
    } catch (e) {
        dispatch(actions.message("error_confirm_password"));
    }
};

export const createGroup = (data) => async (dispatch) => {
    try {
        dispatch(actions.setLoad(true));
        const token = localStorage.getItem("token");
        let response = await userService.createGroup(data, token);
        if (response) {
            dispatch(actions.message("group_create_success"));
            dispatch(getTraiderGroup());
        }
        dispatch(actions.setLoad(false));
    } catch (e) {
        dispatch(actions.message("error_group_create"));
    }
};

export const getTraiderGroup = () => async (dispatch) => {
    try {
        dispatch(actions.setLoad(true));
        const token = localStorage.getItem("token");
        let response = await userService.getTraiderGroup(token);
        if (response) {
            dispatch(actions.setDataGroup(response.data));
        }
        dispatch(actions.setLoad(false));
    } catch (e) {
        dispatch(actions.message("error_group"));
    }
};

export const editUser = (data) => async (dispatch) => {
    try {
        dispatch(actions.setLoad(true));
        const token = localStorage.getItem("token");
        let response = await userService.editUser(data, token);
        if (response) {
            dispatch(me());
        }
        dispatch(actions.setLoad(false));
    } catch (e) {
        if (e.response.data) {
            dispatch(actions.message(e.response.data));
        }
    }
};

export default userReducer;
