import React from "react";

function Footer() {
    
    return (
        <footer class="jumbotron jumbotron-fluid fixed-bottom mb-0">
            <div class="container">
                <div id="footer-row" class="row">
                    <div class="col-3 col-sm-3 col-md-4 col-lg-5"></div>
                    <div class="col-9 col-sm-9 col-md-8 col-lg-7">
                        Made by Me
                    </div>
                    <div class="col-3 col-sm-3 col-md-4 col-lg-5"></div>
                    <div class="col-9 col-sm-9 col-md-8 col-lg-7">
                        <a target="_blank" href="https://github.com/saharVac">
                        <i class="fab fa-github-square"></i>
                        </a>
                        <a
                        class="ml-4"
                        target="_blank"
                        href="https://linkedin.com/in/svacnich"
                        >
                        <i class="fab fa-linkedin"></i>
                        </a>
                        <a class="ml-4" href="mailto:vcsahar@gmail.com">
                        <i class="fas fa-envelope-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer