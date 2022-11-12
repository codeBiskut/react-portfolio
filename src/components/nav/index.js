import React from "react";
import "./nav.css"

function Nav({ handleClick, currentPage }) {



    return (
        <nav className="navbar navbar-expand-lg navbar-dark header-color">
            <a className="navbar-brand px-4" href="#">Joshua Rinehart</a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <div className="navbar-nav">
                    <a onClick={handleClick} className={`nav-item nav-link px-3 ${currentPage === 'About Me' ? 'active' : ''}`}>About Me</a>
                    <a onClick={handleClick} className={`nav-item nav-link px-3 ${currentPage === 'Projects' ? 'active' : ''}`}>Projects</a>
                    <a onClick={handleClick} className={`nav-item nav-link px-3 ${currentPage === 'Resume' ? 'active' : ''}`}>Resume</a>
                    <a onClick={handleClick} className={`nav-item nav-link px-3 ${currentPage === 'Contact' ? 'active' : ''}`}>Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;