import { authActions } from "../auth/auth.api";
import { payActions } from "../payment/pay.api";
import { userActions } from "../user/user.api";
import { groupService } from "./group.service";

let initialState = {
    groups: null,
    message: "",
    group: null,
    load: false,
    complete: "",
};

const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_GROUPs":
            return {
                ...state,
                groups: action.payload,
            };
        case "SET_GROUP":
            return {
                ...state,
                group: action.payload,
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
    setGroups: (data) => ({
        type: "SET_GROUPs",
        payload: data,
    }),
    setload: (data) => ({
        type: "SET_LOAD",
        payload: data,
    }),
    setGroup: (data) => ({
        type: "SET_GROUP",
        payload: data,
    }),
    message: (message) => ({ type: "SET_MESSAGE", payload: message }),
    complete: (message) => ({ type: "SET_CONFIRM", payload: message }),
};

export const messageClean = () => async (dispatch) => {
    dispatch(groupActions.message(""));
    dispatch(userActions.message(""));
    dispatch(payActions.message(""));
    dispatch(authActions.message(""));
};

export const confirmClean = () => async (dispatch) => {
    debugger;
    dispatch(groupActions.complete(""));
};

export const getAllGroups = () => async (dispatch) => {
    dispatch(groupActions.message(""));
    dispatch(groupActions.setload(true));
    try {
        const token = localStorage.getItem("token");
        let response = await groupService.getAllGroups(token);
        dispatch(groupActions.setGroups(response.data));
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

export const joinToGroup = (id, sum) => async (dispatch) => {
    dispatch(groupActions.message(""));
    dispatch(groupActions.setload(true));
    try {
        const token = localStorage.getItem("token");
        let response = await groupService.join(id, sum, token);
        dispatch(groupActions.complete(response.data.message));
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

export const leaveFromGroup = (id) => async (dispatch) => {
    dispatch(groupActions.message(""));
    dispatch(groupActions.setload(true));
    try {
        const token = localStorage.getItem("token");
        let response = await groupService.leave(id, token);
        dispatch(groupActions.complete(response.data.message));
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

export const getInvestorGroups = () => async (dispatch) => {
    dispatch(groupActions.message(""));
    dispatch(groupActions.setload(true));
    try {
        const token = localStorage.getItem("token");
        let response = await groupService.getInvestorGroups(token);
        if (response.data) {
            dispatch(groupActions.setGroups(response.data));
        }
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

export const getGroupInfo = (id) => async (dispatch) => {
    dispatch(groupActions.message(""));
    dispatch(groupActions.setload(true));
    try {
        let response = await groupService.getGroupInfo(id);
        dispatch(groupActions.setGroup(response.data));
    } catch (e) {
        dispatch(groupActions.message(e.response.data));
    }
    dispatch(groupActions.setload(false));
};

export const getTraiderGroups = () => async (dispatch) => {
    dispatch(groupActions.message(""));
    dispatch(groupActions.setload(true));
    try {
        const token = localStorage.getItem("token");
        let response = await groupService.getTraiderGroups(token);
        dispatch(groupActions.setGroups(response.data));
    } catch (e) {
        dispatch(groupActions.message(e.response.data));
    }
    dispatch(groupActions.setload(false));
};

export const getGroup = (id) => async (dispatch) => {
    dispatch(groupActions.message(""));
    dispatch(groupActions.setload(true));
    try {
        const token = localStorage.getItem("token");
        let response = await groupService.getGroup(id, token);
        if (response.data) {
            dispatch(groupActions.setGroup(response.data));
        }
    } catch (e) {
        dispatch(groupActions.message(e.response.data));
    }
    dispatch(groupActions.setload(false));
};

export const createGroup = (data) => async (dispatch) => {
    dispatch(groupActions.message(""));
    dispatch(groupActions.setload(true));
    try {
        const token = localStorage.getItem("token");
        let response = await groupService.createGroup(data, token);
        dispatch(groupActions.complete(response.data.message));
    } catch (e) {
        dispatch(groupActions.message(e.response.data));
    }
    dispatch(groupActions.setload(false));
};

export const deleteGroup = (id, data) => async (dispatch) => {
    dispatch(groupActions.message(""));
    dispatch(groupActions.setload(true));
    try {
        const token = localStorage.getItem("token");
        let response = await groupService.deteleGroup(id, data, token);
        dispatch(groupActions.complete(response.data.message));
    } catch (e) {
        dispatch(groupActions.message(e.response.data));
    }
    dispatch(groupActions.setload(false));
};

export default groupReducer;
