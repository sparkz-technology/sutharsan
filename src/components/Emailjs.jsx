import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import emailjs from "emailjs-com";

function Emailjs() {
  emailjs.init("ZyAzfFqfwOGHppQzN");
  const [ipAddress, setIpAddress] = useState(null);

  const sendEmail = useCallback(() => {
    emailjs
      .send("service_cdca5de", "template_pj4gpcf", {
        to_email: "sutharsansparkz@gmail.com",
        message: `Hello, this is an email sent from React! ${ipAddress}`,
      })
      .then((response) => {
        console.log("Email sent successfully!", response);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  }, [ipAddress]);

  useEffect(() => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        setIpAddress(response.data.ip);
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });

    // Move the sendEmail() function call here to ensure the IP address is updated before sending the email
    sendEmail();
  }, [sendEmail]);

  return <div></div>;
}

export default Emailjs;
