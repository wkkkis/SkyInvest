import axios from "axios";
import { instance } from "@utils/axios.instance";

const API_URL = "/auth/";

const register = async (userData) => {
    const res = await instance.post(`${API_URL}register/`, userData);

    if (res.data) {
        localStorage.setItem("user", res.data);
    }

    return res.data;
};

const login = async (userData) => {
    const res = await instance.post(`${API_URL}login/`, userData);

    if (res.data) {
        localStorage.setItem("login", res);
    }

    return res.data;
};

const logout = async (userData) => {
    const res = await instance.post(`${API_URL}/logout`, userData);

    return res.data;
};

const reset_password = async (userData) => {
    const res = await instance.post(`${API_URL}/reset_password`, userData);

    return res.data;
};

const confirm_password = async (userData) => {
    const res = await instance.post(`${API_URL}/confirm_password`, userData);

    return res.data;
};

const authService = {
    register,
    login,
    logout,
    reset_password,
    confirm_password,
};

export default authService;
