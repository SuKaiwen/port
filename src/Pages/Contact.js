import React from 'react';

function Contact(props) {
    return (
        <div className = "contact-container" id = "contact">
            <h1>CONTACT ME</h1>
            <p>Thank you for making it all the way to the end. Feel free to reach out to me!</p>
            <a href="mailto:kevinsu@outlook.co.nz" target="_blank"><p><i class="fas fa-envelope"></i> EMAIL</p></a>
            <a href="https://www.linkedin.com/in/kevin-su-618163191/" target="_blank"><p><i class="fab fa-linkedin"></i> LINKEDIN </p></a>
        </div>
    );
}

export default Contact;