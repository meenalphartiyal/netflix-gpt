import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-1'>
        {/* 
            - Movie List - Popular
              - Movie Cards
            - Movie List - Now Playing 
            - Movie List - Trending
            - Movie List - Horror
            
        */}
        <MovieList title="Recent Movies" data={movies.recentMovies}/>
        <MovieList title="Upcoming Movies" data={movies.upcomingMovies}/>
        <MovieList title="Top Rated Movies" data={movies.topRatedMovies}/>
        <MovieList title="Popular Movies" data={movies.popularMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;