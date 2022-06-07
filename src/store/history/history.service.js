import { instance } from "@utils/axios.instance";

const APP_URL = "/users/history";

export const historyService = {
    getJoinToGroup: (token, start, end) => {
        return instance.get(
            `${APP_URL}/join_to_groups${
                !start && !end ? "/" : `?start_date=${start}&end_date=${end}`
            }`,
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
        );
    },
    getPayments: (token, start, end) => {
        return instance.get(
            `${APP_URL}/payments${
                !start && !end ? "/" : `?start_date=${start}&end_date=${end}`
            }`,
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
        );
    },
    getWithdraws: (token, start, end) => {
        return instance.get(
            `${APP_URL}/withdraws${
                !start && !end ? "/" : `?start_date=${start}&end_date=${end}`
            }`,
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
        );
    },
};
