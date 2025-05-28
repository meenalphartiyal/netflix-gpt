import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Field from '../assets/ui/Field';
import Button from '../assets/ui/Button';
import { Link } from 'react-router-dom';
import { validateEmail, validatePassword } from '../utils/validate';

const SignUp = () => {
  const location = useLocation();
  const email = location.state.email;
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(email);
  const [userPassword, setUserPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const handleClick = () => {
    navigate('/login')
  }
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setUserEmail(value);
    if (validateEmail(value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setUserPassword(value);
    if (validatePassword(value)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };
  
  return (
    <div>
      <div className='flex items-center justify-between px-10 py-5 relative bg-netflix-dark'>
        <Link to='/'>
          <img
            src='/images/title.png'
            className='w-[250px]'
            alt='NetflixGPT Icon'
          />
        </Link>
        <Button 
          name='Sign In'
          onClick={handleClick}
          theme={{
            background: 'transparent',
            color: 'white',
            width: '80px',
            height: '30px',
            fontSize: '20px',
            ':hover' : {TextDecoration: 'underline'} 
          }}
        />
      </div>
      <div className='absolute top-1/2 bottom-1/8 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className=" w-[550px] h-[500px] py-12 px-14">
          <h1 className="font-medium text-4xl mb-5">Create a password to start your membership</h1>
          <h2 className="w-[350px] text-xl mb-5">Just a few more steps and you're done! We hate paperwork, too.</h2>
          <Field 
            label="Email"
            type="email"
            value={userEmail}
            onChange={handleEmailChange}
            theme={{ 
              width: "448px",
              background:'transparent',
              border: '1px solid black',
              '>label': {color: 'black'},
              '>input': {width: '322px'}
            }}
          />
          {emailError && <div className="w-full mt-1 mb-4 text-xs text-netflix-red text-left">&#x2BBE; Please enter a valid email</div>}
          <Field 
            label="Add a Password"
            type="password"
            onChange={handlePasswordChange}
            value={userPassword}
            theme={{ 
              width: "448px",
              marginTop: "16px",
              background:'transparent',
              border: '1px solid black',
              '>label': {color: 'black'},
              '>input': {width: '322px'}
            }}
          />
          {passwordError && <div className="w-full my-1 text-xs text-netflix-red text-left">&#x2BBE; Please enter a valid password</div>}
          <Button 
            name="Sign Up"
            theme={{
              width: "448px",
              height: "60px",
              fontSize: "20px",
              margin: '20px 0'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default SignUp