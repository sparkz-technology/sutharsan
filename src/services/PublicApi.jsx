import axios from "axios";

const API_URL = "https://backend-peach-phi.vercel.app/";


export async function getuserDetails() {
    const responce = await axios.get(`${API_URL}user/details`);
    return responce.data;
}