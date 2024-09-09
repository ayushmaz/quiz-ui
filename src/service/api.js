import axiosInstance from "./axiosInstance"

export const API_GET_QUESTIONS = () => {
    return axiosInstance.get('/questions', {withCredentials: true});
}

export const API_POST_ANSWER = (id, payload) => {
    return axiosInstance.post(`/question/${id}/answer`, payload, {withCredentials: true});
}

export const API_SUBMIT_QUIZ = () => {
    return axiosInstance.post(`/submit`, {}, {withCredentials: true});
}