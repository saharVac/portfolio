import React from "react";

function Footer() {
    
    return (
        <footer className="jumbotron jumbotron-fluid fixed-bottom mb-0">
            <div className="container">
                <div id="footer-row" className="row">
                    <div id="footer-title" className="col-9 col-md-8 col-lg-7">
                        Made by Me
                    </div>
                    <div id="footer-icons" className="col-9 col-md-8 col-lg-7">
                        <a target="_blank" rel="noreferrer" href="https://github.com/saharVac">
                            <i className="fab fa-github-square"></i>
                        </a>
                        <a
                            className="ml-4"
                            target="_blank"
                            rel="noreferrer"
                            href="https://linkedin.com/in/svacnich"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a className="ml-4" href="mailto:vcsahar@gmail.com">
                            <i className="fas fa-envelope-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer