import secuService from "./secu.service";

let initialState = {
    secu: false,
    qr: null,
    auth: false,
    pay: false,
    messages: "",
    complete: "",
};

const secuReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_QR":
            return {
                ...state,
                qr: action.payload,
            };
        case "CHANGE_AUTH":
            return {
                ...state,
                auth: action.payload,
            };
        case "CHANGE_PAY":
            return {
                ...state,
                pay: action.payload,
            };
        case "SET_MESSAGE_SECU":
            return {
                ...state,
                messages: action.payload,
            };
        case "SET_SECU":
            return {
                ...state,
                secu: action.payload,
            };
        default:
            return state;
    }
};

export const secuAactions = {
    setQr: (data) => ({
        type: "SET_QR",
        payload: data,
    }),
    setSecu: (toggle) => ({
        type: "SET_SECU",
        payload: toggle,
    }),
    changeAuth: (toggle) => ({
        type: "CHANGE_AUTH",
        payload: toggle,
    }),
    changePay: (toggle) => ({
        type: "CHANGE_PAY",
        payload: toggle,
    }),
    message: (message) => ({ type: "SET_MESSAGE_SECU", payload: message }),
};

export const create2FA = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        let response = await secuService.create2fa(token);
        if (response.data) {
            dispatch(secuAactions.setQr(response.data));
        }
    } catch (e) {
        dispatch(secuAactions.message(e.response.data));
    }
};

export const update2FA = (data) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        let response = await secuService.update2fa(token, data);
        if (response.data) {
            dispatch(get2FAInfo());
        }
    } catch (e) {
        dispatch(secuAactions.message(e.response.data));
    }
};

export const verify2FA = (code) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        let response = await secuService.verify2fa(token, code);
        if (response) {
            dispatch(get2FAInfo());
        }
    } catch (e) {
        dispatch(secuAactions.message(e.response.data));
    }
};

export const delete2FA = (twofa) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        let response = await secuService.delete2fa(token, twofa);
        if (response) {
            dispatch(get2FAInfo());
        }
    } catch (e) {
        dispatch(secuAactions.message(e.response.data));
    }
};

export const get2FAInfo = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        let response = await secuService.info2fa(token);
        const { otp_for_login, otp_for_withdraw } = response.data;
        dispatch(secuAactions.changeAuth(otp_for_login));
        dispatch(secuAactions.changePay(otp_for_withdraw));
        if (otp_for_login || otp_for_withdraw) {
            dispatch(secuAactions.setSecu(true));
        } else {
            dispatch(secuAactions.setSecu(false));
        }
    } catch (e) {
        dispatch(secuAactions.message(e.response.data));
    }
};

export default secuReducer;
