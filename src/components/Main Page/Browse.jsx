import Header from "../Header";
import useRecentMovies from "../../hooks/useRecentMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetBaseURLs from "../../hooks/useGetBaseURLs";

const Browse = () => {
  useRecentMovies();
  useGetBaseURLs();

  return (
    <div>
      <Header />
      {/* 
        * Main Container
        - Trailer
        - Movie Details
        - Some Controls
       */}
       <MainContainer/>

       {/*
        * Secondary Container
        - Movie Cards according to categories 
        */}
        <SecondaryContainer />
    </div>
  );
};

export default Browse;
