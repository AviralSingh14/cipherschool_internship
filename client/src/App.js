import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

import Profile from './components/page/Profile/profile';
import Login from './components/page/Login Page/login';
import Followers from './components/page/Followers/followers';

function App() {
  const [profileData, setProfileData] = useState({
    firstName: "Aviral",
    lastName: "Singh",
    email: "aviralsingh2714@gmail.com",
    profilePic:null,
  })
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSaveClick = (updatedProfileData, imageFile) => {
    setProfileData(updatedProfileData)
    setSelectedImage(imageFile)    
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }
  
  const followerShow = () => {
    setIsFollower(true);
  }

  const [isFollower, setIsFollower] = useState(false)

  return (
    <div>
      {isLoggedIn?(
        <Profile selectedImage={selectedImage} profileData={profileData} onSave={handleSaveClick} onLogOut={handleLogout} setIsFollower
        ={followerShow}/>
      ):(
        <Login onLoginSuccess={handleLoginSuccess}/>
      )}
      {!isLoggedIn && <Login onLoginSuccess={handleLoginSuccess}/>}
      {isFollower && <Followers/>}
    </div>
  );
}

export default App;
