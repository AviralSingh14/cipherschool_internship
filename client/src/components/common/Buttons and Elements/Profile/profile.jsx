import React, {useState} from'react';
import './Profile.css'

import { CgProfile } from "react-icons/cg";
// import ProfileEdit from '../ProfileEdit/profileedit';

const Profile = ({selectedImage}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className='profile-dropdown-container'>
            <div className='profile-dropdown-button' onClick={toggleDropDown}>
                {selectedImage && (
                    <div className='nav-profile-image'>
                        <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="Profile Picture"
                        />
                    </div>
                )}
            </div>
            {isOpen&&(
            <div className='profile-dropdown-content'>
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