import React from "react";
import { ReactDOM } from "react";
import AboutMe from "../about-me";
import Portfolio from "../portfolio";
import Resume from "../resume";
import Contact from "../contact";

function handleClick(event) {
    event.preventDefault();

    const location = event.target

    console.log(location.text)

    switch (location.text) {
        case 'About Me':
            ReactDOM.render(
                <AboutMe />
            );
            break;
        case 'Portfolio':
            ReactDOM.render(
                <Portfolio />
            );
            break;
        case 'Resume':
            ReactDOM.render(
                <Resume />
            );
            break;
        case 'Contact':
            ReactDOM.render(
                <Contact />
            );
            break;
        default:
            ReactDOM.render(
                <AboutMe />
            );
    }
}

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand px-4" href="#">Joshua Rinehart</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a onClick={handleClick} className="nav-item nav-link px-3 active" href="#">About Me</a>
                    <a onClick={handleClick} className="nav-item nav-link px-3" href="#">Projects</a>
                    <a onClick={handleClick} className="nav-item nav-link px-3" href="#">Resume</a>
                    <a onClick={handleClick} className="nav-item nav-link px-3" href="#">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;