const TextInput = ({ onChange, value, placeholder, type = "text", name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="mt-4 p-2 border border-gray-300 rounded-sm w-3/5"
      onChange={onChange}
      value={value}
      name={name}
    />
  );
};

export default TextInput;
