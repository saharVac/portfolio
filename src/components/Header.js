import React, { useState } from "react";
import Navbar from "./Navbar"

function Header(props) {
    
    const [scrolled, setScrolled] = useState(false)

    // give header a background on scroll
    document.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 20) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    })

    return (
        <header className={scrolled ? "header scrolled" : "header"}>
            <Navbar />
        </header>
    )
}

export default Header