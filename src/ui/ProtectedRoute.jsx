/* eslint-disable react/prop-types */
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {

    const navigate = useNavigate();
    useEffect(() => {
        const token = Cookies.get('token');
        console.log(token);
        token ? navigate("/admin/profile") : navigate("/login");

    }, [navigate]);

    return <>{children}</>;
}

export default ProtectedRoute;
