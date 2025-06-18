import { useEffect } from "react";
import { API_KEY, CONFIG_ENDPOINT } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addURLs } from "../redux/movieSlice";

const useGetBaseURLs = () => {
  const dispatch = useDispatch();

  const getUrls = async () => {
    const data = await fetch(CONFIG_ENDPOINT + API_KEY);
    const json = await data.json();
    dispatch(addURLs({base: json?.images?.base_url, secureBase: json?.images?.secure_base_url}));
  }
  useEffect(() => {
    getUrls();
  }, []);
}

export default useGetBaseURLs;