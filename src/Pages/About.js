import React from 'react';
import me from '../Images/me.jpg';

function About(props) {
    return (
        <div className = "page-container column-layout">
            <div className = "row">
                <h1>ABOUT ME</h1>
                <div className = "details-container">
                    <p><i class="fas fa-user"></i> KEVIN SU</p>
                    <p><i class="fas fa-envelope"></i> EMAIL</p>
                    <p><i class="fab fa-linkedin"></i> LINKEDIN </p>
                    <p><i class="fa-brands fa-github-square"></i> GITHUB </p>
                </div>
                <img className = "self-image" src={me} alt = "" />
                <div className = "details-container">
                    <p className = "details-title">A FEW WORDS FROM ME</p>
                    <p>Hey, I'm Kevin a software engineer from Sydney, Australia. </p>
                    <p>During highschool I took interest in subjects that enable my creativity such as art and graphical design and since then, building aesthetic things has grown to be a passion of mine. </p>
                    <p>After dabbling in various engineering topics in my first year of university, I have grown to love web development (both front end and back end) and is always hungry to learn new things. I like to code things from scratch and bring life to awesome ideas.</p>
                </div>
                <div className = "details-container">
                    <p className = "details-title">INTERESTS</p>
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
                            <p>Key Courses: OOP, Algorithm Design, Data Structures, Internet Software Platforms, Full Stack Application Design/Frameworks</p>
                        </li>
                        <li>
                            <p>Awards: Featured Project - our full stack application was chosen out of hundreds to be displayed as an
                                example of a great project to future students. </p>
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
                            <p>Developed and maintained code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</p>
                        </li>
                        <li>
                            <p>Performed testing to ensure cross-browser friendliness and mobile responsiveness</p>
                        </li>
                        <li>
                            <p>Configured digital asset management systems for clients using Sitecore Content Hub</p>
                        </li>
                    </ul>
                    <p className = "details-gpos details-main">Front-end Intern | GPOS</p>
                    <p>Cloud Based Point of Sales Company</p>
                    <ul>
                        <li>
                            <p>Developed templates using React and Ant Design</p>
                        </li>
                        <li>
                            <p>Refactored the website's code from vanilla HTML into a React Application</p>
                        </li>
                        <li>
                            <p>Wrote extensive integration and unit tests for the templates</p>
                        </li>
                    </ul>
                </div>
                <div className = "details-container">
                    <h2>SKILLS</h2>
                    <hr />
                    <p className = "skills-familiar details-main">HTML, CSS, JS, jQeury, React, CSS Frameworks (Bootstrap, Tailwind, SaSS), Next.js, Axios, Python, SQL</p>
                    <p className = "skills-other details-main">Version Control (Git, Sourcetree), Responsive Design</p>
                    
                </div>
            </div>
        </div>
    );
}

export default About;