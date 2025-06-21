import { IMAGE_BASE_URL } from "../../utils/constants";

const MovieCard = ({ data }) => {
  return (
    <div className="w-40 mr-4">
      <img
        src={IMAGE_BASE_URL + data?.poster_path}
        alt={data?.title + " Poster"}
        className="w-96"
      />
    </div>
  );
};

export default MovieCard;
