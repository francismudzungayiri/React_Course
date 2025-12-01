const Button = ({ text, onClick, type = "other" }) => {
  return (
    <button
      onClick={onClick}
      className={`mt-5 px-4 py-2 cursor-pointer ${
        type === "confirm" ? "bg-green-400" : "bg-blue-400"
      } rounded-sm text-white hover:bg-blue-600 hover:text-white transition`}
    >
      {text}
    </button>
  );
};

export default Button;
