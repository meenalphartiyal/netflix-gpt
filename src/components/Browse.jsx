import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from "../utils/constants";

const Browse = () => {
  const getMovies = async () => {
    // api call to be made here
  } 

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse