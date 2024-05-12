import React from 'react'
import { auth } from '../firebase'
import { updateProfile } from "firebase/auth";
import { Link } from 'react-router-dom';
import LogOut from './logout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const Settings = () => {
    const handleSave = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            alert('Profile updated');
            console.log(auth.currentUser);
        }).catch((error) => {
            alert('An error occurred');
            console.log(error);
        });
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
            <LogOut />
        </div>
    );
}

export default Settings