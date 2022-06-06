import { payService } from "./payment.service";

let initialState = {
    visa_key: null,
    message: "",
    usdt_for_pay: null,
    confirm: false,
    loaded: false,
};

const payReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_VISA_KEY":
            return {
                ...state,
                visa_key: action.payload,
            };
        case "SET_CONFIRM":
            return {
                ...state,
                confirm: action.payload,
            };
        case "SET_USDT_KEY":
            return {
                ...state,
                usdt_for_pay: action.payload,
            };
        case "SET_LOAD":
            return {
                ...state,
                loaded: action.payload,
            };
        case "SET_MESSAGE":
            return {
                ...state,
                message: action.payload,
            };
        default:
            return state;
    }
};

export const actions = {
    setVisaKey: (data) => ({
        type: "SET_VISA_KEY",
        payload: data,
    }),
    setConfirm: (data) => ({
        type: "SET_CONFIRM",
        payload: data,
    }),
    setUsdtKey: (data) => ({
        type: "SET_USDT_KEY",
        payload: data,
    }),
    setLoad: (data) => ({
        type: "SET_LOAD",
        payload: data,
    }),
    message: (message) => ({ type: "SET_MESSAGE", payload: message }),
};

export const paymentVisa = (data) => async (dispatch) => {
    dispatch(actions.message(""));
    try {
        dispatch(actions.setLoad(true));
        const token = localStorage.getItem("token");
        let response = await payService.visa(data, token);
        if (response.data) {
            dispatch(actions.setVisaKey(response.data));
        }
        dispatch(actions.setLoad(false));
    } catch (e) {
        if (e.response) {
            dispatch(actions.message("visa_false"));
        }
    }
};

export const ustdPayment = () => async (dispatch) => {
    dispatch(actions.message(""));
    try {
        dispatch(actions.setLoad(true));
        const token = localStorage.getItem("token");
        let response = await payService.usdtForPay(token);
        if (response.data) {
            dispatch(actions.setUsdtKey(response.data));
        }
        dispatch(actions.setLoad(false));
    } catch (e) {
        dispatch(actions.message(e.response.data));
    }
};

export const ustdConfirm = () => async (dispatch) => {
    dispatch(actions.message(""));
    try {
        dispatch(actions.setLoad(true));
        const token = localStorage.getItem("token");
        let response = await payService.usdtForConfirm(token);
        if (response.data) {
            dispatch(actions.setConfirm(true));
        }
        dispatch(actions.setLoad(false));
    } catch (e) {
        dispatch(actions.message(e.response.data));
    }
};

export const ustdDeposit = (data) => async (dispatch) => {
    dispatch(actions.message(""));
    try {
        dispatch(actions.setLoad(true));
        const token = localStorage.getItem("token");
        let response = await payService.usdtForDeposit(data, token);
        if (response.data) {
            dispatch(actions.setUsdtKey(response.data));
        }
        dispatch(actions.setLoad(false));
    } catch (e) {
        dispatch(actions.message(e.response.data));
    }
};

export default payReducer;
