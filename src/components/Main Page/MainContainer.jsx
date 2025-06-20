import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.recentMovies);
  // Early Return
  if(!movies) return;

  const randomIdx = Math.floor(Math.random() * movies.length);

  const mainMovie = movies[randomIdx];
  const { id, overview  } = mainMovie;

  return (
    <div>
      <VideoTitle movieId={id} description={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;