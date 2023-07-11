import React, { useEffect,useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import axios from "axios";
const AuthPage = () => {
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [pass, setpass] = useState('')
  const [fulluser, setfullUser] = useState('')
  const [user, setUser] = useState('')

  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    const handleSignUpClick = () => {
      container.classList.add('right-panel-active');
      document.querySelector('title').textContent = 'Sign up | Benna';
    };

    const handleSignInClick = () => {
      container.classList.remove('right-panel-active');
      document.querySelector('title').textContent = 'Sign in | Benna';
    };

    signUpButton.addEventListener('click', handleSignUpClick);
    signInButton.addEventListener('click', handleSignInClick);

    return () => {
      // Clean up the event listeners when the component unmounts
      signUpButton.removeEventListener('click', handleSignUpClick);
      signInButton.removeEventListener('click', handleSignInClick);
    };
  }, []); // Empty dependency array to ensure the effect runs only once when the component mounts
  const handleSubmit =async(e) =>{
    e.preventDefault()
    await axios.post('http://localhost:3000/client/register', { name:user, password: pass,fullname:fulluser,email,phone})
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  }
  const handleSignIn =async(e) =>{
    e.preventDefault()
    if (!user) {
      await axios
        .post('http://localhost:3000/client/signin', { password: pass, email })
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    } else {
      await axios
        .post('http://localhost:3000/client/signin', { password: pass,  name: user })
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    
     };
  
  }
  return (
    <div className="container" id="container">
    <div className="form-container sign-up-container">
        <form  encType="multipart/form-data" onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <input type="text" placeholder="Username" name="username" onChange={(e)=>  setUser(e.target.value)}/>
          <input type="text" placeholder="Full Name" name="name" onChange={(e)=> setfullUser(e.target.value)}/>
          <input type="email" placeholder="Email" name="email" onChange={(e)=>setemail(e.target.value)}/>
          <input type="text" placeholder="Phone number" name="phone"  onChange={(e)=>setphone(e.target.value)}/>
          <input type="password" placeholder="Password" name="password"  onChange={(e)=>  setpass(e.target.value)} />
          <input type="password" placeholder="Confirm password" name="repeatPassword" />
          <button type="submit" value="submit" name="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form  encType="multipart/form-data" onSubmit={handleSignIn}>
          <h1>Sign in</h1>
          <input type="text" placeholder="Email OR Username" name="username"onChange={(e) => {  const value = e.target.value;
              if (value.includes("@")) {
                setemail(value);
              } else {
                setUser(value);
              }
            }}
          />
          <input type="password" placeholder="Password" name="password"onChange={(e)=>  setpass(e.target.value)} />
          <Link to="/forget">Forgot your password?</Link> 
          <button type="submit" value="submit" name="submit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Have an account!</h1>
            <p>Keep yourself connected</p>
            <button className="ghost" id="signIn">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>You don't have an account ? <br /> become one of ours!</p>
            <button className="ghost" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
