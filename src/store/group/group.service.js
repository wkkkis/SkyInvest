import { instance } from "@utils/axios.instance";

const APP_URL = "/copytrade/trade_group/";
const INVESTOR_URL = "/users/";

export const groupService = {
    getGroup: async (id, token) => {
        return await instance.get(`${APP_URL}${id}`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
    },
    join: async (id, sum, token) => {
        return await instance.post(
            `${APP_URL}join/`,
            {
                id: id,
                invested_sum: sum,
            },
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
        );
    },
    leave: async (id, token) => {
        return await instance.post(
            `${APP_URL}${id}/leave_from_group/`,
            {},
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
        );
    },
    getGroupInfo: async (id) => {
        return await instance.get(`${APP_URL}${id}`);
    },
    getAllGroups: async () => {
        return await instance.get(`${APP_URL}`);
    },
    getInvestorGroups: async (token) => {
        return await instance.get(`${INVESTOR_URL}groups/`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
    },
    getTraiderGroups: async (token) => {
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
