import { useEffect } from "react";
import { useState } from "react";
import { sendEmail } from "../services/apiEmail";
export default function useNodemailer() {
  const [message, setMessage] = useState("");
  const [fName, setFName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [issend, setIssend] = useState(true);
  const [showMessage, setShowMessage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      await sendEmail(fName, message);
      setIsLoading(false);
      setSuccessMessage("Message sent successfully");
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };
  return {
    handleSubmit,
    message,
    setMessage,
    fName,
    setFName,
    successMessage,
    errorMessage,
    issend,
    showMessage,
    isLoading,
  };
}
