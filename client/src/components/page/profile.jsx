import './Profile.css'
import React from'react';

import NavBar from '../common/navbar/navbar';
import NameCard from '../common/NameCard/namecard';

const Profile = () => {
	return(
		<div>
            <NavBar/>
			<NameCard/>
        </div>
	)
}
export default Profile;
