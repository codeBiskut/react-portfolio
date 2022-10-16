import React from "react";
import "./footer.css"

function Footer(){
    return <div className="footer bg-dark text-light text-center fixed-bottom">
        <a href="https://stackoverflow.com/users/12264022/josh-rinehart" target="_blank"><i className="fa-brands fa-stack-overflow p-3 icon-size" href=""></i></a>
        <a href="https://github.com/codeBiskut" target="_blank"><i className="fa-brands fa-github p-3 icon-size"></i></a>
        <a href="https://www.linkedin.com/in/joshua-rinehart-56521b22b/" target="_blank"><i className="fa-brands fa-linkedin p-3 icon-size"></i></a>
    </div>
}

export default Footer;