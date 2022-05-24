import authService from "./auth.service";

let initialState = {
    userId: null,
    user: null,
    isAuth: false,
    messages: null,
    activeted: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload,
            };
        case "RESET_USER":
            return {
                ...state,
                ...action.payload,
            };
        case "ERROR_MESSAGE":
            return {
                ...state,
                messages: action.error,
            };
        case "ACTIVETED":
            return {
                ...state,
                activeted: true,
            };
        default:
            return state;
    }
};

export const actions = {
    getDataUser: (userId, user, isAuth) => ({
        type: "SET_USER_DATA",
        payload: { userId, user, isAuth },
    }),
    resetUser: () => ({
        type: "RESET_USER",
        payload: { userId: null, user: null, isAuth: false },
    }),
    errorMessage: (error) => ({ type: "ERROR_MESSAGE", error }),
    userNeedActive: () => ({ type: "ACTIVETED" }),
};

export const login = (email, password) => async (dispatch) => {
    const obj = {
        email,
        password,
    };
    let response = await authService.login(obj);
    if (response.data) {
        // dispatch(actions.getDataUser())
        console.log(response.data);
    }
};

export const regiter = (data) => async (dispatch) => {
    let response = await authService.register(data);
    if (response) {
        dispatch(actions.userNeedActive());
    }
};

export const logOut = () => async (dispatch) => {};

export default authReducer;
