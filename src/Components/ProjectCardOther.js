import React from 'react';

function ProjectCardOther(props) {
    return (
        <div className = "project-card">
            <p>{props.name}</p>
            <h1>{props.number}</h1>
            <p className = "desc">{props.desc}</p>
            <a href = {props.githubLink} target="_blank"><p><i class="fab fa-github"></i> GITHUB</p></a>
        </div>
    );
}

export default ProjectCardOther;