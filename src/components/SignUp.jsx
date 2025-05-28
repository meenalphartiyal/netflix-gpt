import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Field from '../utils/ui/Field';
import Button from '../utils/ui/Button';
import { Link } from 'react-router-dom';
import { validateEmail, validatePassword } from '../utils/validate';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { FIREBASE, SIGN_IN_UP } from '../utils/constants';
import ErrorMessage from '../utils/ui/ErrorMessage';

const SignUp = () => {
  const location = useLocation();
  const email = location.state.email;
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(email);
  const [userPassword, setUserPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firebaseError, setFirebaseError] = useState(null);
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

  const handleSubmit = () => {
    if(!emailError && !passwordError){
      createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed up 
        const signedUpUser = userCredential.user;
        console.log(signedUpUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        if(errorCode == FIREBASE.SIGN_UP_ERROR_CODE)
          setFirebaseError(FIREBASE.SIGN_UP_ERROR);
      });
    }
  }
  
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
          {emailError && <ErrorMessage message={SIGN_IN_UP.EMAIL}/>}
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
          {passwordError && <ErrorMessage message={SIGN_IN_UP.PASSWORD} />}
          <Button 
            name="Sign Up"
            theme={{
              width: "448px",
              height: "60px",
              fontSize: "20px",
              margin: '20px 0'
            }}
            onClick={handleSubmit}
          />
          {firebaseError && <ErrorMessage message={firebaseError} theme={{fontWeight: "600", marginBottom: "20px"}} />}
        </div>
      </div>
    </div>
  )
}

export default SignUp