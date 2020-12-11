import React from "react";
import headshot from "../../resources/images/pic1.jpg"

function homePage() {

    return (
        <main id="main-container" className="container-fluid">
        <div className="row m-0 mt-4">

            <div className="col-sm-1"></div>

            <div className="main-container col-sm-10">
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="row">
                <div className="col-2 col-sm-1"></div>
                <div className="col-10 col-sm-6 col-md-5">
                <div id="title" className="col-9 col-sm-4 col-md-5" >
                    
                </div>
                <div className="col-3 col-sm-1"></div>
                <img
                    src={headshot}
                    alt="headshot"
                    width="200px"
                />
                </div>
            </div>
            <div className="about-text row mt-4 pt-4">
                <p>
                    A dedicated, results-oriented web developer curious with conceptualizing ideas to translate into action. Graduated from Binghamton University’s Electrical Engineering program and currently finishing up Columbia University’s Full Stack Web Development Certification. Looking to leverage my passion for responsive web design, experience in collaborative team work, ability to maintain focus in a fast-paced environment, and possibly my written and oral fluency in Hebrew.

                </p>
            </div>
            </div>

            <div className="col-sm-1"></div>
        </div>
        </main>
    )
}

export default homePage