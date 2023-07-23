/* eslint-disable no-useless-catch */
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
function Ipconfig() {
  const [ipAddress, setIpAddress] = useState(null);
  const sendEmail = useCallback(async () => {
    try {
      await axios.post("https://sutharsan-backend.vercel.app/api/ip", {
        ipAddress: ipAddress,
      });
    } catch (err) {
      throw err;
    }
  }, [ipAddress]);
  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setIpAddress(response.data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };
    fetchIpAddress();
  }, []);

  useEffect(() => {
    if (ipAddress) {
      sendEmail();
    }
  }, [ipAddress, sendEmail]);
  return <div></div>;
}

export default Ipconfig;
