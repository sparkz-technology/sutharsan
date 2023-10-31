import axios from "axios";
import Cookies from "js-cookie";

// const API_URL = "http://localhost:8000/";
const API_URL = "https://backend-peach-phi.vercel.app/";


const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
    },
    withCredentials: true,
});

const updateAuthorizationHeader = () => {
    const token = Cookies.get("token");
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
};

updateAuthorizationHeader();

axiosInstance.interceptors.request.use(
    (config) => {
        updateAuthorizationHeader();
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export async function login() {
    const responce = await axiosInstance.get("auth/github");
    return responce.data;
}

export async function getSkills() {
    const responce = await axiosInstance.get("/skill");
    return responce.data;
}

export async function createSkill(data) {
    const responce = await axiosInstance.post("/skill", data);
    return responce.data;
}

export async function updateSkill(data) {
    const id = data.get("id");
    const responce = await axiosInstance.patch(`skill/${id}`, data);
    return responce.data;
}

export async function deleteSkill(id) {
    const responce = await axiosInstance.delete(`skill/${id}`);
    return responce.data;
}

export async function getProjects() {
    const responce = await axiosInstance.get("/project");
    return responce.data;
}

export async function createProject(data) {
    const responce = await axiosInstance.post("/project", data);
    return responce.data;
}

export async function updateProject(data) {
    const id = data.get("id");
    const responce = await axiosInstance.patch(`project/${id}`, data);
    return responce.data;
}

export async function deleteProject(id) {
    const responce = await axiosInstance.delete(`project/${id}`);
    return responce.data;
}

export async function getUserData() {
    const responce = await axios.get(`${API_URL}user`, {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
        }
    });

    return responce.data;
}

export async function updateUserData(data) {
    const responce = await axiosInstance.patch("/user", data);
    return responce.data;
}
