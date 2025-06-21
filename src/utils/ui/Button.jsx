const Button = ({ type = "red", name, symbol = null, theme, onClick }) => {
  const divStyle = theme?.[">div"] || {};
  const sym = theme?.[">sym"] || {};

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
      <div style={divStyle} className="flex justify-between items-center">
        {symbol && <span style={sym} className="mr-1 font-thin">{symbol}</span>}
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Button;
