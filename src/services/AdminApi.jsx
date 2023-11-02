import axios from "axios";

// const API_URL = "http://localhost:8000/";
const API_URL = "https://backend-peach-phi.vercel.app/";


const createAxiosInstance = () => {
    return axios.create({
        baseURL: API_URL,
        timeout: 30000,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
            accept: "application/json",
        },
    });
};


export async function login(token) {
    const response = await axios.post(`${API_URL}auth/github`, { accessToken: token });
    if (response.status === 200) {
        createAxiosInstance()
    }
    return response.data;
}

export async function getSkills() {
    const responce = await createAxiosInstance().get("/skill");
    return responce.data;
}

export async function createSkill(data) {
    const responce = await createAxiosInstance().post("/skill", data);
    return responce.data;
}

export async function updateSkill(data) {
    const id = data.get("id");
    const responce = await createAxiosInstance().patch(`skill/ ${id}`, data);
    return responce.data;
}

export async function deleteSkill(id) {
    const responce = await createAxiosInstance().delete(`skill / ${id}`);
    return responce.data;
}

export async function getProjects() {
    const responce = await createAxiosInstance().get("/project");
    return responce.data;
}

export async function createProject(data) {
    const responce = await createAxiosInstance().post("/project", data);
    return responce.data;
}

export async function updateProject(data) {
    const id = data.get("id");
    const responce = await createAxiosInstance().patch(`project / ${id}`, data);
    return responce.data;
}

export async function deleteProject(id) {
    const responce = await createAxiosInstance().delete(`project / ${id}`);
    return responce.data;
}

export async function getUserData() {
    const responce = await createAxiosInstance().get("/user");

    return responce.data;
}

export async function updateUserData(data) {
    const responce = await createAxiosInstance().patch("/user", data);
    return responce.data;
}
