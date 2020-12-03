import React from "react";
import Project from "../Project";
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
                        <Project 
                            title="Code Refractor"
                            deployLink="https://saharvac.github.io/code-refractor/"
                            imageSource={codeRefractor}
                            description="Improved code without changing its function"
                            technologiesUsed="HTML, CSS"
                            repoLink="https://github.com/saharVac/code-refractor"
                        />
                        <div class="col-1"></div>
                        <div class="col-1"></div>
                        <Project 
                            title="About Mer"
                            deployLink="https://saharvac.github.io/prework-about-me/"
                            imageSource={aboutMe}
                            description="Information About Me"
                            technologiesUsed="HTML, CSS"
                            repoLink="https://github.com/saharVac/prework-about-me"
                        />
                        <div class="col-1"></div>
                        <div class="col-1"></div>
                        <Project 
                            title="JavaScript Quiz"
                            deployLink="https://saharvac.github.io/javascript-quiz/"
                            imageSource={javascriptQuiz}
                            description="Timed JavaScript Quiz"
                            technologiesUsed="HTML, CSS, JavaScript"
                            repoLink="https://github.com/saharVac/javascript-quiz"
                        />
                        <div class="col-1"></div>
                        <div class="col-1"></div>
                        <Project 
                            title="Workday Scheduler"
                            deployLink="https://saharvac.github.io/work-day-scheduler"
                            imageSource={workdayScheduler}
                            description="Local storage scheduler dynamically colored real-time"
                            technologiesUsed="HTML, CSS, JavaScript, jQuery"
                            repoLink="https://github.com/saharVac/work-day-scheduler"
                        />
                        <div class="col-1"></div>
                        <div class="col-1"></div>
                        <Project 
                            title="Weather Dashbaord"
                            deployLink="https://saharvac.github.io/weather-dashboard/"
                            imageSource={weatherDashbaord}
                            description="Dynamic Weather Dashbaord showing forecast in searched cities"
                            technologiesUsed="HTML, CSS, JavaScript, jQuery"
                            repoLink="https://github.com/saharVac/weather-dashboard"
                        />
                        <div class="col-1"></div>
                        <div class="col-1"></div>
                        <Project 
                            title="Group Project: chopCheese"
                            deployLink="https://mikevitelli.github.io/chopCheese/"
                            imageSource={chopCheese}
                            description="Tile based Content Management Platform"
                            technologiesUsed="HTML, CSS, JavaScript, jQuery, third party APIs"
                            repoLink="https://github.com/mikevitelli/chopCheese"
                        />
                        <div class="col-1"></div>
                        <div class="col-1"></div>
                        <Project 
                            title="Group Project: hotDawgr"
                            deployLink="https://project-two-asika.herokuapp.com/"
                            imageSource={hotDawgR}
                            description="App for dog owners"
                            technologiesUsed="Heroku, HTML, CSS, JavaScript, jQuery, mySQL, express, sequelize, passport"
                            repoLink="https://github.com/idallas93/project-two-group/"
                        />
                        <div class="col-1"></div>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>
        </main>
    )
}

export default portfolio