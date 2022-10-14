import React from "react";

function Nav() {
    return (
        // <nav id="navroot" className="nav nav-pills justify-content-center align-items-center bg-dark">
        //     <div className="navbar-brand justify-content-left">
        //         <h1>Joshua Rinehart</h1>
        //     </div>
        //     <div>
        //         <a className="nav-link active" id="about-me">About Me</a>
        //     </div>
        //     <div className="nav-item">
        //         <a className="nav-link" id="portfolio">Portfolio</a>
        //     </div>
        //     <div className="nav-item">
        //         <a className="nav-link" id="resume">Resume</a>
        //     </div>
        //     <div className="nav-item">
        //         <a className="nav-link" id="contact">Contact</a>
        //     </div>
        // </nav>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand px-4" href="#">Joshua Rinehart</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">About Me<span class="sr-only"> (current)</span></a>
                    <a className="nav-item nav-link" href="#">Projects</a>
                    <a className="nav-item nav-link" href="#">Resume</a>
                    <a className="nav-item nav-link" href="#">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;