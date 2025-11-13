const TextInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className="w-full mb-4 ">
      <label htmlFor={name} className="block text-left mb-2 font-semibold">
        {label}
      </label>
      <input
        type="text"
        name={name}
        className="w-full p-2 border border-accent rounded-lg focus:outline-none focus:ring focus:ring-accent"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
