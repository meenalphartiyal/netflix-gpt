import useGetLogo from "../../hooks/useGetLogo";
import Button from "../../utils/ui/Button";
import { IMAGE_BASE_URL } from "../../utils/constants";

const VideoTitle = ({ movieId, description }) => {
  const file_path = useGetLogo(movieId);

  return (
    <div className="w-screen aspect-video absolute pl-12 pt-[20%] bg-gradient-to-r from-movie-dark">
      <img
        src={IMAGE_BASE_URL + file_path}
        alt="Movie Title"
        className="w-80 top-72 left-20"
      />
      <p className="my-4 text-base text-white font-medium w-[500px] overflow-hidden text-ellipsis whitespace-normal max-h-[4.5em]">
        {description}
      </p>

      <div className="flex row my-5">
        <Button
          type="white"
          name="Play"
          symbol="&#11208;"
          theme={{
            width: "130px",
            height: "45px",
            fontSize: "22px",
            marginRight: "10px",
            fontWeight: "semibold",
            ">sym": {
              fontSize: "35px",
            },
          }}
        />
        <Button
          type="white"
          name="More Info"
          symbol="&#9432;"
          theme={{
            width: "160px",
            height: "45px",
            fontSize: "20px",
            backgroundColor: "rgba(225, 225, 225, 0.3)",
            color: "white",
            ">sym": {
              fontSize: "30px",
            },
          }}
        />
      </div>
    </div>
  );
};

export default VideoTitle;
