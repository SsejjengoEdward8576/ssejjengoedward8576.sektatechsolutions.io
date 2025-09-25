import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ToggleMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="toggle-menu">
            <button
                className="menu-icon"
                onClick={toggleMenu}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
                &#9776;
            </button>
            <ul className={menuOpen ? 'show' : ''}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/service-product" onClick={closeMenu}>Services & Products</Link></li>
                <li><Link to="/our-works" onClick={closeMenu}>Our Works</Link></li>
                <li><Link to="/about-us" onClick={closeMenu}>About Us</Link></li>
                <li><Link to="/contacts" onClick={closeMenu}>Contacts</Link></li>
            </ul>
        </div>
    );
};

export default ToggleMenu;