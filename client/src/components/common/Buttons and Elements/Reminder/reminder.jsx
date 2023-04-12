import React, {useState} from'react';
import './Reminder.css'

import { AiOutlineBell} from "react-icons/ai";

const Reminder = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    }
    return(
        <div className='reminder-container'>
            <button className='reminder-button' onClick={toggleDropDown}><AiOutlineBell className='icon'/></button>
            {isOpen&&(
            <div className='reminder-content'>
                <AiOutlineBell className='notification-logo'/>
                <p className='notification-text'>No Notification</p>
            </div>
            )}
        </div>
    )
}

export default Reminder