import { IMAGE_BASE_URL } from "../../utils/constants";
import { useState } from "react";
import genreMap from "../../utils/genre.json";

const MovieCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-72 mr-4 relative cursor-pointer overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-36 overflow-hidden relative">
        <img
          src={IMAGE_BASE_URL + data?.backdrop_path}
          alt={data?.title + " Poster"}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />

        {/* Dark overlay on hover */}
        <div className={`absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-300 ${isHovered ? "opacity-65" : "opacity-0"}`}></div>
      </div>

      {/* Text content */}
      <div
        className={`absolute top-0 left-0 w-full h-full text-white p-4 transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="font-bold text-md mb-1">{data?.title}</h3>
        <p className="text-xs text-gray-400 mt-2">
          {data?.genre_ids?.map((id) => genreMap[id]).join(" • ")}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
