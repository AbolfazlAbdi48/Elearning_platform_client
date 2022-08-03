import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000"

export const getCourses = () => {
    let url = `${BASE_URL}/api/courses/`
    return axios.get(url)
}

export const getCourse = (courseId) => {
    let url = `${BASE_URL}/api/courses/${courseId}`
    return axios.get(url)
}

export const getChapter = (chapterId) => {
    let url = `${BASE_URL}/api/chapters/${chapterId}`
    return axios.get(url)
}

export const getCurrentUser = (token) => {
    let url = `${BASE_URL}/api/rest-auth/user/`
    return axios.get(url, {
        headers: {
            'Authorization': `Token ${token}`
        }
    })
}

export const loginUser = (user) => {
    let url = `${BASE_URL}/api/rest-auth/login/`
    return axios.post(url, user)
}