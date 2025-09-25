import React from "react";
import '../styles/main.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ textAlign: "center", color: "#FFEB4B" }}>
            <p>Powered By Eddieson</p>
            <p>&copy; {currentYear} SEKTA TECH. SOLUTIONS. All rights reserved.</p>
        </footer>
    );
}

export default Footer;