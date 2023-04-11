import './Profile.css'
import React from'react';

import NavBar from '../common/navbar/navbar';
import NameCard from '../common/NameCard/namecard';
import AboutMe from '../common/AboutMe/aboutme';

const Profile = () => {
	return(
		<div className='profile-container'>
            <NavBar/>
			<NameCard/>
			<div className='main-content'>
				<AboutMe/>
			</div>
        </div>
	)
}
export default Profile;
