import Cookies from "js-cookie";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Success() {
    const { token } = useParams();
    Cookies.set("token", token);
    console.log(token);
    useEffect(() => {
        window.location.replace("/admin/profile");

    }, [token]);

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
