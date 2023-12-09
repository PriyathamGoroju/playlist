import axios from "axios";
import { toast } from "react-toastify";

export const noAuth = async ({ method, url, data = {}, options = {} }) => {
    try {
        const headers = options?.headers || {};
        delete options["headers"];
        const res = await axios({
            method,
            url: `${process.env.REACT_APP_API_URL}${url}`,
            data,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            ...options,
        });
        console.log(res.data);

        return res.data;
    } catch (err) {
        toast.error(err?.response?.data?.message || err?.message || "Something went wrong!");
    }
};
