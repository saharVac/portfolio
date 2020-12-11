import React from "react";
import Project from "../Project";
import readmeGenerator from "../../resources/images/readme-generator.jpg"
import templateEngine from "../../resources/images/template-engine.jpg"
import javascriptQuiz from "../../resources/images/javascript-quiz.jpg"
import workdayScheduler from "../../resources/images/work-day-scheduler.jpg"
import weatherDashbaord from "../../resources/images/weather-dashboard.jpg"
import chopCheese from "../../resources/images/chopCheese.jpg"
import hotDawgR from "../../resources/images/hotDawgr.jpg"

function portfolio() {

    return (
        <main id="portfolio">
            <div id="portfolio-container" className="row m-0 mt-4">
                <Project 
                    title="README generator"
                    isDeployed={false}
                    imageSource={readmeGenerator}
                    description="Node CLI Generating README markdown file"
                    technologiesUsed="JavaScript"
                    repoLink="https://github.com/saharVac/readme-generator"
                />
                <Project 
                    title="Employee Template Engine"
                    isDeployed={false}
                    imageSource={templateEngine}
                    description="Node CLI generating HTML page of employee info"
                    technologiesUsed="HTML, CSS, inquirer, fs"
                    repoLink="https://github.com/saharVac/template-engine"
                />
                <Project 
                    title="JavaScript Quiz"
                    isDeployed={true}
                    deployLink="https://saharvac.github.io/javascript-quiz/"
                    imageSource={javascriptQuiz}
                    description="Timed JavaScript Quiz"
                    technologiesUsed="HTML, CSS, JavaScript"
                    repoLink="https://github.com/saharVac/javascript-quiz"
                />
                <Project 
                    title="Workday Scheduler"
                    isDeployed={true}
                    deployLink="https://saharvac.github.io/work-day-scheduler"
                    imageSource={workdayScheduler}
                    description="Local storage scheduler dynamically colored real-time"
                    technologiesUsed="HTML, CSS, JavaScript, jQuery"
                    repoLink="https://github.com/saharVac/work-day-scheduler"
                />
                <Project 
                    title="Weather Dashbaord"
                    isDeployed={true}
                    deployLink="https://saharvac.github.io/weather-dashboard/"
                    imageSource={weatherDashbaord}
                    description="Dynamic Weather Dashbaord showing forecast in searched cities"
                    technologiesUsed="HTML, CSS, JavaScript, jQuery"
                    repoLink="https://github.com/saharVac/weather-dashboard"
                />
                <Project 
                    title="Group Project: chopCheese"
                    isDeployed={true}
                    deployLink="https://mikevitelli.github.io/chopCheese/"
                    imageSource={chopCheese}
                    description="Tile based Content Management Platform"
                    technologiesUsed="HTML, CSS, JavaScript, jQuery, third party APIs"
                    repoLink="https://github.com/mikevitelli/chopCheese"
                />
                <Project 
                    title="Group Project: hotDawgr"
                    isDeployed={true}
                    deployLink="https://project-two-asika.herokuapp.com/"
                    imageSource={hotDawgR}
                    description="App for dog owners"
                    technologiesUsed="Heroku, HTML, CSS, JavaScript, jQuery, mySQL, express, sequelize, passport"
                    repoLink="https://github.com/idallas93/project-two-group/"
                />
            </div>
        </main>
    )
}

export default portfolio