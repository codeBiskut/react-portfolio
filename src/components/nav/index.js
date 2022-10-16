import React from "react";

function Nav({handleClick, currentPage}) {



    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand px-4" href="#">Joshua Rinehart</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a onClick={handleClick} className={`nav-item nav-link px-3 ${currentPage === 'About Me' ? 'active' : ''}`}>About Me</a>
                    <a onClick={handleClick} className={`nav-item nav-link px-3 ${currentPage === 'Projects' ? 'active' : ''}`}>Projects</a>
                    <a onClick={handleClick} className={`nav-item nav-link px-3 ${currentPage === 'Contact' ? 'active' : ''}`}>Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;