import { mainService } from "./main.service";

let initialState = {
    faq: null,
    message: "",
    bunner: null,
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_BUNNER":
            return {
                ...state,
                groups: action.payload,
            };
        case "SET_FAQ":
            return {
                ...state,
                faq: action.payload,
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
    setBanner: (data) => ({ type: "SET_BUNNER", payload: data }),
    setFaq: (data) => ({ type: "SET_FAQ", payload: data }),
    message: (message) => ({ type: "SET_MESSAGE", payload: message }),
};

export const getBanner = () => async (dispatch) => {
    try {
        let response = await mainService.getBanner();
        dispatch(actions.setBanner(response.data));
    } catch (e) {
        dispatch(actions.message(e.response.data));
    }
};

export const getFaq = () => async (dispatch) => {
    try {
        let response = await mainService.getFaq();
        dispatch(actions.setFaq(response.data));
    } catch (e) {
        dispatch(actions.message(e.response.data));
    }
};

export default mainReducer;
