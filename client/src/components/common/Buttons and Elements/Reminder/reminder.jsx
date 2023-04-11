import React, {useState} from'react';
import './Reminder.css'

import { AiOutlineBell} from "react-icons/ai";

const Reminder = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    }
    return(
        <div className='dropdown-container'>
            <button className='dropdown-button' onClick={toggleDropDown}><AiOutlineBell className='icon'/></button>
            {isOpen&&(
            <div className='dropdown-content'>
                <AiOutlineBell className='notification-logo'/>
                <p className='notification-text'>No Notification</p>
            </div>
            )}
        </div>
    )
}

export default Reminder