import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES } from "../utils/constants";
import { addTopRatedMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json?.results));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useTopRatedMovies;
