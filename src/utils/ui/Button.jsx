import React from "react";

const Button = ({ name, theme, onClick }) => {
  const divStyle = theme?.[">div"] || {};
  return (
    <div
      className="cursor-pointer flex justify-center items-center bg-movie-red rounded-md text-white font-semibold"
      style={theme}
    >
      <div className="" style={divStyle} onClick={onClick}>
        {name}
      </div>
    </div>
  );
};

export default Button;
