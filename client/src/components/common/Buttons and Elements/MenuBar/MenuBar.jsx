import React, { useState } from 'react';
import './MenuBar.css'

import { HiMenuAlt2 } from "react-icons/hi";
import { FiUserCheck } from "react-icons/fi";
import { AiFillHome, AiFillCompass, AiOutlineLogout } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { MdSpaceDashboard } from "react-icons/md";
import { BsDiscord, BsChatLeftTextFill } from "react-icons/bs";
import { TbCircleLetterC, TbDirections } from "react-icons/tb";

const MenuBar = ({onLogOut, setIsFollower}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // const [isFollower, setIsFollower] = useState(false)

    return(
        <div>
            <button onClick={toggleMenu} className='button-menu'><HiMenuAlt2 className='icon'/></button>
            <div className={`Nav-Left ${isOpen?'open':""}`}>
                <div className='MenuBar-Section'>
                    <ul className='MenuBar-List'>
                        <li><AiFillHome/> Home</li>
                        <li><ImBooks/> Courses</li>
                        <li><AiFillCompass/> Trending</li>
                        <li onClick={setIsFollower}><FiUserCheck/> Following</li>
                        <li><MdSpaceDashboard/> Dashboard</li>
                        <li><BsDiscord/>Discord</li>
                        <li><TbCircleLetterC/> Creator Access</li>
                        <li><BsChatLeftTextFill/> Send Feedback</li>
                        <li><TbDirections/>  User Tour</li>
                    </ul>
                </div>
                <div className='MenuBar-Section'>
                    <div className='Nav-Left-Content'>
                        <ul className='MenuBar-List'>
                            <li onClick={onLogOut}><AiOutlineLogout/> Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuBar