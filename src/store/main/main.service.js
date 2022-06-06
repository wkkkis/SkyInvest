import { instance } from "@utils/axios.instance";

export const mainService = {
    getBanner: () => {
        return instance.get("/banner/");
    },
    getFaq: () => {
        return instance.get("/faq/");
    },
};
