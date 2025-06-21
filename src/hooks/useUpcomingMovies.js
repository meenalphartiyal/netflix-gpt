import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES } from "../utils/constants";
import { addUpcomingMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const data = await fetch(UPCOMING_MOVIES, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json?.results));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useUpcomingMovies;
