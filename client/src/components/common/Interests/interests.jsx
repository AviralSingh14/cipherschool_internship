import './Interests.css'
import React, {useState} from'react';

const Interests = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleOpenPopup = () => {
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    const handleSaveClick = () => {
        handleClosePopup()
    }

	return(
		<div className='Links'>
            <div className='Links-Section'>
                <p className='page-heading'>INTERESTS</p>
                <button className='page-button' onClick={handleOpenPopup}>Edit</button>
                {isPopupVisible && (
                    <div className='popup-window'>
                        <div className='popup-sub'>
                            <div className='int-content'>
                                <button>App Development</button>
                                <button>Web Development</button>
                            </div>
                            <div className='int-content'>
                                <button>Game Development</button>
                                <button>Data Structures</button>
                            </div>
                            <div className='int-content'>
                                <button>Programming</button>
                                <button>Machine Learning</button>
                            </div>
                            <div className='int-content'>
                                <button>Data Science</button>
                                <button>Others</button>
                            </div>
                            <div className='int-content-but'>
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
                        <p>Interests</p>    
                    </div>
                </div>
            </div>
        </div>
	)
}
export default Interests;