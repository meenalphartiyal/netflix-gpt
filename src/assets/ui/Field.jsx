import React from "react";

const Field = ({ 
  label, 
  type, 
  theme,
  value,
  onChange, 
}) => {
  const labelStyle = theme?.[">label"] || {};
  const inputStyle = theme?.[">input"] || {};
  return (
    <div
      className="flex flex-col items-start justify-center bg-black/30 p-2 rounded border-gray-400 border"
      style={theme}
    >
      <div className="text-xs px-1 text-gray-300" style={labelStyle}>
        {label}
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="px-1 bg-transparent outline-none"
        style={inputStyle}
      />
    </div>
  );
};

export default Field;
