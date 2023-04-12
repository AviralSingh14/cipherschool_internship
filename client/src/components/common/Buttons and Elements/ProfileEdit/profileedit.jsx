import './ProfileEdit.css'
import React, {useState} from'react';

import { MdEdit } from "react-icons/md";

const ProfileEdit = ({profileData, onSave}) => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [firstName, setFirstName] = useState(profileData.firstName);
    const [lastName, setLastName] = useState(profileData.lastName);
    const [email, setEmail] = useState(profileData.email);
    const [profilePic, setProfilePic] = useState(profileData.profilePic);
    const [imageFile, setImageFile] = useState(null);
    
    const handleOpenPopup = () => {
        setPopupVisible(true);
    };

    const handleCancelClick = () => {
        setPopupVisible(false);
    }

    const handleSaveClick = () => {
        const updateProfileData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            profilePic: profilePic
        }
        const updatedProfileData = { ...profileData, profilePic: imageFile }
        onSave(updateProfileData, imageFile, updatedProfileData)
        setPopupVisible(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "firstName":
                setFirstName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "email":
                setEmail(value);
                break;
            default:
                break;
        }
    };

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        setImageFile(selectedFile);
    };

	return(
		<div className='Links'>
            <div className='Links-Section'>
                <div className='edit-button' onClick={handleOpenPopup}>
                    <MdEdit/>
                </div>
                {isPopupVisible && (
                    <div className='popup-window-edit'>
                        <div className='popup-window-edit-sub'>
                            <div className='popup-sub-edit'>
                                <div className='popup-content-edit'>
                                    <input
                                        id='profilePicInput' 
                                        onChange={handleImageChange}
                                        style={{display:"none"}}
                                        accept='image/*'
                                        type="file"
                                    />
                                    <p>First Name</p>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder='First Name'
                                        value={firstName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='popup-content-edit'>
                                    <p>Last Name</p>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder='Last Name'
                                        value={lastName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='popup-content-edit'>
                                    <p>Email Address</p>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder='Email Address'
                                        value={email}
                                        onChange={handleInputChange}
                                        disabled
                                    />
                                </div>
                                <div className='popup-content-check-edit'>
                                    <div className='popup-button-edit'>
                                        <button onClick={() => document.getElementById("profilePicInput").click()}>
                                            Edit Profile Picture
                                        </button>
                                        <button onClick={handleCancelClick}>Cancel</button>
                                        <button onClick={handleSaveClick}>Save</button>                                    
                                    </div>
                                </div>
                                <div className='overlay' onClick={handleSaveClick}></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
	)
}
export default ProfileEdit;