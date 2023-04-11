import './NameCard.css'
import React, {useState} from'react';

const NameCard = () => {
	return(
		<div className='name-card'>
            <div className='name-card-right'>
                <h1>Logo</h1>
                <div className='name-card-content'>
                    <p className='card-name'>Hello,</p>
                    <p className='card-name-bold'>Aviral Singh</p>
                    <p className='card-name'>aviralsingh2714@gmail.com</p>
                </div>
            </div>
            <div className='name-card-left'>
                <a>0 Followers</a>
            </div>
        </div>
	)
}
export default NameCard;