import './Links.css'
import React, {useState} from'react';

const Links = () => {

    const [isEditable, setIsEditable] = useState(false);
    const [text, setText] = useState('');

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
		<div className='Links'>

            <div className='Links-Section'>
                <p className='page-heading'>ON THE WEB</p>
                {isEditable?(
                    <button className='page-button' onClick={handleSaveClick}>Save</button>
                ):(
                    <button className='page-button' onClick={handleEditClick}>Edit</button>
                )}
            </div>

            <div className='Links-Section-1'>
                <div className='Links-Section'>
                    <div className='Links-SubSection'>
                        <p>LinkedIn</p>
                        {isEditable?(
                            <input className='input-field' placeholder='LinkedIn' value={text} onChange={handleChange}/>
                        ):(<div className='input-field'>{text}</div>)}
                    </div>
                    <div className='Links-SubSection'>
                        <p>GitHub</p>
                        {isEditable?(
                            <input className='input-field' placeholder='GitHub' value={text} onChange={handleChange}/>
                        ):(<div className='input-field'>{text}</div>)}
                    </div>
                    <div className='Links-SubSection'>
                        <p>Facebook</p>
                        {isEditable?(
                            <input className='input-field' placeholder='Facebook' value={text} onChange={handleChange}/>
                        ):(<div className='input-field'>{text}</div>)}
                    </div>
                </div>
                <div className='Links-Section'>
                    <div className='Links-SubSection'>
                        <p>Twitter</p>
                        {isEditable?(
                            <input className='input-field' placeholder='Twitter' value={text} onChange={handleChange}/>
                        ):(<div className='input-field'>{text}</div>)}
                    </div>
                    <div className='Links-SubSection'>
                        <p>Instagram</p>
                        {isEditable?(
                            <input className='input-field' placeholder='Instagram' value={text} onChange={handleChange}/>
                        ):(<div className='input-field'>{text}</div>)}
                    </div>
                    <div className='Links-SubSection'>
                        <p>Website</p>
                        {isEditable?(
                            <input className='input-field' placeholder='Website' value={text} onChange={handleChange}/>
                        ):(<div className='input-field'>{text}</div>)}
                    </div>
                </div>
            </div>
        </div>
	)
}
export default Links;