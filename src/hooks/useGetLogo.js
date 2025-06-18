import { useEffect, useState } from "react";
import { API_OPTIONS, GET_LOGO_URL } from "../utils/constants";

const useGetLogo = (id) => {
  const [path, setPath] = useState("");

  const getLogo = async (movieId) => {
    const data = await fetch(GET_LOGO_URL(movieId), API_OPTIONS);
    const json = await data.json();
    const logo = json?.logos[0]?.file_path;
    setPath(logo);
  }
  
  useEffect(() => {
    getLogo(id);
  }, [id]);

  return path;
};

export default useGetLogo;