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
        <div className='dropdown-container'>
            <button className='dropdown-button' onClick={toggleDropDown}><AiOutlineCompass/>Browse<RiArrowDropDownLine/></button>
            {isOpen&&(
            <div className='dropdown-content'>
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