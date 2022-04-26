import React from 'react';
import me from '../Images/me.jpg';

function About(props) {
    return (
        <div className = "page-container" id = "about">
            <div className = "about-container">
                <hr />
                <h2>ABOUT ME</h2>
                <div className = "heading-text">
                    <p>Hi there! I'm Kevin, a Software Engineer with experience in the core structure of the front-end (HTML, CSS, JS) as well as various frameworks including React, NextJS and more. I enjoy developing intricate systems and websites with emphasis on functionality, UI/UX and efficiency.</p>
                </div>
                <div className = "about-row">
                    <a href ="/KevinSUCV.pdf" className="resume-container" download><i class="fas fa-arrow-down"></i><button className = "btn-resume"> Download Resume</button></a>
                    <div className = "icon-row">
                        <a href="mailto:kevinsu@outlook.co.nz" className="social-icon" target="_blank"><p><i class="fas fa-envelope"></i></p></a>
                        <a href="https://www.linkedin.com/in/kevin-su-618163191/" className="social-icon" target="_blank"><p><i class="fab fa-linkedin"></i></p></a>
                        <a href="https://github.com/SuKaiwen" className="social-icon" target="_blank"><p><i class="fa-brands fa-github-square"></i></p></a>
                    </div>
                </div>
            </div>

            <div className = "main-grid">
                <div>
                    <h2>EXPERIENCE</h2>
                    <div className = 'icon-row exp-header'>
                        <h2 className = "background1">AKQA</h2>
                        <div className = "col">
                            <p className = "bold">Digital Design and Communications Agency</p>
                            <p>Oct 2021 - Present</p>
                        </div>
                    </div>
                    
                    <p className="bold exp-title">Associate Front-end Developer</p>
                    <ul className = "ul-line">
                        <p className = "job-title">Oct 2019 - Present</p>
                        <li>
                            <p>Contributed to the development and maintenance of code bases primarily using HTML, CSS, Sass, JS,
                            React and jQuery.
                            </p>
                        </li>
                        <li>
                            <p>Contributed in the configuration of client based digital asset
                            management systems using Sitecore Content Hub 4.0.</p>
                        </li>
                        <li>
                            <p>Developed and integrated work-flow with custom triggers, scripts
                            and actions using C# (ASP.NET) to ensure correct state, product and user assignment
                            upon performing state transitions in the work flow.
                            </p>
                        </li>
                        <li>
                            <p>Performed testing to ensure that front end applications are cross
                            browser friendly and mobile responsive.
                                                        </p>
                        </li>
                    </ul>
                    <div className = 'icon-row exp-header'>
                        <h2 className = "background2">GPOS</h2>
                        <div className = "col">
                            <p className = "bold">Cloud Based Point of Sales Company</p>
                            <p>3 Month Internships</p>
                        </div>
                    </div>
                    <p className = "bold exp-title">Front-end Intern</p>
                    <ul className = "ul-line">
                        <p className = "job-title">Dec 2019 - Feb 2020</p>
                        <li>
                            <p>Contributed in the development of new front end components and
                                templates for clients using React and Ant Design.</p>
                        </li>
                        <li>
                            <p>Refactored the legacy code base from vanilla HTML into a React
                            application.</p>
                        </li>
                        <li>
                            <p>Performed unit and integration tests to ensure correct functionality,
                            error handling and mobile responsiveness.</p>
                        </li>
                    </ul>
                    <p className = "bold exp-title">QA Intern</p>
                    <ul>
                        <p className = "job-title">Dec 2018 - Feb 2019</p>
                        <li>
                            <p>Conducted black box testing on an cloud based application using Postman and manual testing.</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>EDUCATION</h2>
                    <div className = 'icon-row exp-header'>
                        <h2 className = "background3">USYD</h2>
                        <div className = "col">
                            <p className = "bold">The University of Sydney</p>
                            <p>Feb 2017 - Dec 2021</p>
                        </div>
                    </div>
                    
                    <p className="bold exp-title">Bachelor of Engineering Honours (Software)</p>
                    <ul className = "ul-line">
                        <p className = "job-title">Honours Class II Division I</p>
                        <li>
                            <p>Conferred Date: 8 Oct 2021.</p>
                        </li>
                        <li>
                            <p>Graduation Date: 17 Dec 2021.</p>
                        </li>
                        <li>
                            <p>Main Courses: Object Oriented Programming,
                            Algorithm Design, Data Structures, Internet Software
                            Platforms, Human Computer Interaction, Full Stack
                            Application Design, Distributed Systems.
                            </p>
                        </li>
                        <li>
                            <p>Featured Project: Our full stack application for the
                            internet software platforms course (ELEC3609) was
                            chosen out of hundreds to be displayed as an example
                            of a great project to future students.
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>SKILLS</h2>
                    <p className = "details-main"><span className = "bold">Core: </span>JavaScript, Python, Java, HTML, CSS, React, NextJS, Sass,
                        Tailwind CSS, Bootstrap CSS, Axios, RESTful Web
                        Services/API, Responsive Design.
                    </p>
                    <br />
                    <p className = "details-main"><span className = "bold">Tools: </span>Version Control (Github, Sourcetree), Visual
                        Studio Code, Intellij IDE.
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default About;