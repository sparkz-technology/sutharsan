import axios from "axios";

const API_URL = "https://backend-peach-phi.vercel.app/";
// const API_URL = "http://localhost:8000/";



export async function getuserDetails() {
    const responce = await axios.get(`${API_URL}user/details`);
    return responce.data;
}

export async function sendMail(data) {
    const responce = await axios.post(`${API_URL}mail/message`, data);
    return responce.data;
}