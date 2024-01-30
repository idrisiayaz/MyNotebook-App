import React from 'react';
import "../App.css";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-content">
                <p style={{margin: "0px"}}>&copy; {year} My Notebook App. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
