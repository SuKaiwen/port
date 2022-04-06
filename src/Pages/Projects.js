import React from 'react';

import coinbased from "../Images/coinbase.jpg";
import coinbasedMobile from "../Images/coinbase-mobile.jpg";
import tracker from "../Images/tracker.jpg";
import trackerMobile from "../Images/tracker-mobile.jpg";
import movies from "../Images/movies.jpg";
import movieMobile from "../Images/movie-mobile.jpg";
import visualiser from "../Images/lis.jpg";
import lisMobile from "../Images/visualiser-mobile.jpg";


function Projects(props) {
    return (
        <div className = "page-container projects">
            <div className = "project-container">
                <h1 className = "project-header">PROJECTS</h1>
                <div className = "project-row">
                    <img className = "main-image" src = {coinbased} alt = "coinbased app" />
                    <img className = "side-image" src = {coinbasedMobile} alt = "coinbased mobile" />
                </div>
                <div className = 'project-grid'>
                    <h1 className = "project-title">COINBASED</h1>
                    <div>
                        <p>Coinbased is a crypto currency price tracker application which users can view popular coins including Etherium, Bitcoin, Dogecoin and more. Users can view metadata such as price charts, 24hour high/low prices and availability.</p>
                    </div>
                    <div>
                        <p>In addition to those previously mentioned functionailities, users are also able to search for coins and filter coins by gainers/losers. Coinbased is built in React using the CoinGecko API and hosted on Vercel.</p>
                    </div>
                    <div>
                        <p><i class="fab fa-github"></i> Github</p>
                        <p><i class="fas fa-wifi"></i> Live Site</p>
                    </div>
                </div>
                <div className = "project-row">
                    <img className = "main-image" src = {tracker} alt = "tracker app" />
                    <img className = "side-image" src = {trackerMobile} alt = "tracker mobile" />
                </div>
                <div className = 'project-grid'>
                    <h1 className = "project-title">TRACKER</h1>
                    <div>
                        <p>Tracker is a clone of a task delegation app similar to Jira. Functionalities include: dragging and dropping issues to a new section/column, searching for an issue, adding new users/tags/issues, viewing an issue and adding a comment.</p>
                    </div>
                    <div>
                        <p>This project is created using React and BeautifulDnD (drag and drop library) hosted on Vercel.</p>
                    </div>
                    <div>
                        <p><i class="fab fa-github"></i> Github</p>
                        <p><i class="fas fa-wifi"></i> Live Site</p>
                    </div>
                </div>
                <div className = "project-row">
                    <img className = "main-image" src = {movies} alt = "movie app" />
                    <img className = "side-image" src = {movieMobile} alt = "movie mobile" />
                </div>
                <div className = 'project-grid'>
                    <h1 className = "project-title">MOVIE DB</h1>
                    <div>
                        <p>Movie DB is an application where users can view popular movies, search movies, search genre and view movie metadata such as actors, budget and production companies.</p>
                    </div>
                    <div>
                        <p>This project created in React with custom CSS and The Movie DB API and hosted on Vercel. </p>
                    </div>
                    <div>
                        <p><i class="fab fa-github"></i> Github</p>
                        <p><i class="fas fa-wifi"></i> Live Site</p>
                    </div>
                </div>
                <div className = "project-row">
                    <img className = "main-image" src = {visualiser} alt = "visualiser app" />
                    <img className = "side-image" src = {lisMobile} alt = "visualiser mobile" />
                </div>
                <div className = 'project-grid'>
                    <h1 className = "project-title">VISUALISER</h1>
                    <div>
                        <p>Visualiser is a React application that helps visualise the dynamic programming solution to the longest increasing subsequence problem. Simply type in numbers in the input box and press submit to add that number to the array.</p>
                    </div>
                    <div>
                        <p>Hit "solve" for the visualisation to take effect. It pushes steps into a stack and uses a setTimeout to visualise each step once the algorithm has completed.</p>
                    </div>
                    <div>
                        <p><i class="fab fa-github"></i> Github</p>
                        <p><i class="fas fa-wifi"></i> Live Site</p>
                    </div>
                </div>
                <h1>OTHER PROJECTS</h1>
                <div className = "projects-other">
                    <div className = "project-card">
                        <p>WEATHER APP</p>
                        <h1>01</h1>
                        <p>Weather application made in Next.js using OpenWeatherMaps API. View weather data (such as forecast, temperatures and humidity) from various cities around the globe.</p>
                        <p><i class="fab fa-github"></i> Github</p>
                    </div>
                    <div className = "project-card">
                        <p>SNIPSNOK</p>
                        <h1>02</h1>
                        <p>Created along with team members as a part of a university project, SnipSnok is an application designed to help struggling content creators in Australia. Users can donate to others, follow others and post/like content they enjoy!</p>
                        <p><i class="fab fa-github"></i> Github</p>
                    </div>
                    <div className = "project-card">
                        <p>BOUNCING BALLS</p>
                        <h1>03</h1>
                        <p>Created and developed a physics simulation of balls bouncing within a 3D cube space. Each ball is created as a class with a x, y, z coordinate, x, y, z speed and an update location function which takes into account the laws of physics to set up the trajectory of the ball.</p>
                        <p><i class="fab fa-github"></i> Github</p>
                    </div>
                    <div className = "project-card">
                        <p>MY PORTFOLIO</p>
                        <h1>04</h1>
                        <p>Created this portfolio/previous portfolios to try out new CSS layouts and visual designs that I find cool.</p>
                        <p><i class="fab fa-github"></i> Github</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;