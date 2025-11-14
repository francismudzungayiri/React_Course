const Button = ({ onchange, text = "", isRunning }) => {
  return (
    <button
      onClick={onchange}
      className={`w-1/3 ${
        text === "Reset" ? "bg-red-400" : "bg-blue-400"
      } text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300`}
    >
      {text === "Reset" ? "Reset" : isRunning ? "Pause" : "Start"}
    </button>
  );
};

export default Button;
