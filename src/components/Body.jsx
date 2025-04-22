import React from 'react'
import Header from 'Header.js'
import Browse from './Browse'
const Body = () => {
  return (
    <div 
      className="h-screen w-screen bg-cover bg-center relative overflow-hidden" 
      style={{backgroundImage: "url('./src/assets/images/bg.jpg')"}}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <Header />
    </div>
  )
}

export default Body