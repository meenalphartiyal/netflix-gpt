import MovieCard from "./MovieCard";
const MovieList = ({ title, data }) => {
  return (
    <div className="flex flex-col pl-12 mb-12">
      <div className="font-semibold text-white text-xl pb-3">{title}</div>
      <div className="flex flex-row overflow-x-auto scrollbar-hide scroll-smooth mr-10">
        {data?.map((movie) => (
          <div key={movie.id} className="flex items-center">
            <MovieCard data={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
