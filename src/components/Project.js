import React from "react"

function Project({ title, isDeployed, deployLink, imageSource, description, technologiesUsed, repoLink }) {

    return (
        <div className="card">
            <div className="card-section card-title">
                <h4><b>{title}</b></h4>
            </div>
            <div className="card-section card-image-section">
                <img className="card-image" src={imageSource} alt="Card caption" />
                {
                    isDeployed ? 
                    <a target="_blank" rel="noreferrer" href={deployLink}>Link to Deployed App</a> :
                    ""
                }
            </div>
            <div className="card-section card-description">
                <p className="card-text">
                    {description}
                </p>
            </div>
            <div className="card-section card-technologies">

                <p className="card-text"><b>Technologies Used: </b>{technologiesUsed}</p>
            </div>
            <div className="card-section card-link">
                <a
                    href={repoLink}
                    className="repo-link btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github Repository
                </a>
            </div>
            
        </div>
    )
}

export default Project