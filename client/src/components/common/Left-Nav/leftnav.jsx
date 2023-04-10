import './LeftNav.css'
import React from'react';

const LeftNav = () => {
    return(
        <div className='Nav-Left'>
            <div className='Nav-Left-section'>
                <div className='Nav-Left-Content'>
                    <p>Home</p>
                    <p>Courses</p>
                    <p>Trending</p>
                    <p>Following</p>
                    <p>Discord</p>
                    <p>Creator</p>
                    <p>Feedback</p>
                    <p>Tour</p>
                </div>
            </div>
            <div className='Nav-Left-section'>
                <div className='Nav-Left-Content'>
                    <p>Logout</p>
                </div>
            </div>
            
        </div>
    )
}

export default LeftNav