import { useParams } from "react-router-dom";

function Success() {
    const { token } = useParams();
    console.log(token);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <h1>Success</h1>
            {
                token && <h2> login success</h2>
            }

        </div>
    )
}

export default Success
