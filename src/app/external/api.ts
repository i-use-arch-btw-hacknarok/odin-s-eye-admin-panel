import axios from "axios";

const api = axios.create({
    baseURL: 'https://4430-188-147-4-106.ngrok-free.app',
});

interface Conference
{
    id: string,
    topic: string,
    tags: string[],
    createdAt: string,
    "updatedAt": string,
    "videoId": string
}

const getData = async () => {
    try {
        const response = await api.get("/conferences");
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getDataById = async (id: any) => {
    try {
        const response = await api.get(`/conferences/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const postData = async (data: Conference) => {
    try {
        const response = await api.post("/conferences", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export {postData, getData, getDataById};
export type { Conference };

