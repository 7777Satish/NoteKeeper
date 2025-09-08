const spinnerStyle = {
    width: "14px",
    height: "14px",
    border: "2px solid #ddd",
    borderTop: "2px solid #fff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    margin: "auto",
};

const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    top: 0,
    left: 0,
};

const spinnerKeyframes = `
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;

function Loader() {
    return (
        <div style={containerStyle}>
            <style>{spinnerKeyframes}</style>
            <div style={spinnerStyle}></div>
        </div>
    );
}

export default Loader;