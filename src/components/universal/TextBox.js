const TextBox = ({ text, bgColor, textColor }) => {
  return (
    <div
      className={`${bgColor} ${textColor} p-0.5 px-2 text-center text-xs rounded-full`}
    >
      <p>{text}</p>
    </div>
  );
};

export default TextBox;
