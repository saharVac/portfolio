import React from "react";
import headshot from "../../resources/images/pic1.jpg"

function homePage() {

    return (
        <main id="main-container" className="container-fluid">
            <div className="row m-0 mt-4">
                <div className="main-container col-sm-10">


                    <div className="about-title">
                        <h1>About Me</h1>
                    </div>

                    <div className="row about-intro">
                        <div className="image-container">
                            <img
                                className="about-image"
                                src={headshot}
                                alt="headshot"
                                width="200px"
                            />
                        </div>
                        <p className="about-text">
                            A dedicated, results-oriented web developer curious with conceptualizing ideas to translate into action. Graduated from Binghamton University’s Electrical Engineering program and currently finishing up Columbia University’s Full Stack Web Development Certification. Looking to leverage my passion for responsive web design, experience in collaborative team work, ability to maintain focus in a fast-paced environment, and possibly my written and oral fluency in Hebrew.
                        </p>
                    </div>


                    <div className="about-section row mt-4 pt-4">
                        <div className="skills">
                            <h4>Programming Languages</h4>
                            <p>
                                HTML5, CSS3, JavaScript ES6+, SQL, NoSQL, Python (Udemy Certified)
                            </p>
                            <p>
                                &#160; &ndash; Familiarity with: Java, C, MATLAB
                            </p>
                            <h4>Applications</h4>
                            <p>
                                GitHub, MongoDB, MySQL
                            </p>
                            <h4>Tools</h4>
                            <p>
                                React, Axios, Express, Node, Handlebars, Express, jQuery, Bootstrap, ORM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default homePage