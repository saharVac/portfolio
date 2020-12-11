import React from "react";
import headshot from "../../resources/images/pic1.jpg"

function homePage() {

    return (
        <main id="main-container" className="container-fluid">
        <div className="row m-0 mt-4">

            <div className="col-sm-1"></div>

            <div className="col-sm-10">
            <div className="row">
                <div className="col-2 col-sm-1"></div>
                <div className="col-10 col-sm-6 col-md-5">
                <img
                    src={headshot}
                    alt="headshot"
                    width="200px"
                />
                </div>
                <div className="col-3 col-sm-1"></div>
                <div id="title" className="col-9 col-sm-4 col-md-5" >
                    <div className="row">
                        <h1>About</h1>
                    </div>
                    <div className="row">
                        <h1>Me</h1>
                    </div>
                </div>
            </div>
            <div className="row mt-4 pt-4">
                <p>
                After graduating in from University of Binghamton with
                a Bachelor of Science in Electrical Engineering, I am now finishing Columbia University's Web Development program.
                </p>
                <p>
                I am now pursuing a career in Web Development, seeking employment as a developer.
                </p>
            </div>
            </div>

            <div className="col-sm-1"></div>
        </div>
        </main>
    )
}

export default homePage