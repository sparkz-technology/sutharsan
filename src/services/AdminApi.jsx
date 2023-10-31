import axios from "axios";
import Cookies from "js-cookie";

// const API_URL = "http://localhost:8000/";
const API_URL = "https://backend-peach-phi.vercel.app/";


const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 30000,
    credentials: "include",
    headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
        accept: "application/json",
    },
    withCredentials: true,
});


// export async function login() {
//     const responce = await axiosInstance.get("auth/github");
//     return responce.data;
// }

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
    const responce = await axiosInstance.get("/user");

    return responce.data;
}

export async function updateUserData(data) {
    const responce = await axiosInstance.patch("/user", data);
    return responce.data;
}
