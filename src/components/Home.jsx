import React from 'react'
import Header from './Header.jsx'
import Field from '../assets/ui/Field.jsx'
import Button from '../assets/ui/Button.jsx'

const Home = () => {
  return (
    <div 
      className="h-screen w-screen bg-cover bg-center relative overflow-hidden" 
      style={{backgroundImage: "url('./src/assets/images/bg.jpg')"}}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <Header />
      <div className='text-white flex flex-col items-center justify-center text-center w-[600px] h-auto absolute top-30 left-1/2 -translate-x-1/2 translate-y-1/2'>
        <div className='z-10 text-6xl font-extrabold'>
          <div className='mb-2'>Unlimited movies,</div>
          <div>TV shows and more</div>
        </div>
        <div className='z-10 m-4 text-lg font-semibold mb-8'>Starts at ₹149. Cancel at any time.</div>
        <div className='z-10 mb-4'>Ready to watch? Enter your email to create or restart your membership.</div>
        <div className='z-10 flex flex-row'>
          <Field />
          <Button 
            name='Get Started'
            theme={{
              width: '200px', 
              height: '56px',
              fontSize: '20px'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Home