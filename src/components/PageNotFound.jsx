import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div
      style={{
        height: "100vh",
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
      <p>Page Not Found</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default PageNotFound;
