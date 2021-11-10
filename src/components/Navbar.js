import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Resume from "../resources/Resume.pdf"

// TODO: when navigating to new page, scroll back up
// TODO: add current finances project

function Navbar() {

    // prevent animation from happening on resizing
    let resizeTimer;
    window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper");
        }, 500);
    });

    const [navLinkOpen, setNavLink] = useState(false)
    

    const handleNavlinkToggle = () => {
        setNavLink(!navLinkOpen)
    }

    const location = useLocation

    return (
        <nav>
            <div className="logo">
                <Link onClick={() => handleNavlinkToggle()} to="/home" className="nav-link" style={{color: "white"}}>
                    <h4>Sahar Vacnich</h4>
                </Link>
            </div>
            <ul className={navLinkOpen ? "navlinks active" : "navlinks"}>
                <li className="link">
                    <Link onClick={() => handleNavlinkToggle()} to="/home" className={location.pathname === "/" || location.pathname === "/home" ? "nav-link active" : "nav-link"}>Home</Link>
                </li>
                <li className="link">
                    <Link onClick={() => handleNavlinkToggle()} to="/work" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                </li>
                <li className="link">
                    <a className="nav-link" target="_blank" href={Resume}>Resume</a>
                </li>
                <li className="link">
                    <Link onClick={() => handleNavlinkToggle()} to="/contact" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Contact</Link>
                </li>
            </ul>
            <div onClick={() => handleNavlinkToggle()} className="hamburger-toggle">
                <i className="fas fa-bars fa-lg"></i>
            </div>
        </nav>
    )
}

export default Navbar
