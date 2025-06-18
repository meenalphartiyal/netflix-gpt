import { useEffect } from "react";
import { API_OPTIONS, GET_TRAILER } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addTrailer } from "../redux/movieSlice";

const useGetTrailer = (movieId) => {
  const dispatch = useDispatch();
  
  const getTrailer = async (movieId) => {
    const data = await fetch(GET_TRAILER(movieId), API_OPTIONS);
    const json = await data.json(); 
    const filterData = json?.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailer(trailer));
  }
  useEffect(() => {
    getTrailer(movieId);
  }, [movieId])
}

export default useGetTrailer