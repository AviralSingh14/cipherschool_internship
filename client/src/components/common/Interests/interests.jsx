import './Interests.css'
import React, {useState, useEffect} from'react';
import axios from 'axios';

const Interests = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [interests, setInterests] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Load interests from backend when the component mounts
        fetchInterests();
    }, []);

    const fetchInterests = async () => {
        try {
            const response = await axios.get('http://localhost:4000/interests');
            const data = response.data;
            if (response.status === 200) {
                if (data.success) {
                    setInterests(data.interests);
                } else {
                    setError(data.message);
                }
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
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
                    } else {
                        setInterests([...interests, interest]);
                    }
                } else {
                    console.error(data.message);
                }
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Failed to toggle interest:', error);
        }
    }

    // const handleInterestButtonClick = async (interest) => {
    //     try {
    //         const response = await fetch('http://localhost:4000/interest', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ interest })
    //         });
    //         const data = await response.json();
    //         if (response.ok) {
    //             if (data.success) {
    //                 if (interests.includes(interest)) {
    //                     setInterests(interests.filter(item => item !== interest));
    //                 } else {
    //                     setInterests([...interests, interest]);
    //                 }
    //             } else {
    //                 console.error(data.message);
    //             }
    //         } else {
    //             throw new Error(data.message);
    //         }
    //     } catch (error) {
    //         console.error('Failed to toggle interest:', error);
    //     }
    // }

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
                                <button
                                    className={interests.includes("App Development") ? "selected" : ""}
                                    onClick={() => handleInterestButtonClick("App Development")}>
                                    App Development
                                </button>
                                <button
                                    className={interests.includes("Web Development") ? "selected" : ""}
                                    onClick={() => handleInterestButtonClick("Web Development")}>
                                    Web Development
                                </button>
                            </div>
                            <div className='int-content'>
                                <button
                                    className={interests.includes("Game Development") ? "selected" : ""}
                                    onClick={() => handleInterestButtonClick("Game Development")}>
                                    Game Development
                                </button>
                                <button
                                    className={interests.includes("Data Structures") ? "selected" : ""}
                                    onClick={() => handleInterestButtonClick("Data Structures")}>
                                    Data Structures
                                </button>
                            </div>
                            <div className='int-content'>
                                <button
                                    className={interests.includes("Programming") ? "selected" : ""}
                                    onClick={() => handleInterestButtonClick("Programming")}>
                                    Programming
                                </button>
                                <button
                                    className={interests.includes("Machine Learning") ? "selected" : ""}
                                    onClick={() => handleInterestButtonClick("Machine Learning")}>
                                    Machine Learning
                                </button>
                            </div>
                            <div className='int-content'>
                                <button
                                    className={interests.includes("Data Science") ? "selected" : ""}
                                    onClick={() => handleInterestButtonClick("Data Science")}>
                                    Data Science
                                </button>
                                <button
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
                    {interests.map((interest) => (
                         <div className='button-interests'>
                            {interest}
                         </div>   
                    ))}  
                </div>
            </div>
        </div>
	)
}
export default Interests;