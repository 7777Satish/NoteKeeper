import { useContext } from "react";
import { AuthContext } from "./App";
import { Navigate } from "react-router-dom";
import Loading from "./Components/Loading";

function AuthProtector({children}){
    const { user, loading } = useContext(AuthContext);
    if (loading) return <><Loading/></>;
    if (!user) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default AuthProtector;