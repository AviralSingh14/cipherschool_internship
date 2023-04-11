import React, { useState } from 'react';
import './LeftNav.css'

const LeftNav = ({onToggleMenu}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        onToggleMenu(!isOpen);
    };

    return(
        <div>
            {/* <button onClick={toggleMenu}>Toggle</button> */}
            <div className={`Nav-Left ${isOpen?'open':""}`}>
                <div className='Nav-Left-section'>
                    <ul className='Nav-Left-Content'>
                        <li>Home</li>
                        <li>Courses</li>
                        <li>Trending</li>
                        <li>Following</li>
                        <li>Discord</li>
                        <li>Creator</li>
                        <li>Feedback</li>
                        <li>Tour</li>
                    </ul>
                </div>
                <div className='Nav-Left-section'>
                    <div className='Nav-Left-Content'>
                        <button>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftNav