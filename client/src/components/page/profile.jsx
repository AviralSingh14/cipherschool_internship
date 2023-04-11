import './Profile.css'
import React from'react';

import NavBar from '../common/navbar/navbar';
import NameCard from '../common/NameCard/namecard';
import AboutMe from '../common/AboutMe/aboutme';
import CipherMap from '../common/CipherMap/ciphermap';
import Links from '../common/Links/links';

const Profile = () => {
	return(
		<div className='profile-container'>
            <NavBar/>
			<NameCard/>
			<div className='main-content'>
				<AboutMe/>
				<CipherMap/>
				<Links/>
			</div>
        </div>
	)
}
export default Profile;
