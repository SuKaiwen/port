import React from 'react';

import firebrysignup from '../Images/firebrysignup.JPG';
import firebrylogin from '../Images/firebrylogin.JPG';
import firebrysettings from '../Images/firebrysettings.JPG';
import firebrymoments from '../Images/firebrymoments.JPG';
import firebryupload from '../Images/firebryupload.JPG';

function Firebry(props) {
    return (
        <div>
            <div className = "firebry-landing" id = "about">
            </div>
            <div className ="page-container">
                <h1>Firebry</h1>
                <div className = "about-container">
                    <hr />
                    <h2>Summary</h2>
                    <div className = "heading-text">
                        <p>Firebry is an image hosting website created using <span className = "bold">Firebase Backend</span> and <span className = "bold">React Frontend</span>. 
                        Users are able to create an account, login, update password and add/upload images with an associated title, description and location and it will store it to the database with a click of a button.</p>
                    </div>
                </div>
                <div className = "main-grid">
                    <div>
                        <h1>Sign up</h1>
                        <p>Users are able to sign up using an email, password, username, first name and last name. The frontend sends a POST request to Google Firebase DB via Firebase Authentication Methods.</p>
                    </div>
                    <div>
                        <img src = {firebrysignup} alt = "sign up" />
                    </div>
                    <div>
                        <h1>Authentication</h1>
                        <p>Firebry includes an Authentication system in which users are able to log in and log out.</p>
                    </div>
                    <div>
                        <img src = {firebrylogin} alt = "login" />
                    </div>
                    <div>
                        <h1>Edit Password</h1>
                        <p>Firebry users are able to update their password in the application which will send a POST request to Firebase DB.</p>
                    </div>
                    <div>
                        <img src = {firebrysettings} alt = "login" />
                    </div>
                    <div>
                        <h1>Viewing Moments</h1>
                        <p>Firebry users are able to view moments they uploaded in a grid format.</p>
                    </div>
                    <div>
                        <img src = {firebrymoments} alt = "login" />
                    </div>
                    <div>
                        <h1>Upload Images</h1>
                        <p>Upload Moments to the DB. Users are able to upload an image and attach a title, description, location along with it. Images are unique to the user, users can only view moments they have uploaded on their profile.</p>
                    </div>
                    <div>
                        <img src = {firebryupload} alt = "login" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Firebry;