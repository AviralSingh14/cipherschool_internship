import './Interests.css'
import React, {useState, useEffect} from'react';
import axios from 'axios';

const Interests = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [interests, setInterests] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchInterests();
    }, []);

    const fetchInterests = async () => {
        try {
            const response = await axios.get('http://localhost:4000/interest');
            const data = response.data;
            if (response.status === 200) {
                if (data.success) {
                    setInterests(data.interests);   
                } 
                else {
                    setError(data.message);
                }
            } 
            else {
                throw new Error(data.message);
            }
        } 
        catch (error) {
            setError('Failed to fetch interests:', error);
        }
    }

    const handleInterestButtonClick = async (interest) => {
        try {
            const response = await axios.post('http://localhost:4000/interest', { interest });
            const data = response.data;
            if (response.status === 200) {
                if (data.success) {
                    if (interests.includes(interest)) {
                        setInterests(interests.filter(item => item !== interest));
                        fetchInterests()
                    } 
                    else {
                        setInterests([...interests, interest]);
                        fetchInterests()
                    }
                } 
                else {
                    console.error(data.message);
                }
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Failed to toggle interest:', error);
        }
    }

    const handleOpenPopup = () => {
        setPopupVisible(true);
        fetchInterests()
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    const handleSaveClick = async () => {
        try {
            const response = await axios.post('http://localhost:4000/interests', { interests });
            const data = response.data;
            console.log(data)
            if (response.status === 200) {
                if (data.success === "true") {
                    handleClosePopup();
                } 
                else {
                    console.error(data.message);
                }
            } 
            else {
                throw new Error(data.message);
            }
        } 
        catch (error) {
            console.error('Failed to save interests:', error);
        }
        finally{
            handleClosePopup()
            fetchInterests()
        }
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
                                <button
                                    key={interests.interest}
                                    className={interests.includes("App Development") ? "selected" : ""}
                                    onClick={() => handleInterestButtonClick("App Development")}>
                                    App Development
                                </button>
                                <button
                                    key={interests.interest}
                                    className={interests.includes("Web Development") ? "selected" : ""}
                                    onClick={() => handleInterestButtonClick("Web Development")}>
                                    Web Development
                                </button>
                            </div>
                            <div className='int-content'>
                                <button
                                    key={interests.interest}
                                    className={interests.includes("Game Development") ? "selected" : ""}
                                    onClick={() => handleInterestButtonClick("Game Development")}>
                                    Game Development
                                </button>
                                <button
                                    key={interests.interest}
                                    className={interests.includes("Data Structures") ? "selected" : ""}
                                    onClick={() => handleInterestButtonClick("Data Structures")}>
                                    Data Structures
                                </button>
                            </div>
                            <div className='int-content'>
                                <button
                                    key={interests.interest}
                                    className={interests.includes("Programming") ? "selected" : ""}
                                    onClick={() => handleInterestButtonClick("Programming")}>
                                    Programming
                                </button>
                                <button
                                    key={interests.interest}
                                    className={interests.includes("Machine Learning") ? "selected" : ""}
                                    onClick={() => handleInterestButtonClick("Machine Learning")}>
                                    Machine Learning
                                </button>
                            </div>
                            <div className='int-content'>
                                <button
                                    key={interests.interest}
                                    className={interests.includes("Data Science") ? "selected" : ""}
                                    onClick={() => handleInterestButtonClick("Data Science")}>
                                    Data Science
                                </button>
                                <button
                                    key={interests.interest}
                                    className={interests.includes("Others") ? "selected" : ""}
                                    onClick={() => handleInterestButtonClick("Others")}>
                                    Others
                                </button>
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
                <div className='Interest-Section'>
                    {error?(
                        <p>{error}</p>
                    ):(
                        interests.map((interest) => (
                            <span key={interest._id} className='button-interests'>{interest.interest}</span>
                        ))
                    )}
                </div>
            </div>
        </div>
	)
}
export default Interests;
