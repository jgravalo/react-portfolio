import React from "react";
import '../css/styles.css';

const Nav = ({ items = ["Home", "About", "Contact"], onSelect }) => {
    return (
        <nav>
            <div className="logo">
                <div className="nav-icons logo-image">
                    <div className="logo-image-container">
                        <a>JG</a>
                    </div>
                </div>
                <p>JESÚS GRÁVALOS</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <div id="nav-links">
                    <a href="#about-me">ABOUT ME</a>
                    <a href="#skills">SKILLS</a>
                    <a href="#archievements">ARCHIEVEMENTS</a>
                    <a href="#projects">PROJECTS</a>
                    <a href="#contact">CONTACT</a>
                </div>
                <div className="nav-icons logo-image">
                    <div className="logo-image-container">
                        <div className="nav-icons-container">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;