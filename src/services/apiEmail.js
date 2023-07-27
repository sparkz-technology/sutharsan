import Axios from "axios";

export async function sendEmail(fName, message) {
  const res = await Axios.post(
    "https://backend-peach-phi.vercel.app/api/form",
    {
      fName,
      message,
    }
  );
  return res.data;
}
export async function fetchIpAddress({ setResponce }) {
  try {
    const response = await Axios.get("https://api.ipify.org?format=json");
    setResponce(response.data.ip);
  } catch (error) {
    setResponce("Error", error);
  }
}
export async function postIpAddress({ responce }) {
  await Axios.post("https://backend-peach-phi.vercel.app/api/ip", {
    ipAddress: responce,
  });
}
