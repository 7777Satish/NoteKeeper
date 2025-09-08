import React from "react";

const spinnerStyle = {
    width: "28px",
    height: "28px",
    border: "3px solid #ccc",
    borderTop: "3px solid #37998e",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    margin: "auto",
};

const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
};

const spinnerKeyframes = `
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;

function Loading() {
    return (
        <div style={containerStyle}>
            <style>{spinnerKeyframes}</style>
            <div style={spinnerStyle}></div>
        </div>
    );
}

export default Loading;