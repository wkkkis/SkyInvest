import { me } from "../user/user.api";
import { payService } from "./payment.service";

let initialState = {
    visa_key: null,
    message: "",
    usdt_for_pay: null,
    complete: false,
    loaded: false,
    confirm: "",
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
                complete: action.payload,
            };
        case "SET_COMPLETE":
            return {
                ...state,
                confirm: action.payload,
            };
        case "SET_USDT_KEY":
            return {
                ...state,
                usdt_for_pay: action.payload,
            };
        case "SET_LOAD_PAY":
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

export const payActions = {
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
        type: "SET_LOAD_PAY",
        payload: data,
    }),
    message: (message) => ({ type: "SET_MESSAGE", payload: message }),
    complete: (message) => ({ type: "SET_CONFIRM", payload: message }),
    usdtActive: (message) => ({ type: "SET_COMPLETE", payload: message }),
};

export const paymentVisa = (data) => async (dispatch) => {
    dispatch(payActions.message(""));
    dispatch(payActions.setLoad(true));
    try {
        const token = localStorage.getItem("token");
        let response = await payService.visa(data, token);
        dispatch(payActions.setVisaKey(response.data));
    } catch (e) {
        if (e.response.data.message) {
            dispatch(
                payActions.message({ message: [e.response.data.message] })
            );
        } else {
            dispatch(payActions.message(e.response.data));
        }
    }
    dispatch(payActions.setLoad(false));
};

export const cashUsd = (data) => async (dispatch) => {
    dispatch(payActions.message(""));
    dispatch(payActions.setLoad(true));
    try {
        const token = localStorage.getItem("token");
        let response = await payService.cash(data, token);
        dispatch(payActions.setVisaKey(response.data));
        dispatch(payActions.complete(response.data.message));
        dispatch(me());
        dispatch(payActions.setLoad(false));
    } catch (e) {
        dispatch(payActions.message(e.response.data));
        dispatch(payActions.setLoad(false));
    }
    dispatch(payActions.setLoad(false));
};

export const ustdPayment = () => async (dispatch) => {
    dispatch(payActions.message(""));
    dispatch(payActions.setLoad(true));
    try {
        const token = localStorage.getItem("token");
        let response = await payService.usdtForPay(token);
        dispatch(payActions.setUsdtKey(response.data));
        dispatch(payActions.setLoad(false));
    } catch (e) {
        dispatch(payActions.message(e.response.data));
        dispatch(payActions.setLoad(false));
    }
    dispatch(payActions.setLoad(false));
};

export const ustdConfirm = () => async (dispatch) => {
    dispatch(payActions.message(""));
    dispatch(payActions.setLoad(true));
    try {
        const token = localStorage.getItem("token");
        let response = await payService.usdtForConfirm(token);
        if (response.status === 201) {
            dispatch(payActions.usdtActive("usdt_active"));
        }
        dispatch(payActions.setLoad(false));
    } catch (e) {
        dispatch(payActions.message(e.response.data));
        dispatch(payActions.setLoad(false));
    }
    dispatch(payActions.setLoad(false));
};

export const ustdDeposit = (data) => async (dispatch) => {
    dispatch(payActions.message(""));
    dispatch(payActions.setLoad(true));
    try {
        const token = localStorage.getItem("token");
        let response = await payService.usdtForDeposit(data, token);
        dispatch(payActions.setUsdtKey(response.data));
        dispatch(payActions.setLoad(false));
    } catch (e) {
        dispatch(payActions.message(e.response.data));
        dispatch(payActions.setLoad(false));
    }
    dispatch(payActions.setLoad(false));
};

export default payReducer;
