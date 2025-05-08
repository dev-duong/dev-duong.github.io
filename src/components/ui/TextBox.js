// src/components/TextBox.js
import React from "react";

const TextBox = ({ text, bgColor, textColor }) => {
  return (
    <div
      className={`${bgColor} ${textColor} p-0.5 pr-1 pl-1 text-center text-xs rounded-md`}
    >
      <p>{text}</p>
    </div>
  );
};

export default TextBox;
