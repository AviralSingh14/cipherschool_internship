import React, {useState} from'react';
import './Browse.css'

import { AiOutlineCompass } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const Browse = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    }
    return(
        <div className='browse-dropdown-container'>
            <button className='browse-dropdown-button' onClick={toggleDropDown}><AiOutlineCompass/>Browse<RiArrowDropDownLine/></button>
            {isOpen&&(
            <div className='browse-dropdown-content'>
                <ul>
                    <li>App Development</li>
                    <li>Web Development</li>
                    <li>Game Development</li>
                    <li>Data Structures</li>
                    <li>Programming</li>
                    <li>Machine Learning</li>
                    <li>Data Science</li>
                    <li>Others</li>
                </ul>
            </div>
            )}
        </div>
    )
}

export default Browse