import React from 'react';
import me from '../Images/me.jpg';

function About(props) {
    return (
        <div className = "page-container" id = "about">
            <div className='main-text'>
                <h1 className = 'blue-color'>About Me</h1>
                <h2>Hi there!
                    I'm Kevin, a Software Engineer with experience in the core structure of the frontend (HTML, CSS, JS) as well as various frameworks including React, NextJS and more. I enjoy developing intricate systems and websites with emphasis on functionality, UI/UX and efficiency. 
                </h2>
                <div className = "logo-container">
                    <a href="mailto:kevinsu@outlook.co.nz" target="_blank"><p><i class="fas fa-envelope"></i> Email</p></a>
                    <a href="https://www.linkedin.com/in/kevin-su-618163191/" target="_blank"><p><i class="fab fa-linkedin"></i> Linkedin</p></a>
                    <a href="https://github.com/SuKaiwen" target="_blank"><p><i class="fa-brands fa-github-square"></i> Github</p></a>
                </div>
            </div>

            <div className = "main-grid">
                <div>
                    <h1 className = "blue-color">Education</h1>
                    <p className = "bold">University of Sydney</p>
                    <p>Bachelor of Engineering Honours (BeHons), Software Engineering</p>
                    <p>Feb 2017 - July 2021</p>
                    <ul>
                        <li>
                            <p><span className = "bold">Main Courses:</span> Object Oriented Programming,
                            Algorithm Design, Data Structures, Internet Software
                            Platforms, Human Computer Interaction, Full Stack
                            Application Design, Distributed Systems.
                            </p>
                        </li>
                        <li>
                            <p><span className = "bold">Achievements:</span> Featured Project - Our full stack application for the
                            internet software platforms course (ELEC3609) was
                            chosen out of hundreds to be displayed as an example
                            of a great project to future students.
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className = "blue-color">Experience</h1>
                    <p className = "details-main bold">Front-end Developer | AKQA</p>
                    <p>Oct 2021 - Present</p>
                    <p>Digital Design and Communication Agency</p>
                    <ul>
                        <li>
                            <p>Contributed to the development and maintenance of code bases for
                            various e-commerce websites primarily using HTML, CSS, Sass, JS,
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
                    <p className = "details-main bold">Front-end Intern | GPOS</p>
                    <p>Dec 2019 - Feb 2020</p>
                    <p>Cloud Based Point of Sales Company</p>
                    <ul>
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
                </div>
                <div>
                    <h1 className = "blue-color">Skills</h1>
                    <p className = "details-main"><span className = "bold">Core: </span>JavaScript, Python, Java, HTML, CSS, React, NextJS, NodeJS, Sass,
                        Tailwind CSS, Bootstrap CSS, Axios, RESTful Web
                        Services/API, Responsive Design.
                    </p>
                    <br />
                    <p className = "details-main"><span className = "bold">Tools: </span>Version Control (Github, Sourcetree), Visual
                        Studio Code, Intellij IDE.
                    </p>
                    <br />
                </div>
                <div>
                    <h1 className = "blue-color">Interests</h1>
                    <p className = "details-main">Graphic Design, UI/UX, Art, Painting, Chess and Video games.</p>
                </div>
            </div>

            {/* <div className = "row">
                <h1>ABOUT ME</h1>
                <div className = "details-container p20">
                    <p><i class="fas fa-user"></i> KEVIN SU</p>
                    <a href="mailto:kevinsu@outlook.co.nz" target="_blank"><p><i class="fas fa-envelope"></i> Email</p></a>
                    <a href="https://www.linkedin.com/in/kevin-su-618163191/" target="_blank"><p><i class="fab fa-linkedin"></i> Linkedin</p></a>
                    <a href="https://github.com/SuKaiwen" target="_blank"><p><i class="fa-brands fa-github-square"></i> Github</p></a>
                </div>
                <img className = "self-image" src={me} alt = "" />
                <div className = "details-container p20">
                    <p className = "details-title">Hello there, nice to meet you! I'm Kevin, here's a little about me. </p>
                    <p>During highschool I took interest in subjects that enable my creativity such as art and graphical design and since then, building aesthetic things has grown to be a passion of mine. </p>
                    <p>After dabbling in various engineering topics in my first year of university, I have grown to love web development (both front-end and back-end) and is always hungry to learn new things. I like to code things from scratch and bring life to awesome ideas.</p>
                </div>
                <div className = "details-container p20">
                    <p className = "details-title">Some stuff I like</p>
                    <p>Chess, table tennis, user interfaces, graphic design and art/painting</p>
                </div>
            </div>
            <div className = "row">
                <h1>CAREER SUMMARY</h1>
                <div className = "details-container">
                    <h2>EDUCATION</h2>
                    <hr />
                    <p className = "details-uni details-main">Bachelor of Software Engineering Honours | The University of Sydney</p>
                    <ul>
                        <li>
                            <p>Key Courses: OOP, Algorithm Design, Data Structures, Internet Software Platforms, Full Stack Application Design/Frameworks.</p>
                        </li>
                        <li>
                            <p>Awards: Featured Project - our full stack application was chosen out of hundreds to be displayed as an
                                example of a great project to future students.</p>
                        </li>
                    </ul>
                </div>
                <div className = "details-container">
                    <h2>EXPERIENCE</h2>
                    <hr />
                    <p className = "details-akqa details-main">Front-end Developer | AKQA</p>
                    <p>Digital Design and Communication Agency</p>
                    <ul>
                        <li>
                            <p>Contributed to the development and maintenance of code bases for
                            various e-commerce websites primarily using HTML, CSS, Sass, JS,
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
                    <p className = "details-gpos details-main">Front-end Intern | GPOS</p>
                    <p>Cloud Based Point of Sales Company</p>
                    <ul>
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
                </div>
                <div className = "details-container">
                    <h2>SKILLS</h2>
                    <hr />
                    <p className = "skills-familiar details-main">JavaScript, Python, Java, HTML, CSS, React, NextJS, NodeJS, Sass,
                        Tailwind CSS, Bootstrap CSS, Axios, RESTful Web
                        Services/API, Responsive Design.
                        </p>
                    <p className = "skills-other details-main">Version Control (Github, Sourcetree), Visual
                    Studio Code, Intellij IDE.
                    </p>
                    
                </div>
            </div> */}
        </div>
    );
}

export default About;