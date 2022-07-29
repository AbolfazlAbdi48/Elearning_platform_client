import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000"

export const getCourses = () => {
    let url = `${BASE_URL}/api/courses/`
    return axios.get(url)
}