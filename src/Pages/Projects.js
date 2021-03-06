import React from 'react';

import coinbased from "../Images/coinbase.jpg";
import coinbasedMobile from "../Images/coinbase-mobile.jpg";
import tracker from "../Images/tracker.jpg";
import trackerMobile from "../Images/tracker-mobile.jpg";
import movies from "../Images/movies.jpg";
import movieMobile from "../Images/movie-mobile.jpg";
import visualiser from "../Images/lis.jpg";
import lisMobile from "../Images/visualiser-mobile.jpg";

import ProjectCard from '../Components/ProjectCard';
import ProjectCardOther from '../Components/ProjectCardOther';

// Data
import mainData from '../Data/ProjectsData';
import otherData from '../Data/ProjectsOtherData';

function Projects(props) {
    return (
        <div className = "page-container projects" id = "projects">
            <div className = "project-container">
                <hr />
                <h2>FEATURED PROJECTS</h2>
                <div className = "heading-text">
                    <p>I mainly like to use React as my go-to framework when creating projects. I have also created applications in NextJS and Vue. Here are some of my featured projects:</p>
                </div>
            </div>
            <div className = "project-container">
                {mainData.map(project => {return (
                    <ProjectCard
                        name = {project.name}
                        subName = {project.subName}
                        desc1 = {project.desc1}
                        desc2 = {project.desc2}
                        mainImage = {project.mainImage}
                        mobileImage = {project.mobileImage}
                        githubLink = {project.githubLink}
                        siteLink = {project.siteLink}
                    />
                )})
                }
                <hr />
                <h2>OTHER PROJECTS</h2>
                <div className = "projects-other">
                    {otherData.map(project => {return (
                        <ProjectCardOther
                            name = {project.name}
                            desc = {project.desc}
                            githubLink = {project.githubLink}
                            liveSite = {project.liveSite}
                            image = {project.image}
                        />
                    )})

                    }
                </div>
            </div>
        </div>
    );
}

export default Projects;