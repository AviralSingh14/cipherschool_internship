import React,{useState, useEffect} from 'react';

import Profile from './components/page/Profile/profile';
import Login from './components/page/Login Page/login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div>
      {isLoggedIn?(
        <Profile/>
      ):(
        <Login onLoginSuccess={handleLoginSuccess}/>
      )}
    </div>
  );
}

export default App;
