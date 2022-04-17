import React from 'react';

function ProjectCardOther(props) {
    return (
        <div className = "project-card">
            <img src = {props.image} alt = {props.name} />
            <h2>{props.name}</h2>
            <p className = "desc">{props.desc}</p>
            <div className = "footer">
                <a href = {props.githubLink} target="_blank"><p><i class="fab fa-github"></i> GITHUB</p></a>
                {props.liveSite && <a href = {props.liveSite} target="_blank"><p><i class="fas fa-wifi"></i> LIVESITE</p></a>}
            </div>
        </div>
    );
}

export default ProjectCardOther;