import React from "react";
import headshot from "../../resources/images/pic1.jpg"

function homePage() {

    return (
        <main class="container-fluid">
        <div class="row m-0 mt-4">

            <div class="col-sm-1"></div>

            <div class="col-sm-10">
            <div class="row">
                <div class="col-2 col-sm-1"></div>
                <div class="col-10 col-sm-6 col-md-5">
                <img
                    src={headshot}
                    alt="headshot"
                    width="200px"
                />
                </div>
                <div class="col-3 col-sm-1"></div>
                <div id="title" class="col-9 col-sm-4 col-md-5" >
                    <div class="row">
                        <h1>About</h1>
                    </div>
                    <div class="row">
                        <h1>Me</h1>
                    </div>
                </div>
            </div>
            <div class="row mt-4 pt-4">
                <p>
                After graduated in May of 2019 from University of Binghamton with
                a Bachelor of Science in Electrical Engineering, I started
                studying Software Engineering.
                </p>
                <p>
                I am now pursuing a career in Web Development, studying in
                Columbia University's Web Development Bootcamp.
                </p>
            </div>
            </div>

            <div class="col-sm-1"></div>
        </div>
        </main>
    )
}

export default homePage