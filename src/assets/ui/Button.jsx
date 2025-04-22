import React from 'react'

const Button = ({name, theme, onClick}) => {
  return (
    <div 
      className='mx-1 cursor-pointer flex justify-center items-center w-[80px] h-[30px] bg-netflix-red rounded-md text-white font-semibold text-sm'
      style={theme}
    >
      <div className='' onClick={onClick}>{name}</div>
    </div>
  )
}

export default Button