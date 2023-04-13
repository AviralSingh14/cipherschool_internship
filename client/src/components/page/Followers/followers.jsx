import './Followers.css'
import React from'react';

import NavBar from '../../common/navbar/navbar';

const Followers = ({selectedImage, onSave}) => {
	return(
		<div className='Followers-container'>
            <NavBar selectedImage={selectedImage} onSave={onSave}/>
        </div>
	)
}
export default Followers;