import React from 'react';

function Landing(props) {
    return (
        <div className = "page-container landing" id = "landing">
            <div className = "main-text">
                <h1>Hello! I'm <span className = "blue-color">Kevin Su</span>.</h1>
                <h1>A <span className = "red-color">Software Engineer</span> and <span className = "green-color">Front-end Developer</span> based in <span className = "yellow-color">Sydney, Australia</span>.</h1>    
            </div>
            <p>Check me out down below!</p>
            <a href = "#about"><h2><i class="fas fa-arrow-down"></i></h2></a>
            <br />
        </div>
    );
}

export default Landing;