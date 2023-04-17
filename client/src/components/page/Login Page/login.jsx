import './Login.css'
import React, {useState} from'react';

const Login = ({onLoginSuccess}) => {

    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
        try{
            const response = await fetch('http://localhost:4000/user/login', {
                method : "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body : JSON.stringify({email, password})
            })
            if (response.ok){
                const data = await response.json()
                localStorage.setItem("token", data.token)
                onLoginSuccess();
            }
            else{
                const error = await response.json()
                alert("Invalid Username or Password", error)
            }
        }
        catch(error){
            console.error('Login Failed', error)
        }
    }

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword)
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
                <form className='Login-Input'>
                    <p>Enter Password</p>
                    <input 
                        placeholder='Password' 
                        type='password'
                        autoComplete='current-password'
                        onChange={(e) => setpassword(e.target.value)}
                    ></input>
                </form>
                <div className='Login-Buttons'>
                    <div className='Login-Checkbox'>
                        <label>
                            <input type='checkbox' checked={showPassword} onChange={handlePasswordVisibility}/>
                            Show Password
                        </label>
                    </div>
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
	)
}
export default Login;
