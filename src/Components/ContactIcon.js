import React from 'react';

function ContactIcon(props) {
    return (
        <div className = "contact-icon">
            <div className = "contact-contents">    
                <div className = "contact-content">
                    <a href="mailto:kevinsu@outlook.co.nz" target="_blank"><p>Email <i class="fas fa-envelope"></i></p></a>
                    <a href="https://www.linkedin.com/in/kevin-su-618163191/" target="_blank"><p>Linkedin <i class="fab fa-linkedin"></i></p></a>
                    <a href="https://github.com/SuKaiwen" target="_blank"><p>Github <i class="fa-brands fa-github-square"></i></p></a>
                </div>
                <i class="fa-solid fa-circle-info main-icon"></i>
            </div>
        </div>
    );
}

export default ContactIcon;