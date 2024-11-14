import React from "react";
import "./Social.css"; // Import a separate CSS file for styling if needed

function Social() {

    const handleInsta = () => {
        
    }

    return (
        <div className="social-container">
            <h1>Connect with your Social Media</h1>
            <div className="social-buttons">
                <button className="social-button instagram" onClick={handleInsta}>
                    <i className="bx bxl-instagram"></i> Log in with Instagram
                </button>
                <button className="social-button twitter">
                    <i className="bx bxl-twitter"></i> Log in with Twitter
                </button>
            </div>
        </div>
    );
}

export default Social;
