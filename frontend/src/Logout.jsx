import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import Loading from "./Components/Loading";

function Logout(){
    const [a, setA] = useState(false);

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.log("Error Logging out");
        } else {
            console.log("Logged out successfully");
        }
        setA(true);
        return <Navigate to="/" />
    };

    useEffect(()=>{
        handleLogout();
    },[])

    if(a) return <Navigate to="/" />

    return <><Loading /></>
}

export default Logout;