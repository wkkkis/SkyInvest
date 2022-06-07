import { historyService } from "./history.service";

let initialState = {
    history: null,
    message: "",
    group: null,
    load: false,
    complete: "",
};

const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_HISTORY":
            return {
                ...state,
                history: action.payload,
            };
        case "SET_LOAD":
            return {
                ...state,
                load: action.payload,
            };
        case "SET_MESSAGE":
            return {
                ...state,
                message: action.payload,
            };
        case "SET_CONFIRM":
            return {
                ...state,
                complete: action.payload,
            };
        default:
            return state;
    }
};

export const groupActions = {
    setHistory: (data) => ({
        type: "SET_HISTORY",
        payload: data,
    }),
    setload: (data) => ({
        type: "SET_LOAD",
        payload: data,
    }),
    message: (message) => ({ type: "SET_MESSAGE", payload: message }),
    complete: (message) => ({ type: "SET_CONFIRM", payload: message }),
};

export const getHistoryJoinGroup =
    (start = "", end = "") =>
    async (dispatch) => {
        dispatch(groupActions.message(""));
        dispatch(groupActions.setload(true));
        try {
            const token = localStorage.getItem("token");
            let response = await historyService.getJoinToGroup(
                token,
                start,
                end
            );
            dispatch(groupActions.setHistory(response.data));
        } catch (e) {
            if (e.response.data.message) {
                dispatch(
                    groupActions.message({ message: [e.response.data.message] })
                );
            } else {
                dispatch(groupActions.message(e.response.data));
            }
        }
        dispatch(groupActions.setload(false));
    };

export const getHistoryPayments =
    (start = "", end = "") =>
    async (dispatch) => {
        dispatch(groupActions.message(""));
        dispatch(groupActions.setload(true));
        try {
            const token = localStorage.getItem("token");
            let response = await historyService.getPayments(token, start, end);
            dispatch(groupActions.setHistory(response.data));
        } catch (e) {
            if (e.response.data.message) {
                dispatch(
                    groupActions.message({ message: [e.response.data.message] })
                );
            } else {
                dispatch(groupActions.message(e.response.data));
            }
        }
        dispatch(groupActions.setload(false));
    };

export const getHistoryCash =
    (start = "", end = "") =>
    async (dispatch) => {
        dispatch(groupActions.message(""));
        dispatch(groupActions.setload(true));
        try {
            const token = localStorage.getItem("token");
            let response = await historyService.getWithdraws(token, start, end);
            dispatch(groupActions.setHistory(response.data));
        } catch (e) {
            if (e.response.data.message) {
                dispatch(
                    groupActions.message({ message: [e.response.data.message] })
                );
            } else {
                dispatch(groupActions.message(e.response.data));
            }
            throw Error;
        }
        dispatch(groupActions.setload(false));
    };

export default historyReducer;
