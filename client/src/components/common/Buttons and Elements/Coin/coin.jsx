import React, {useState} from'react';
import './Coin.css'

const Coin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    }
    return(
        <div className='coin-container'>
            <button className='button' onClick={toggleDropDown}><img src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png" alt="" className='coin'/></button>
            {isOpen&&(
            <div className='coin-content'>
                <div className='coin-line'>
                    <img src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png" alt="" className='coin-inside'/>
                    <p className='first-line'>Points :</p>
                    <p1>0</p1>
                </div>
                <div className='coin-line'>
                    <p className='second-line'>1</p>
                    <img src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png" alt="" className='coin-inside'/>
                    <p className='second-line'> = 1 Minute invested in Learning</p>
                </div>
                <div className='coin-line'>
                    <button className='coin-button'>Redeem Now</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default Coin