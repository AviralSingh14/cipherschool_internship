import React, {useState} from'react';
import './Profile.css'

import { CgProfile } from "react-icons/cg";

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    }
    return(
        <div className='dropdown-container'>
            <button className='dropdown-button' onClick={toggleDropDown}><CgProfile className='icon'/></button>
            {isOpen&&(
            <div className='dropdown-content'>
                <ul>
                    <li>Dashboard</li>
                    <li>My Profile</li>
                    <li>Enrolled Courses</li>
                    <li>Wishlist</li>
                    <li>Liked Videos</li>
                </ul>
            </div>
            )}
        </div>
    )
}

export default Profile