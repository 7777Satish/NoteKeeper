import { useContext, useState } from "react";
import { supabase } from "./supabaseClient";
import styles from "./Login.module.css"
import { Link, Navigate } from "react-router-dom";
import Loading from "./Components/Loading";
import { AuthContext } from "./App";
import Loader from "./Components/Loader";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [conditions, setConditions] = useState({
        minLength: false,
        hasNumber: false,
        hasSpecialChar: false
    });
    const [verification, setVerification] = useState(false);
    const [showConditions, setShowConditions] = useState(false);
    const [waiting, setWaiting] = useState(false);
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading />
    }

    if (user) {
        return <Navigate to="/" />;
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);

        const password = e.target.value;
        setConditions({
            minLength: password.length >= 6,
            hasNumber: /\d/.test(password),
            hasSpecialChar: /[!@#$%^&*]/.test(password)
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setWaiting(true);

        const { error, data } = await supabase.auth.signUp({ email, password })
        if (error) {
            setError(error.message);
            setWaiting(false);
            return;
        }
        setWaiting(false);
        setVerification(true);
    };

    return <>
        <div className={styles.main}>
            <div className={styles.top}>
                <h1><img src="/logo.png" alt="NotesBolt Logo" /> <span>NotesBolt</span></h1>
            </div>

            <div className={styles.bottom}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.text}>
                        <h2>Create a new account</h2>
                        <p>Enter your credentials to create a new account.</p>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setError("") }}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => handlePassword(e)}
                            onFocus={() => setShowConditions(true)}
                            required
                        />

                        <div className={styles.conditions} style={{ height: showConditions ? '95px' : '0' }}>
                            <ul>
                                <li className={conditions.minLength ? styles.valid : styles.invalid}>Minimum six characters</li>
                                <li className={conditions.hasNumber ? styles.valid : styles.invalid}>At least one number</li>
                                <li className={conditions.hasSpecialChar ? styles.valid : styles.invalid}>At least one special character</li>
                            </ul>
                        </div>
                    </div>
                    <button type="submit" disabled={!conditions.minLength || !conditions.hasNumber || !conditions.hasSpecialChar}>{waiting && <Loader />} <span>Sign Up</span></button>

                    <div className={styles.error} style={{ maxHeight: error ? "100px" : "0px", margin: error ? "0px" : "-10px" }}>
                        {error && <p>{error}</p>}
                    </div>
                    {
                        verification &&
                        <div className={styles.verification}>
                            We have sent a verification email to your email address.
                        </div>
                    }
                    <div className={styles.divider}>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>

                    <div className={styles.disclaimer}>
                        <p>By signing up, you agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.</p>
                    </div>
                </form>
            </div>
        </div>
    </>
};

export default SignUp;