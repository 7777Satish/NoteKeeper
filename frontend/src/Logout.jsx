import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

function Logout(){
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.log("Error logging out:", error);
        } else {
            console.log("Logged out successfully");
            window.location.href = "/login";
        }
    };

    useEffect(()=>{
        handleLogout();
    },[])
}

export default Logout;