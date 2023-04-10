import './Navbar.css'
import React from'react';
const NavBar = () => {
	return(
		<div className='Nav'>
            <div className='Nav-right'>
                <div className='Nav-right-content'>
                    <h3>Menu</h3>
                    <h3>CipherSchools</h3>
                    <select name='Browse' className='browse-menu'>
                        <option value='App Development'>App Development</option>
                        <option value='Web Development'>Web Development</option>
                        <option value='Game Development'>Game Development</option>
                        <option value='Data Structures'>Data Structures</option>
                        <option value='Programming'>Programming</option>
                        <option value='Machine Learning'>Machine Learning</option>
                        <option value='Data Science'>Data Science</option>
                        <option value='Others'>Others</option>
                    </select>
                </div>
            </div>

            <div className='Nav-left'>
                <div className='Nav-left-content'>
                    <input type='text' id='search' placeholder='Search and Learn' className='search'/>
                    <p>Rem</p>
                    <p>Pro</p>
                    <p>Coin</p>
                    <p>theme</p>
                </div>
            </div>
        </div>
	)
}
export default NavBar;