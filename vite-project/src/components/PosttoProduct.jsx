import React, { useState } from "react";
import "./PosttoProduct.css"; // Import CSS for styling

function PosttoProduct() {
    const [socialLink, setSocialLink] = useState("");

    const handleLinkChange = (e) => {
        setSocialLink(e.target.value);
    };

    const handlePostSelection = () => {
        alert("Social media post selection not implemented yet.");
    };

    const handleLinkSubmission = () => {
        if (socialLink) {
            alert(`Converting post from: ${socialLink}`);
        } else {
            alert("Please paste a valid social media link.");
        }
    };

    return (
        <div className="post-to-product-container">
            <h1>Convert Post to Product</h1>
            <div className="option-container">
                <div className="option">
                    <button className="select-post-button" onClick={handlePostSelection}>
                        Select a Post from Feed
                    </button>
                </div>
                <div className="option">
                    <input
                        type="text"
                        placeholder="Paste social media link here"
                        value={socialLink}
                        onChange={handleLinkChange}
                        className="link-input"
                    />
                    <button className="convert-button" onClick={handleLinkSubmission}>
                        Convert to Product
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PosttoProduct;
