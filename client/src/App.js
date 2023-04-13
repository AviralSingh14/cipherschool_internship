import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

import Profile from './components/page/Profile/profile';
import Login from './components/page/Login Page/login';

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

  return (
    <div>
      {isLoggedIn?(
        <Profile selectedImage={selectedImage} profileData={profileData} onSave={handleSaveClick}/>
      ):(
        <Login onLoginSuccess={handleLoginSuccess}/>
      )}
      
      
    </div>
  );
}

export default App;
