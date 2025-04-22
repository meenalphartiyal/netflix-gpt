import React from 'react'

const Field = () => {
  return (
    <div className='mx-1 w-[370px] h-[56px] flex flex-col items-start justify-center bg-black/30 p-2 rounded border-gray-400 border'>
      <div className='text-xs px-1 text-gray-300'>Email address</div>
      <input type='text' className='px-1 w-[350px] h-[30px] bg-transparent outline-none'/>
    </div>
  )
}

export default Field