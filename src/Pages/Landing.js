import React from 'react';

function Landing(props) {
    return (
        <div className = "page-container landing landing-tint" id = "landing">
            <div className = "main-text">
                <h1>Hello! I'm Kevin Su</h1>
                <h1>A Software Engineer and Front-end Developer based in Sydney, Australia</h1>    
            </div>
            <p>Check me out down below!</p>
            <a href = "#about"><h2><i class="fas fa-arrow-down"></i></h2></a>
            <br />
        </div>
    );
}

export default Landing;