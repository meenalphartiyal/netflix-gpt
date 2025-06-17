import React from 'react'

const ErrorMessage = ({ message, theme }) => {
  return (
    <div className="w-full my-1 text-xs text-movie-red text-left" style={theme}>{message}</div>
  )
}

export default ErrorMessage