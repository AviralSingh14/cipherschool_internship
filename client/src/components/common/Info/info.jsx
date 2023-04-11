import './Info.css'
import React, {useState} from'react';

const Info = () => {

    const [dropdownValue, setDropdownValue] = useState(''); 
    const [dropdownValueOne, setDropdownValueOne] = useState(''); 
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };
    
    const handleDropdownChange = (e) => {
        setDropdownValue(e.target.value);
    };

    const handleDropdownChangeOne = (e) => {
        setDropdownValueOne(e.target.value);
    };

	return(
		<div className='Links'>
            <div className='Links-Section'>
                <p className='page-heading'>PROFESSIONAL INFORMATION</p>
                {isEditing?(
                    <button className='page-button' onClick={handleSaveClick}>Save</button>
                ):(
                    <button className='page-button' onClick={handleEditClick}>Edit</button>
                )}
            </div>

            <div className='Links-Section-1'>
                <div className='Links-Section'>
                    <div className='Links-SubSection'>
                        <p>Highest Education</p>
                        <div className='info-dropdown'>
                            <select 
                            className={isEditing?'active':''} 
                            value={dropdownValue} 
                            disabled={!isEditing}
                            onChange={handleDropdownChange}>
                                <option value="option1">Primary</option>
                                <option value="option2">Secondary</option>
                                <option value="option3">Higher Secondary</option>
                                <option value="option4">Graduation</option>
                                <option value="option5">Post Graduation</option>
                            </select>
                        </div>
                    </div>
                    <div className='Links-SubSection'>
                        <p>What do you do currently?</p>
                        <div className='info-dropdown'>
                            <select 
                            className={isEditing?'active':''}
                            disabled={!isEditing} 
                            value={dropdownValueOne} 
                            onChange={handleDropdownChangeOne}>
                                <option value="option6">Schooling</option>
                                <option value="option7">College Student</option>
                                <option value="option8">Teaching</option>
                                <option value="option9">Job</option>
                                <option value="option10">Freelancing</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
}
export default Info;