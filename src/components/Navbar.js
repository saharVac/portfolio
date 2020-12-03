import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom";
import Resume from "../resources/Resume.pdf"

function NavTabs(props) {
    const location = useLocation();

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand >
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Sahar Vacnich
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Portfolio</Nav.Link>
                <NavDropdown title="Projects" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Portfolio</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Resume</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link target="_blank" href={Resume}>Resume</Nav.Link>
                <Nav.Link href="#deets">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavTabs