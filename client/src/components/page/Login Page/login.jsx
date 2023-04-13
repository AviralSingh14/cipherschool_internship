import './Login.css'
import React, {useState} from'react';
import axios from 'axios';

const Login = ({onLoginSuccess}) => {

    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const config = {
        headers: {
            'Content-Type': "application/json"
        }
    }

    const formData = {
        email : email,
        password : password
    }

    const handleLogin = async (event) => {
        event.preventDefault();

        try{
            const response = await axios.post('http://localhost:4000/user/login', formData)
            if (response.data.success){
                onLoginSuccess();
            }
            else{
                alert("Invalid Username or Password")
            }
        }
        catch(error){
            console.error('Login Failed', error)
        }
    }

	return(
		<div className='Login-container'>
            <div className='Login-Form'>
                <div className='Login-Input'>
                    <p>Enter Email or UserName</p>
                    <input
                        placeholder='Email or UserName' 
                        type='text'
                        name='UserName'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}    
                    ></input>
                </div>
                <div className='Login-Input'>
                    <p>Enter Password</p>
                    <input 
                        placeholder='Password' 
                        type='password'
                        onChange={(e) => setpassword(e.target.value)}
                    ></input>
                </div>
                <div className='Login-Buttons'>
                    <div className='Login-Checkbox'>
                        <input type='checkbox'></input>
                        <label>Show Password</label>
                    </div>
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
	)
}
export default Login;