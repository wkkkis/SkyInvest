import { instance } from "@utils/axios.instance";

const USER_URL = "/users/";
const AUTH_URL = "/auth/";
const TRAID_URL = "/copytrade/";

const me = async (token) => {
    const res = await instance.get(`${USER_URL}dashboard/`, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });

    return res;
};

const getMyGroups = async (token) => {
    const res = await instance.get(`${USER_URL}groups/`, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });

    return res;
};

const register = async (userData) => {
    const res = await instance.post(`${AUTH_URL}register/`, userData);

    return res;
};

const paymentVisa = async (token, userData) => {
    const res = await instance.post(`/payment/`, userData, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });

    return res;
};

const login = async (userData) => {
    const res = await instance.post(`${AUTH_URL}login/`, userData);

    return res;
};

const reset_password = async (userData) => {
    const res = await instance.post(`${AUTH_URL}reset_password/`, userData);

    return res;
};

const confirm_password = async (userData) => {
    const res = await instance.post(
        `${AUTH_URL}reset_password_confirm/`,
        userData
    );

    return res;
};

const activation = async (userData) => {
    const res = await instance.post(`${AUTH_URL}activation/`, userData);

    return res;
};

const trader_apply = async (token, userData) => {
    const res = await instance.post(
        `${USER_URL}trader/apply_for_trader/`,
        userData,
        {
            headers: {
                Authorization: `Token ${token}`,
            },
        }
    );

    return res;
};

const imageVerification = async (userData, token) => {
    const res = await instance.post(`${USER_URL}upload_image/`, userData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`,
        },
    });

    return res;
};

const verification = async (userData, token) => {
    const res = await instance.post(`${USER_URL}verification/`, userData, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });

    return res;
};

const getVerificationStatus = async (token) => {
    const res = await instance.get(`${USER_URL}verification/`, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });

    return res;
};

const getBalance = async (token) => {
    const res = await instance.get(`${USER_URL}balance/`, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });

    return res;
};

const getAnyUser = async (id) => {
    const res = await instance.get(`${USER_URL}trader/${id}/trader_info/`, {
        // headers: {
        //     Authorization: `Token ${id}`,
        // },
    });

    return res;
};

const createGroup = async (userData, token) => {
    const res = await instance.post(`${TRAID_URL}trade_group/`, userData, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });

    return res;
};

const logout = async (token) => {
    const res = await instance.post(
        `${AUTH_URL}logout/`,
        {},
        {
            headers: {
                Authorization: `Token ${token}`,
            },
        }
    );

    return res;
};

const editUser = async (data, token) => {
    const res = await instance.patch(`${USER_URL}profile/`, data, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });

    return res;
};

const getTraiderGroup = async (token) => {
    const res = await instance.get(`${TRAID_URL}trade_group/`, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });

    return res;
};

const userService = {
    me,
    getMyGroups,
    createGroup,
    logout,
    register,
    editUser,
    paymentVisa,
    trader_apply,
    login,
    getBalance,
    reset_password,
    getAnyUser,
    confirm_password,
    activation,
    verification,
    getTraiderGroup,
    imageVerification,
    getVerificationStatus,
};

export default userService;
