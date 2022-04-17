import React from 'react';

function ProjectCard(props) {
    return (
        <div>
            <div className = "project-row">
                <img className = "main-image" src = {props.mainImage} alt = "coinbased app" />
                <img className = "side-image" src = {props.mobileImage} alt = "coinbased mobile" />
            </div>
            <div className = 'project-grid'>
                <div>
                    <h1 className = "project-title">{props.name}</h1>
                    <p>{props.subName}</p>
                </div>
                <div>
                    <p>{props.desc1}</p>
                </div>
                <div>
                    <p>{props.desc2}</p>
                </div>
                <div>
                    <a href = {props.githubLink} target="_blank"><p><i class="fab fa-github"></i> GITHUB <i class="fa-solid fa-arrow-right red-color"></i></p></a>
                    {props.siteLink && <a href = {props.siteLink} target="_blank"><p><i class="fas fa-wifi"></i> LIVE SITE <i class="fa-solid fa-arrow-right red-color"></i></p></a>}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;