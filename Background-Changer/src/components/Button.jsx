const Button = ({ text, color = "black", btnClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={`outline-none px-4 py-2 text-white shadow-lg rounded-full cursor-pointer hover:shadow-2xl`}
      onClick={btnClick}
    >
      {text}
    </button>
  );
};

export default Button;
