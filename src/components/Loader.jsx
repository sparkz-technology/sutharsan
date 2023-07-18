function Loader() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(10, 25, 47, 1)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
