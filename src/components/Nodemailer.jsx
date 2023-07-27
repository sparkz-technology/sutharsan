/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-useless-catch */
import styles from "./Nodemailer.module.css";
import Button from "./Button";
import LoaderBlur from "./LoaderBlur";
import useNodemailer from "../hooks/useNodemailer";
function Nodemailer() {
  const {
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
  } = useNodemailer();
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
      {isLoading && <LoaderBlur />}
      {showMessage && (
        <>
          {errorMessage && <span>{errorMessage}</span>}
          {successMessage && <span>{successMessage}</span>}
        </>
      )}
    </>
  );
}

export default Nodemailer;
