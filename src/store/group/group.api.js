import { groupService } from "./group.service";

let initialState = {
    groups: null,
    message: "",
    group: null,
    load: false,
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
        default:
            return state;
    }
};

export const actions = {
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
};

export const messageClean = () => (dispatch) => {
    dispatch(actions.message(""));
};

export const getGroups = () => async (dispatch) => {
    dispatch(actions.message(""));
    try {
        const token = localStorage.getItem("token");
        let response = await groupService.getGroups(token);
        if (response.data) {
            dispatch(actions.setGroups(response.data));
        }
    } catch (e) {
        dispatch(actions.message(e.response.data));
    }
};

export const getGroup = (id) => async (dispatch) => {
    dispatch(actions.message(""));
    try {
        const token = localStorage.getItem("token");
        let response = await groupService.getGroup(id, token);
        if (response.data) {
            dispatch(actions.setGroup(response.data));
        }
    } catch (e) {
        dispatch(actions.message(e.response.data));
    }
};

export const createGroup = (data) => async (dispatch) => {
    dispatch(actions.message(""));
    try {
        const token = localStorage.getItem("token");
        let response = await groupService.createGroup(data, token);
        if (response.data) {
            dispatch(getGroups());
            dispatch(actions.message("complete"));
        }
    } catch (e) {
        dispatch(actions.message(e.response.data));
    }
};

export const deleteGroup = (id, data) => async (dispatch) => {
    dispatch(actions.message(""));
    try {
        const token = localStorage.getItem("token");
        let response = await groupService.deteleGroup(id, data, token);
        if (response.data) {
            dispatch(getGroups());
        }
    } catch (e) {
        dispatch(actions.message(e.response.data));
    }
};

export default groupReducer;
