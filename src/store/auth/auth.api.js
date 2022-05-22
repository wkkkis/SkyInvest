import authService from "./auth.service";

let initialState = {
    userId: null,
    user: null,
    isAuth: false,
    messages: null,
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
    const obj = {
        email: "ishakishmahametov123@gmail.com",
        password: "12345678",
        phone_number: "996500100805",
        first_name: "Ishamahametov",
        last_name: "Iskhak",
    };
    let response = await authService.register(obj);
    if (response.data) {
        // dispatch(actions.getDataUser())
        console.log(response.data);
    }
};

export const logOut = () => async (dispatch) => {};

export default authReducer;
