import React, { useContext, useState } from "react";
import { supabase } from "./supabaseClient";
import styles from "./Login.module.css"
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "./App";
import Loading from "./Components/Loading";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <Loading/>
    }

    if(user){
        return <Navigate to="/" />;
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setError("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const {error, data} = await supabase.auth.signInWithPassword({email, password})
        if(error){
            console.error(error.message);
            setError(error.message);
            return;
        }

        console.log("Login successful:", data);

        window.location.href = "/";
    };

    return <>
        <div className={styles.main}>
            <div className={styles.top}>
                <h1><img src="/logo.png" alt="NotesBolt Logo" /> <span>NotesBolt</span></h1>
            </div>

            <div className={styles.bottom}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.text}>
                        <h2>Login to your account</h2>
                        <p>Enter your credentials to access your account.</p>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => { handleEmail(e) }}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <p style={{alignSelf: "flex-end"}}><Link to="/reset-password">Forgot password?</Link></p>
                    </div>
                    <button type="submit" disabled={!email || !password}>Login</button>

                    <div className={styles.error} style={{ maxHeight: error ? "100px" : "0px" }}>
                        {error && <p>{error}</p>}
                    </div>

                    <div className={styles.divider}>
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </>
};

export default Login;