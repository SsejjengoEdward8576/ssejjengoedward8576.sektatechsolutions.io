import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

const NavButtons = () => {
    const navigate = useNavigate();

    return (
        <div className="navBtn">
            <button
                id="backBtn"
                aria-label="Go Back"
                onClick={() => navigate(-1)}
            >
                Back
            </button>
            <button
                id="nextBtn"
                aria-label="Go Forward"
                onClick={() => navigate(1)}
            >
                Next
            </button>
        </div>
    );
}

export default NavButtons;