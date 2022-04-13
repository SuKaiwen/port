import React from 'react';

function ProjectCardOther(props) {
    return (
        <div className = "project-card">
            <img src = {props.image} alt = {props.name} />
            <h2>{props.name}</h2>
            <p className = "desc">{props.desc}</p>
            <a href = {props.githubLink} target="_blank"><p><i class="fab fa-github"></i> GITHUB</p></a>
        </div>
    );
}

export default ProjectCardOther;