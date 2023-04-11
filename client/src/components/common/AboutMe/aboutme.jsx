import './AboutMe.css'
import React, {useState} from'react';

const AboutMe = () => {

    const [isEditable, setIsEditable] = useState(false);
    const [text, setText] = useState('Add something about you');

    const handleEditClick = () => {
        setIsEditable(true);
    };

    const handleSaveClick = () => {
        setIsEditable(false);
    };
    
    const handleChange = (event) => {
        setText(event.target.value);
    };

	return(
		<div className='About-Me'>
            <div className='About-Me-Section1'>
                <p className='page-heading'>ABOUT ME</p>
                {isEditable?(
                    <button className='page-button' onClick={handleSaveClick}>Save</button>
                ):(
                    <button className='page-button' onClick={handleEditClick}>Edit</button>
                )}
            </div>
            <div className='About-Me-Section1'>
                {isEditable?(
                    <textarea placeholder='Add something about you.' className='aboutme-textarea' value={text} onChange={handleChange}/>
                ):(<div className='aboutme-textarea'>{text}</div>)}
            </div>
        </div>
	)
}
export default AboutMe;