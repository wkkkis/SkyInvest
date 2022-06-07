import { instance } from "@utils/axios.instance";

const AUTH_URL = "/auth/";

const register = async (userData) => {
    const res = await instance.post(`${AUTH_URL}register/`, userData);

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

const authService = {
    logout,
    register,
    login,
    reset_password,
    confirm_password,
    activation,
};

export default authService;
