import useGetLogo from "../../hooks/useGetLogo";
import { useSelector } from "react-redux";
import Button from "../../utils/ui/Button";

const VideoTitle = ({ movieId, description}) => {
  const url = useSelector((store) => store.movies.secure_base_url);
  const file_path = useGetLogo(movieId);

  return (
    <div className="w-screen aspect-video absolute pl-20 pt-60 bg-gradient-to-r from-movie-dark">
      <img
        src={url + "w500" + file_path}
        alt="Movie Title"
        className="w-80 top-72 left-20"
      />
      <p className="my-4 text-lg text-white font-medium w-96">{description}</p>
      <div className="flex row my-5">
        <Button type="white" name="Play" theme={{
          width: "130px",
          height: "50px",
          fontSize: "20px",
          marginRight: "10px"
        }}/>
        <Button type="white" name="More Info" theme={{
          width: "150px",
          height: "50px",
          fontSize: "20px",
          backgroundColor: "rgba(225, 225, 225, 0.3)",
          color: "white",
        }}/>
      </div>
    </div>
  );
};

export default VideoTitle;
