import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div
      style={{
        height: "80vh",
        // margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h3
        style={{
          fontSize: "50px",
          fontWeight: "800",
          color: "#fff", // Replace with your desired color
          fontFamily: "Martian Mono",
        }}
      >
        404
      </h3>
      <p
        style={{
          fontWeight: "800",
        }}
      >
        Page Not Found
      </p>
      <Link
        style={{
          fontWeight: "400",
          color: "#fff",
          textDecoration: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "1px solid #ffff00",
          textAlign: "center",
        }}
        to="/"
      >
        Go Back
      </Link>
    </div>
  );
}

export default PageNotFound;
