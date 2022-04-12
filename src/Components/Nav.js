import React, {useState} from 'react';

function Nav(props) {

    const [toggle, setToggle] = useState(false);

    let menu;

    if(toggle){
        menu = 
            <div className = "menu">
                <p><a href = "#about">About</a></p>
                <p><a href = "#projects">Projects</a></p>
                <p><a href = "#contact">Contact</a></p>
            </div>
    }

    return (
        <div className = "nav">
            <ul>
                <p className = "logo left">KS</p>
                <p><a href = "#landing left">Kevin Su</a></p>
            </ul>
            <ul className='ul-mobile'>
                <li><a href = "#about">About</a></li>
                <li><a href = "#projects">Projects</a></li>
                <li><a href = "#contact">Contact</a></li>
            </ul>
            <div className = "mobile-bars">
                <button onClick = {() => setToggle(!toggle)}><i class="fas fa-bars"></i></button>
            </div>
            {menu}
        </div>
    );
}

export default Nav;