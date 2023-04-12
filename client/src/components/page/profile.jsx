import './Profile.css'
import React from'react';

import NavBar from '../common/navbar/navbar';
import NameCard from '../common/NameCard/namecard';
import AboutMe from '../common/AboutMe/aboutme';
import CipherMap from '../common/CipherMap/ciphermap';
import Links from '../common/Links/links';
import Info from '../common/Info/info';
import Password from '../common/Password/password';
import Interests from '../common/Interests/interests';

const Profile = ({selectedImage, profileData, onSave}) => {
	return(
		<div className='profile-container'>
            <NavBar selectedImage={selectedImage} onSave={onSave}/>
			<NameCard selectedImage={selectedImage} onSave={onSave} profileData={profileData}/>
			<div className='main-content'>
				<AboutMe/>
				<CipherMap/>
				<Links/>
				<Info/>
				<Password/>
				<Interests/>
			</div>
        </div>
	)
}
export default Profile;
