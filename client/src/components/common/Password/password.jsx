import './Password.css'
import React, {useState} from'react';

const Password = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [updatedPassword, setUpdatedPassword] = useState("");

    const handleOpenPopup = () => {
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
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

    const handleSaveClick = () => {
        if(newPassword === confirmPassword){
            const encryptedPassword = encryptPassword(newPassword);
            setUpdatedPassword(encryptedPassword);
            setPopupVisible(false)
            setCurrentPassword("")
            setNewPassword("")
            setConfirmPassword("")
        }
        else{
            alert("New Password and Confirm Password do not match")
        }
    }

    const encryptPassword = (password) => {
        return password;
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
                        <input className='input-field' type='password' value={updatedPassword} disabled/>
                    </div>
                </div>
            </div>
        </div>
	)
}
export default Password;