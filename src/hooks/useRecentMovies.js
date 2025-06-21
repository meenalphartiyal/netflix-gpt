import { useDispatch } from "react-redux";
import { API_OPTIONS, RECENT_MOVIES } from "../utils/constants";
import { addRecentMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const useRecentMovies = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const data = await fetch(RECENT_MOVIES, API_OPTIONS);
    const json = await data.json();
    dispatch(addRecentMovies(json?.results));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useRecentMovies;
