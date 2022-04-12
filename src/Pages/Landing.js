import React from 'react';

function Landing(props) {
    return (
        <div className = "page-container landing" id = "landing">
            <h1>👋 Hello! I'm Kevin.</h1>
            <p>A Software Engineer and Front-end Developer based in Sydney Australia.</p>
            <p>Check me out down below!</p>
            <a href = "#about"><h2><i class="fas fa-arrow-down"></i></h2></a>
        </div>
    );
}

export default Landing;