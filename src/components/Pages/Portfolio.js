import React from "react";
import codeRefractor from "../../resources/images/code-refractor.jpg"
import aboutMe from "../../resources/images/about-me.jpg"
import javascriptQuiz from "../../resources/images/javascript-quiz.jpg"
import workdayScheduler from "../../resources/images/work-day-scheduler.jpg"
import weatherDashbaord from "../../resources/images/weather-dashboard.jpg"
import chopCheese from "../../resources/images/chopCheese.jpg"
import hotDawgR from "../../resources/images/hotDawgr.jpg"

function portfolio() {

    return (
        <main id="portfolio" class="container-fluid">
            <div class="row m-0 mt-4">
                <div class="col-1"></div>

                <div class="col-10">
                <div class="row">
                    <div class="col-1"></div>
                    <div class="card col-10 col-xl-4 mb-4">
                    <h3 class="card-title">Code Refractor</h3>
                    <a
                        target="_blank"
                        href="https://saharvac.github.io/code-refractor/"
                        ><img
                        class="card-img-top"
                        src={codeRefractor}
                        alt="Card caption"
                    /></a>
                    <div class="card-body">
                        <p class="card-text">
                        Improved code without changing its function
                        </p>
                        <p class="card-text"><b>Technologies Used:</b> HTML, CSS</p>
                        <a
                        href="https://github.com/saharVac/code-refractor"
                        class="btn btn-primary"
                        target="_blank"
                        >Github Repository</a
                        >
                    </div>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-1"></div>
                    <div class="card col-10 col-xl-4 mb-4">
                    <h3 class="card-title">About Me</h3>
                    <a
                        target="_blank"
                        href="https://saharvac.github.io/prework-about-me/"
                        ><img
                        class="card-img-top"
                        src={aboutMe}
                        alt="Card caption"
                    /></a>
                    <div class="card-body">
                        <p class="card-text">Information About Me</p>
                        <p class="card-text"><b>Technologies Used:</b> HTML, CSS</p>
                        <a
                        href="https://github.com/saharVac/prework-about-me"
                        class="btn btn-primary"
                        target="_blank"
                        >Github Repository</a
                        >
                    </div>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-1"></div>
                    <div class="card col-10 col-xl-4 mb-4">
                    <h3 class="card-title">JavaScript Quiz</h3>
                    <a
                        target="_blank"
                        href="https://saharvac.github.io/javascript-quiz/"
                        ><img
                        class="card-img-top"
                        src={javascriptQuiz}
                        alt="Card caption"
                    /></a>
                    <div class="card-body">
                        <p class="card-text">Timed Quiz</p>
                        <p class="card-text">
                        <b>Technologies Used:</b> HTML, CSS, JavaScript
                        </p>
                        <a
                        href="https://github.com/saharVac/javascript-quiz"
                        class="btn btn-primary"
                        target="_blank"
                        >Github Repository</a
                        >
                    </div>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-1"></div>
                    <div class="card col-10 col-xl-4">
                    <h3 class="card-title">Workday Scheduler</h3>
                    <a
                        target="_blank"
                        href="https://saharvac.github.io/work-day-scheduler"
                    >
                        <img
                        class="card-img-top"
                        src={workdayScheduler}
                        alt="Card caption"
                    /></a>
                    <div class="card-body">
                        <p class="card-text">
                        local storage scheduler dynamically colored real-time
                        </p>
                        <p class="card-text">
                        <b>Technologies Used:</b> HTML, CSS, JavaScript, jQuery
                        </p>
                        <a
                        href="https://github.com/saharVac/work-day-scheduler"
                        class="btn btn-primary"
                        target="_blank"
                        >Github Repository</a
                        >
                    </div>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-1"></div>
                    <div class="card col-10 col-xl-4 mb-4">
                    <h3 class="card-title">Weather Dashbaord</h3>
                    <a
                        target="_blank"
                        href="https://saharvac.github.io/weather-dashboard/"
                        ><img
                        class="card-img-top"
                        src={weatherDashbaord}
                        alt="Card caption"
                    /></a>
                    <div class="card-body">
                        <p class="card-text">Weather Dashboard</p>
                        <p class="card-text">
                        <b>Technologies Used:</b> HTML, CSS, JavaScript, jQuery
                        </p>
                        <a
                        href="https://github.com/saharVac/weather-dashboard"
                        class="btn btn-primary"
                        target="_blank"
                        >Github Repository</a
                        >
                    </div>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-1"></div>
                    <div class="card col-10 col-xl-4">
                    <h3 class="card-title">Group Project</h3>
                    <a
                        target="_blank"
                        href="https://mikevitelli.github.io/chopCheese/"
                    >
                        <img
                        class="card-img-top"
                        src={chopCheese}
                        alt="Card caption"
                    /></a>
                    <div class="card-body">
                        <p class="card-text">chopCheese</p>
                        <p class="card-text">
                        <b>Technologies Used:</b> HTML, CSS, JavaScript, jQuery
                        </p>
                        <a
                        href="https://github.com/mikevitelli/chopCheese"
                        class="btn btn-primary"
                        target="_blank"
                        >Github Repository</a
                        >
                    </div>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-1"></div>
                    <div class="card col-10 col-xl-4">
                    <h3 class="card-title">Group Project</h3>
                    <a
                        target="_blank"
                        href="https://project-two-asika.herokuapp.com/"
                    >
                    <img
                        class="card-img-top"
                        src={hotDawgR}
                        alt="Card caption"
                    /></a>
                    <div class="card-body">
                        <p class="card-text">HotDawgr</p>
                        <p class="card-text">
                        <b>Technologies Used:</b> Heroku, HTML, CSS, JavaScript, jQuery, mySQL, express, sequelize, passport
                        </p>
                        <a
                        href="https://github.com/idallas93/project-two-group/"
                        class="btn btn-primary"
                        target="_blank"
                        >Github Repository</a
                        >
                    </div>
                    </div>
                    <div class="col-1"></div>
                </div>
                </div>
                <div class="col-1"></div>
            </div>
            </main>
    )
}

export default portfolio