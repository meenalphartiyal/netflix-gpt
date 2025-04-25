import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Field from '../assets/ui/Field';
import Button from '../assets/ui/Button';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const location = useLocation();
  const email = location.state.email;
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(email);
  const handleClick = () => {
    navigate('/login')
  }
  const handleChange = (event) => {
    setUserEmail(event.target.value);
  }
  return (
    <div>
      <div className='flex items-center justify-between mx-10 my-5 relative'>
        <Link to='/'>
          <img
            src='./src/assets/images/title.png'
            className='w-[250px]'
            alt='NetflixGPT Icon'
          />
        </Link>
        <Button 
          name='Sign In'
          onClick={handleClick}
          theme={{
            background: 'transparent',
            color: 'black',
            width: '80px',
            height: '30px',
            fontSize: '20px',
            ':hover' : {TextDecoration: 'underline'} 
          }}
        />
      </div>
      <hr/>
      <div className='absolute top-1/2 bottom-1/8 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className=" w-[550px] h-[500px] py-12 px-14">
          <h1 className="font-medium text-4xl mb-5">Create a password to start your membership</h1>
          <h2 className="w-[350px] text-xl mb-5">Just a few more steps and you're done! We hate paperwork, too.</h2>
          <Field 
            label="Email"
            type="email"
            value={userEmail}
            onChange={handleChange}
            theme={{ 
              width: "448px",
              marginBottom: "14px",
              background:'transparent',
              border: '1px solid black',
              '>label': {color: 'black'},
              '>input': {width: '322px'}
            }}
          />
          <Field 
            label="Add a Password"
            type="password"
            theme={{ 
              width: "448px",
              marginBottom: "14px",
              background:'transparent',
              border: '1px solid black',
              '>label': {color: 'black'},
              '>input': {width: '322px'}
            }}
          />
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