import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({Component}) => {
    const isAuthenticated = false; // Replace with actual authentication logic

    return isAuthenticated ? <Component /> : <Navigate to="/" replace />;
}

export default PrivateRoute;