import './Profile.css'
import React, {useState, useEffect} from'react';

import NavBar from '../../common/navbar/navbar';
import NameCard from '../../common/NameCard/namecard'
import AboutMe from '../../common/AboutMe/aboutme'
import CipherMap from '../../common/CipherMap/ciphermap'
import Links from '../../common/Links/links'
import Info from '../../common/Info/info'
import Password from '../../common/Password/password'
import Interests from '../../common/Interests/interests'
import Followers from '../Followers/followers'

const Profile = () => {
	const [user, setUser] = useState(null);
	useEffect(() => {
	  const fetchUserDetails = async () => {
		  try {
			  const token = localStorage.getItem("token");
			  if(!token){
				  return;
			  }
  
			  const response = await fetch("http://localhost:4000/user/me", {
				  headers : {
					  "Authorization" : `${token}`,
				  }   
			  })
  
			  if (response.ok){
				  const data = await response.json()
				  console.log(data)
				  setUser(data.user)
				  setProfileData({
					firstName: data.firstname,
					lastName: data.lastname,
					email: data.email,
				  })
			  }else{
				  const error = await response.json()
				  console.error(error.message);
			  }
		  }
		  catch(error){
			  console.error(error)
		  }
	  }
	  fetchUserDetails()
	}, [])

	const [profileData, setProfileData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		profilePic:null,
	  })
	const [selectedImage, setSelectedImage] = useState(null);
	
	const handleSaveClick = (updatedProfileData, imageFile) => {
		setProfileData(updatedProfileData)
		setSelectedImage(imageFile)    
	}

	return(
		<div className='profile-container'>
            <NavBar selectedImage={selectedImage} onSave={handleSaveClick}/>
			<NameCard selectedImage={selectedImage} onSave={handleSaveClick} profileData={profileData}/>
			<div className='main-content'>
				<AboutMe/>
				<CipherMap/>
				<Links/>
				<Info/>
				<Password/>
				<Interests/>
				<Followers/>
			</div>
        </div>
	)
}
export default Profile;
