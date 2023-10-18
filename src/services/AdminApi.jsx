import axios from "axios";

const API_URL = "http://localhost:8000";

// create a new axios instance
const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 30000,
});

// before a request is made start the nprogress
// axiosInstance.interceptors.request.use((config) => {
//     //   NProgress.start();
//     return config;
// });
export async function getSkills() {
    const responce = await axiosInstance.get("/skill");
    return responce.data;
}
export async function createSkill(data) {
    console.log("Data:", data);
    const responce = await axiosInstance.post("/skill", data);
    return responce.data;
}
export async function updateSkill(data) {
    const id = data.get("id");
    console.log("Data:", data);
    const responce = await axiosInstance.patch(`skill/${id}`, data);
    console.log("Responce:", responce);
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
    console.log("Data:", data);
    const responce = await axiosInstance.post("/project", data);
    return responce.data;
}

export async function updateProject(data) {
    const id = data.get("id");
    console.log("Data:", data);
    const responce = await axiosInstance.patch(`project/${id}`, data);
    console.log("Responce:", responce);
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
    console.log("Data:", data);
    const responce = await axiosInstance.patch("/user", data);
    return responce.data;
}