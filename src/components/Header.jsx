import React from 'react'
import Button from '../assets/ui/Button'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({btn}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Clicked!"); 
    navigate('/login')
  }
  return (
    <div 
      className="h-screen w-screen bg-cover bg-center absolte overflow-hidden" 
      style={{backgroundImage: "url('./src/assets/images/bg.jpg')"}}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className='flex items-center justify-between mx-40 my-8 relative'>
        <Link to='/'>
          <img
            src='./src/assets/images/title.png'
            className='w-[200px]'
            alt='NetflixGPT Icon'
          />
        </Link>
        {btn && (
          <Button 
            name='Sign In'
            onClick={handleClick}
            theme={{
              width: '80px',
              height: '30px',
              fontSize: '14px' 
            }}
          />
        )}
      </div>
    </div>
  )
}

export default Header