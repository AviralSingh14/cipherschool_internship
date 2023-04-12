import React,{useState} from 'react';

import Profile from './components/page/profile';

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

  return (
    <div className="App">
      <Profile selectedImage={selectedImage} profileData={profileData} onSave={handleSaveClick}/>
    </div>
  );
}

export default App;
