import './Navbar.css'
import React, {useState} from'react';

import MenuBar from '../Buttons and Elements/MenuBar/MenuBar';
import SearchBar from '../Buttons and Elements/SearchBar/searchbar';
import Browse from '../Buttons and Elements/Browse/browse';
import Reminder from '../Buttons and Elements/Reminder/reminder';
import Profile from '../Buttons and Elements/Profile/profile';
import Coin from '../Buttons and Elements/Coin/coin';

const NavBar = ({selectedImage, onSave, onLogOut}) => {
	return(
		<div className='Nav'>
            <div className='main-screen'>
                <div className='Nav-right'>
                    <div className='Nav-right-content'>
                        <MenuBar/>
                        <div className='company'>
                            <img src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png" alt="" className='logo'/>
                            <h3>CipherSchools</h3>
                        </div>
                        <Browse/>
                    </div>
                </div>

                <div className='Nav-left'>
                    <div className='Nav-left-content'>
                        <SearchBar/>
                        <Reminder/>
                        <Profile selectedImage={selectedImage} onSave={onSave}/>
                        <Coin/>
                    </div>
                </div>
            </div>
            <div className='small-screen'>
                <div className='Nav-right'>
                    <div className='Nav-right-content'>
                        <div className='company'>
                            <img src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png" alt="" className='logo'/>
                            <h3>CipherSchools</h3>
                        </div>
                    </div>
                </div>

                <div className='Nav-left'>
                    <div className='Nav-left-content'>
                        <Browse/>
                        <SearchBar/>
                        <Reminder/>
                        <MenuBar onLogOut={onLogOut}/>
                    </div>
                </div>
            </div>
        </div>
	)
}
export default NavBar;