import React from 'react';

function ContactIcon(props) {

    return (
        <div className = "contact-icon">
            <div className = "contact-contents">   
                <a href = "mailto:kevinsu@outlook.co.nz" target="_blank"><i class="fa-solid fa-envelope main-icon"></i></a>
            </div>
        </div>
    );
}

export default ContactIcon;