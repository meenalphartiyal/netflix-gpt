import Header from "../Header";
import useRecentMovies from "../../hooks/useRecentMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";

const Browse = () => {
  useRecentMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
    {/* 
      * Main Container
        - Trailer
        - Movie Details
        - Some Controls

      * Secondary Container
        - Movie Cards according to categories 
    */}
      <Header />
      <MainContainer/>
      <SecondaryContainer />  
    </div>
  );
};

export default Browse;
