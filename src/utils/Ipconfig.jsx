import { useCallback, useEffect, useState } from "react";
import { fetchIpAddress, postIpAddress } from "../services/apiEmail";
function Ipconfig() {
  const [responce, setResponce] = useState(null);
  const sendEmail = useCallback(async () => {
    postIpAddress({ responce });
  }, [responce]);
  useEffect(() => {
    fetchIpAddress({ setResponce });
  }, []);

  useEffect(() => {
    if (responce) {
      sendEmail();
    }
  }, [responce, sendEmail]);
  return <></>;
}

export default Ipconfig;
