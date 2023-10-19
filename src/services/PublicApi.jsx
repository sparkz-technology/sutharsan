import axios from "axios";

const API_URL = "http://localhost:8000/";

export async function getuserDetails() {
    const responce = await axios.get(`${API_URL}user/details`);
    return responce.data;
}