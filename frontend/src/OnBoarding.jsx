import React, { useContext, useEffect, useRef, useState } from "react";
import { supabase } from "./supabaseClient";
import styles from "./OnBoarding.module.css"
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "./App";
import Loading from "./Components/Loading";
import Loader from "./Components/Loader";

const OnBoarding = () => {
    // const video = useRef(null);
    // const videoContainer = useRef(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { user, loading } = useContext(AuthContext);
    const [waiting, setWaiting] = useState(false);
    const [state, setState] = useState(0);
    const [data, setData] = useState({
        name: "",

    });

    // useEffect(()=>{
        
    //     setTimeout(()=>{
    //         videoContainer.current.style.opacity = 0;
    //     }, 6000)
        
    //     setTimeout(()=>{
    //         videoContainer.current.style.display = "none";
    //     }, 6700)
    // }, [])

    if (loading) {
        return <Loading />
    }

    if (user.username) {
        return <Navigate to="/" />;
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setWaiting(true);
        const { error, data } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            console.error(error.message);
            setError(error.message);
            setWaiting(false);
            return;
        }
        setWaiting(false);
        console.log("Login successful:", data);

        window.location.href = "/";
    };

    return <>
        {/* <div className={styles.loading_video} ref={videoContainer}>
            <video autoPlay loop muted ref={video}>
                <source src="/main_video_loading.mp4" type="video/mp4" />
                <source src="https://elevenlabs.io/public_app_assets/video/intro-desktop.webm" type="video/mp4" />
            </video>
        </div> */}

        <div className={styles.main}>
            {/* <div className={styles.top}>
                <h1><img src="/logo.png" alt="NotesBolt Logo" /> <span>NotesBolt</span></h1>
            </div> */}

            <div className={styles.bottom}>
                {
                    state == 0 ?

                        <form onSubmit={handleSubmit}>
                            <div className={styles.text}>
                                <h2>Help us personalize your experience</h2>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name">What is your name?</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={data.name}
                                    onChange={(e) => { setData({ ...data, name: e.target.value }) }}
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
                                <p style={{ alignSelf: "flex-end" }}><Link to="/reset-password">Forgot password?</Link></p>
                            </div>
                            <button type="button">Next</button>

                            {/* <div className={styles.error} style={{ maxHeight: error ? "100px" : "0px" }}>
                                {error && <p>{error}</p>}
                            </div> */}
{/* 
                            <div className={styles.divider}>
                                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                            </div> */}
                        </form>
                        : state == 1 ?
                            <>
                            </>

                            :
                            <>

                            </>}
                {/* <form onSubmit={handleSubmit}>
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
                    <button type="submit" disabled={!email || !password}>{waiting && <Loader />} <span>Login</span></button>

                    <div className={styles.error} style={{ maxHeight: error ? "100px" : "0px" }}>
                        {error && <p>{error}</p>}
                    </div>

                    <div className={styles.divider}>
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </form> */}
            </div>
        </div>
    </>
};

export default OnBoarding;