import React, { useState } from 'react'
import { auth } from '../firebase'
import { updateProfile } from "firebase/auth";
import { Link } from 'react-router-dom';
import LogOut from './logout';
import PopUpBox from './PopUpBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faComments, faLink } from '@fortawesome/free-solid-svg-icons';

const Settings = () => {
    const handleSave = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        if (name === '') {
            open('Please enter a valid name');
            return;
        }
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            open('Name changed to ' + name);
            console.log(auth.currentUser);
        }).catch((error) => {
            open(error.message);
            console.log(error);
        });
    };
    const [popUp, setPopUp] = useState(null);
    const open = (message) => {
        setPopUp(<PopUpBox message={message} close={close} />);
    };
    const close = () => {
        setPopUp(null);
    };
    
    return (
        <div className='settings'>
            <div className='nav'>
                Settings
                <Link to="/" className='link'><FontAwesomeIcon icon={faComments} /></Link>
            </div>
            <h1>Change Name</h1>
            <div className="info">
                <FontAwesomeIcon icon={faCircleInfo} className='iconInfo' />
                <p>The change will be visible in new messages</p>
            </div>
            <form onSubmit={handleSave}>
                <input type="text" name="name" placeholder="Enter new name" />
                <button type='submit'>Save</button>
            </form>
            <div className="author">
                <h2>Created by:<br />Marcin Kalemba</h2>
                <div className="info">
                    <FontAwesomeIcon icon={faLink} className='iconInfo'/>
                    <div className="infoText">
                        <a href="https://github.com/ToshiM17" target='blank'>My Github</a>
                        <a href="https://www.linkedin.com/in/marcin-kalemba-70975b290/" target='blank'>My Linkedin</a>
                    </div>
                </div>
            </div>
            <LogOut />
            {popUp}
        </div>
    );
}

export default Settings