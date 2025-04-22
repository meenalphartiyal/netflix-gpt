import React from 'react'
import Button from '../assets/ui/Button'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Clicked!"); 
    navigate('/login')
  }
  return (
    <div className='flex items-center justify-between mx-40 my-8 relative'>
      <img
        src='./src/assets/images/title.png'
        className='w-[200px]'
        alt='NetflixGPT Icon'
      />
      <Button 
        name='Sign In'
        onClick={handleClick}
      />
    </div>
  )
}

export default Header