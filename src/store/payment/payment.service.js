import axios from "axios";
import { instance } from "../../utils/axios.instance";

const APP_URL = "/payment/";

const visa = async (data, token) => {
    const res = await instance.post(
        `${APP_URL}`,
        {
            amount: data,
        },
        {
            headers: {
                Authorization: `Token ${token}`,
            },
        }
    );

    return res;
};

const cash = async (data, token) => {
    const res = await instance.post(`/withdraw/`, data, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });

    return res;
};

const usdtForPay = async (token) => {
    const res = await instance.get(`${APP_URL}tether/get_deposit_address/`, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });

    return res;
};

const usdtForConfirm = async (token) => {
    const res = await instance.post(
        `${APP_URL}tether/`,
        {},
        {
            headers: {
                Authorization: `Token ${token}`,
            },
        }
    );

    return res;
};

const usdtForDeposit = async (data, token) => {
    const res = await instance.patch(
        `${APP_URL}tether/${data}/confirm/`,
        data,
        {
            headers: {
                Authorization: `Token ${token}`,
            },
        }
    );

    return res;
};

export const payService = {
    visa,
    cash,
    usdtForPay,
    usdtForDeposit,
    usdtForConfirm,
};
