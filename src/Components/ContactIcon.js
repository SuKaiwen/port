import React from 'react';

function ContactIcon(props) {
    return (
        <div className = "contact-icon">
            <div className = "contact-contents">    
                <div className = "contact-content">
                    <p>Linkedin</p>
                    <p>Email</p>
                    <p>Github</p>
                </div>
                <i class="fa-solid fa-circle-info"></i>
            </div>
        </div>
    );
}

export default ContactIcon;