import { useEffect } from "react";
import { useAuth } from "../store/auth";
import { Navigate } from "react-router-dom";

export const Logout = () => {
    const { LogoutUser } = useAuth(); // Destructure LogoutUser from useAuth

    useEffect(() => {
        LogoutUser(); // Call the logout function on component mount
    }, [LogoutUser]);

    return <Navigate to="/login" />;
};
