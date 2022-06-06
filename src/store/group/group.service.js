import { instance } from "@utils/axios.instance";

const APP_URL = "/copytrade/trade_group/";

export const groupService = {
    getGroup: async (id, token) => {
        return await instance.get(`${APP_URL}${id}`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
    },
    getGroups: async (token) => {
        return await instance.get(`${APP_URL}`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
    },
    createGroup: async (data, token) => {
        return await instance.post(`${APP_URL}`, data, {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
    },
    deteleGroup: async (id, data, token) => {
        return await instance.post(`${APP_URL}${id}/delete/`, data, {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
    },
};
