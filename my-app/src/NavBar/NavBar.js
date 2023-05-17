import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="#home" className="navbar-link">Home</a></li>
                <li className="navbar-item"><a href="#about" className="navbar-link">About</a></li>
                <li className="navbar-item"><a href="#projects" className="navbar-link">Projects</a></li>
                <li className="navbar-item"><a href="#contact" className="navbar-link">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
