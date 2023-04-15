import Profile from '../Buttons and Elements/Profile/profile';
import ProfileEdit from '../Buttons and Elements/ProfileEdit/profileedit';
import './NameCard.css'
import React, {useEffect, useState} from'react';

const NameCard = ({profileData, selectedImage, onSave}) => {

	return(

		<div className='name-card'>
            <div className='name-card-right'>
                <div className='profile-picture'>
                    {selectedImage && (
                        <div className='profile-picture-image'>
                            <img
                                src={URL.createObjectURL(selectedImage)}
                                alt="Profile Picture"
                            />
                        </div>
                    )}
                    <div className='edit-button-profile'><ProfileEdit
                        profileData = {profileData}
                        onSave = {onSave}
                    /></div>
                </div>
                <div className='name-card-content'>
                    <p className='card-name'>Hello,</p>
                    <p className='card-name-bold'>{profileData.firstName} {profileData.lastName}</p>
                    <p className='card-name'>{profileData.email}</p>
                </div>
            </div>
            <div className='name-card-left'>
                <a>0 Followers</a>
            </div>
        </div>
	)
}
export default NameCard;