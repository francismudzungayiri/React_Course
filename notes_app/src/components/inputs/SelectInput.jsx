const SelcetInput = ({ label, name, value, onChange, options = [] }) => {
  return (
    <div className="w-full mb-4 ">
      <label htmlFor={name} className="block text-left mb-2 font-semibold">
        {label}
      </label>
      <select
        type="text"
        name={name}
        className="appearance-none w-full bg-transparent border border-accent text-accent py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-third focus:border-third"
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelcetInput;
