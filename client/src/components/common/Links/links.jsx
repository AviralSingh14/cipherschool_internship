import './Links.css'
import React, {useState} from'react';

import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram, IoGlobeOutline, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Links = () => {

    const [isEditable, setIsEditable] = useState(false);
    const [linkedinText, setLinkedinText] = useState('');
    const [githubText, setGithubText] = useState('');
    const [facebookText, setFacebookText] = useState('');
    const [twitterText, setTwitterText] = useState('');
    const [instagramText, setInstagramText] = useState('');
    const [websiteText, setWebsiteText] = useState('');

    const handleEditClick = () => {
        setIsEditable(true);
    };

    const handleSaveClick = () => {
        setIsEditable(false);
    };
    
    const handleLinkedinChange = (event) => {
        setLinkedinText(event.target.value);
    };

    const handleGithubChange = (event) => {
        setGithubText(event.target.value);
    };

    const handleFacebookChange = (event) => {
        setFacebookText(event.target.value);
    };

    const handleTwitterChange = (event) => {
        setTwitterText(event.target.value);
    };

    const handleInstagramChange = (event) => {
        setInstagramText(event.target.value);
    };

    const handleWebsiteChange = (event) => {
        setWebsiteText(event.target.value);
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
                    <div className='Link-grid'>
                        <div className='Links-SubSection'>
                            <p>LinkedIn</p>
                            <div className='Links-Input-Logo'>
                                <IoLogoLinkedin className='Links-Logo-Edit'/>
                                <input
                                    disabled={!isEditable} 
                                    className='input-field'     
                                    placeholder='LinkedIn' 
                                    value={linkedinText} 
                                    onChange={handleLinkedinChange}/>
                            </div>
                        </div>
                        <div className='Links-SubSection'>
                            <p>GitHub</p>
                            <div className='Links-Input-Logo'>
                                <IoLogoGithub className='Links-Logo-Edit'/>
                                <input 
                                disabled={!isEditable}
                                className='input-field' 
                                placeholder='GitHub' 
                                value={githubText} 
                                onChange={handleGithubChange}/>
                            </div>
                        </div>
                        <div className='Links-SubSection'>
                            <p>Facebook</p>
                            <div className='Links-Input-Logo'>
                                <IoLogoFacebook className='Links-Logo-Edit'/>
                                <input
                                disabled={!isEditable} 
                                className='input-field' 
                                placeholder='Facebook' 
                                value={facebookText} 
                                onChange={handleFacebookChange}/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='Links-Section'>
                    <div className='Link-grid'>
                        <div className='Links-SubSection'>
                            <p>Twitter</p>
                            <div className='Links-Input-Logo'>
                                <IoLogoTwitter className='Links-Logo-Edit'/>
                                <input 
                                disabled={!isEditable} 
                                className='input-field' 
                                placeholder='Twitter' 
                                value={twitterText} 
                                onChange={handleTwitterChange}/>
                            </div>  
                        </div>
                        <div className='Links-SubSection'>
                            <p>Instagram</p>
                            <div className='Links-Input-Logo'>
                                <IoLogoInstagram className='Links-Logo-Edit'/>
                                <input 
                                disabled={!isEditable} 
                                className='input-field' 
                                placeholder='Instagram' 
                                value={instagramText} 
                                onChange={handleInstagramChange}/>
                            </div>
                        </div>
                        <div className='Links-SubSection'>
                            <p>Website</p>
                            <div className='Links-Input-Logo'>
                                <IoGlobeOutline className='Links-Logo-Edit'/>
                                <input 
                                disabled={!isEditable}
                                className='input-field' 
                                placeholder='Website' 
                                value={websiteText} 
                                onChange={handleWebsiteChange}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
}
export default Links;