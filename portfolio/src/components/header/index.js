import React from "react";
import Nav from "../nav";



function Header({handleClick, currentPage}) {
    return (
        <div className="header">
            <Nav handleClick={handleClick} currentPage={currentPage}/>
        </div>
    )
}

export default Header;