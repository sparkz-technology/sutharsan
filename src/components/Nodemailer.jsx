/* eslint-disable no-useless-catch */
import { useEffect, useState } from "react";
import Axios from "axios";
import styles from "./Nodemailer.module.css";
import Button from "./Button";
function Nodemailer() {
  const [message, setMessage] = useState("");
  const [fName, setFName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [issend, setIssend] = useState(true);
  const [showMessage, setShowMessage] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [errorMessage, successMessage]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessMessage("");
    setErrorMessage("");
    setFName("");
    setIssend(false);
    setShowMessage(true);
    try {
      await sendEmail(fName, message);
      setSuccessMessage("Email sent successfully");
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };
  return (
    <>
      {issend && (
        <div className={styles.Nodemailer}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={fName}
              required
              onChange={(e) => setFName(e.target.value)}
            />
            <textarea
              type="text"
              placeholder="Message"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            />
            <div>
              <Button type="submit">Send</Button>
            </div>
          </form>
        </div>
      )}
      {showMessage && (
        <>
          {errorMessage && <p>{errorMessage}</p>}
          {successMessage && <p>{successMessage}</p>}
        </>
      )}
    </>
  );
}

export default Nodemailer;
async function sendEmail(fName, message) {
  try {
    await Axios.post("http://localhost:3000/api/form", {
      fName,
      message,
    });
  } catch (err) {
    throw err;
  }
}