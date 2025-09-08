import React, { useContext, useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { AuthContext } from "./App";
import { Navigate } from "react-router-dom";

const slides = [
    {
        title: "Welcome to NotesBolt!",
        content: "Your journey to organized notes starts here. Let's get you set up.",
    },
    {
        title: "Tell us about you",
        content: (
            <>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
            </>
        ),
    },
];

export default function OnBoarding() {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState({ name: "" });
    const {user} = useContext(AuthContext);
    console.log(user)
    const handleNext = () => {
        if (step === 1 && !form.name) return;
        setStep((prev) => Math.min(prev + 1, slides.length - 1));
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        // const {error} = supabase.from("users").;
        const { user, error } = await supabase.auth.signInWithOAuth({ provider: "google" });
        console.log(user, error)
    }

    // if(!user){
    //     return <Navigate to="/login" />
    // }

    return (
        <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
            <h2>{slides[step].title}</h2>
            <div style={{ margin: "24px 0" }}>
                {step === 1 ? (
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            style={{ marginLeft: 8 }}
                            autoFocus
                        />
                        <button onClick={handleSubmit}>Submit</button>
                    </label>
                ) : (
                    <p>{slides[step].content}</p>
                )}
            </div>
            {step < slides.length - 1 ? (
                <button onClick={handleNext} style={{ padding: "8px 16px" }}>
                    Next
                </button>
            ) : (
                <div>
                    <p>Thanks, {form.name || "user"}! You're all set.</p>
                </div>
            )}
            <div style={{ marginTop: 16 }}>
                {slides.map((_, idx) => (
                    <span
                        key={idx}
                        style={{
                            display: "inline-block",
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: idx === step ? "#007bff" : "#ccc",
                            margin: "0 4px",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}