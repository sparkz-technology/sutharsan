import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "https://backend-peach-phi.vercel.app/";

export async function login() {
    const response = await axios.get(`${API_URL}auth/github`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
            accept: "application/json",
        },
        withCredentials: true,
    });
    return response.data;
}

export async function getSkills() {
    const response = await axios.get(`${API_URL}skill`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
            accept: "application/json",
        },
        withCredentials: true,
    });
    return response.data;
}

export async function createSkill(data) {
    const response = await axios.post(`${API_URL}skill`, data, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
            accept: "application/json",
        },
        withCredentials: true,
    });
    return response.data;
}

export async function updateSkill(data) {
    const id = data.id;
    const response = await axios.patch(`${API_URL}skill/${id}`, data, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
            accept: "application/json",
        },
        withCredentials: true,
    });
    return response.data;
}

export async function deleteSkill(id) {
    const response = await axios.delete(`${API_URL}skill/${id}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
            accept: "application/json",
        },
        withCredentials: true,
    });
    return response.data;
}

// Functions for projects...

export async function getProjects() {
    const response = await axios.get(`${API_URL}project`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
            accept: "application/json",
        },
        withCredentials: true,
    });
    return response.data;
}

// Functions for updating/deleting projects...

export async function getUserData() {
    const response = await axios.get(`${API_URL}user`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
            accept: "application/json",
        },
        withCredentials: true,
    });
    return response.data;
}

export async function updateUserData(data) {
    const response = await axios.patch(`${API_URL}user`, data, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
            accept: "application/json",
        },
        withCredentials: true,
    });
    return response.data;
}
