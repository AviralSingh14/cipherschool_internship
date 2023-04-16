import './Password.css'
import React, {useState} from'react';
import axios from 'axios';

const Password = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [updatedPassword, setUpdatedPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleOpenPopup = () => {
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
        setErrorMessage("");
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        if(name === "currentPassword"){
            setCurrentPassword(value)
        }
        else if(name === "newPassword"){
            setNewPassword(value)
        }
        else if(name === "confirmPassword"){
            setConfirmPassword(value)
        }
    }
    
    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const handleSaveClick = async () => {
        try{
            const token = localStorage.getItem('token');
            if(!token){
                return;
            }

            if(newPassword !== confirmPassword){
                setErrorMessage("New Password and Confirm Password do not match")
            }

            const response = await axios.put('http://localhost:4000/user/me/update-password', {
                currentPassword: currentPassword,
                newPassword: newPassword,
                reEnteredPassword: confirmPassword
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : `${token}`
                }
            }, {
                body : JSON.stringify({newPassword, currentPassword, confirmPassword})
            });

            alert(response.data.message);
            setPopupVisible(false);
        } 
        catch(error){
            setErrorMessage(error.response.data.message)
        }
    }

	return(
		<div className='Links'>
            <div className='Links-Section'>
                <p className='page-heading'>PASSWORD & SECURITY</p>
                <button className='page-button' onClick={handleOpenPopup}>Change</button>
                {isPopupVisible && (
                    <div className='popup-window'>
                        <div className='popup-sub'>
                            <div className='popup-content'>
                                <p>Current Password</p>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name='currentPassword'
                                    placeholder='Current Password'
                                    value={currentPassword}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='popup-content'>
                                <p>New Password</p>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name='newPassword'
                                    placeholder='New Password'
                                    value={newPassword}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='popup-content'>
                                <p>Confirm Password</p>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name='confirmPassword'
                                    placeholder='ConfirmPassword'
                                    value={confirmPassword}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='popup-content-check'>
                                <label className='labelText'>
                                    <input type='checkbox'
                                        checked={showPassword}
                                        onChange={handlePasswordVisibility}/>
                                    Show Password
                                </label>
                                {errorMessage && (
                                    <div className='error-message'>
                                        {errorMessage}
                                    </div>
                                )}
                                <div className='popup-button'>
                                    <button onClick={handleClosePopup}>Cancel</button>
                                    <button onClick={handleSaveClick}>Save</button>                                    
                                </div>
                            </div>
                            
                            <div className='overlay' onClick={handleClosePopup}></div>
                        </div>
                    </div>
                )}
            </div>

            <div className='Links-Section-1'>
                <div className='Links-Section'>
                    <div className='Links-SubSection'>
                        <p>Password</p>
                        <input className='input-field-password' type='password' value={updatedPassword} disabled/>
                    </div>
                </div>
            </div>
        </div>
	)
}
export default Password;