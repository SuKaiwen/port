import React, {useState, useEffect} from 'react';

import useScrollListener from "../Hooks/useScrollListener";

function Nav(props) {

    const [toggle, setToggle] = useState(false);
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    const [navAct, setNavAct] = useState(false);

    // Update classList of nav on scroll 
    // For effects of show/hide on scroll down/up
    useEffect(() => {
        const _classList = [];

        if (window.scrollY > 500) {
            setNavAct(true);
        }else {
            setNavAct(false);
        }

        if (scroll.y > 150 && scroll.y - scroll.lastY > 0){
            _classList.push("nav-hidden");
        }

        setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);


    // Show menu for mobile versions on click (hamburger)
    let menu;

    if(toggle){
        menu = 
            <div className = "menu">
                <p><a href = "/#about">About</a></p>
                <p><a href = "/#projects">Projects</a></p>
                <p><a href = "/#contact">Contact</a></p>
            </div>
    }

    return (
        <nav className={navAct ? "nav-active " + navClassList.join(" ") : " " + navClassList.join(" ")}>
            <ul>
                <p className = "logo left">KS</p>
                <p><a href = "/#landing">Kevin Su</a></p>
            </ul>
            <ul className='ul-mobile'>
                <li><a href = "/#about">About</a></li>
                <li><a href = "/#projects">Projects</a></li>
                <li><a href = "/#contact">Contact</a></li>
            </ul>
            <div className = "mobile-bars">
                <button onClick = {() => setToggle(!toggle)}><i class="fas fa-bars"></i></button>
            </div>
            {menu}
        </nav>
    );
}

export default Nav;