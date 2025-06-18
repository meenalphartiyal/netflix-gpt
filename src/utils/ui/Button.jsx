const Button = ({ type = "red", name, theme, onClick }) => {
  const divStyle = theme?.[">div"] || {};

  const bgColor =
    {
      red: "bg-movie-red text-white",
      gray: "bg-movie-gray text-black",
      white: "bg-white text-black",
    }[type] || "bg-movie-red text-white";

  return (
    <div
      className={`cursor-pointer flex justify-center items-center rounded-md font-semibold ${bgColor}`}
      style={theme}
      onClick={onClick}
    >
      <div style={divStyle}>{name}</div>
    </div>
  );
};

export default Button;
