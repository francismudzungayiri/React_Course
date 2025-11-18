import { useState } from "react";

const Form = () => {
  const [numberOfItems, setNumberOfItems] = useState(1);
  const [itemName, setItemName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { numberOfItems, itemName, packed: false, id: Date.now() };
    console.log(newItem);
    setItemName("");
    setNumberOfItems(1);
  }
  return (
    <form
      className="mt-10 flex gap-5 justify-center items-center"
      onSubmit={handleSubmit}
    >
      <p className="text-gray-600">What do you need for your trip?</p>
      <select
        className="p-3 border-2 border-secondary rounded-md"
        onChange={(e) => {
          setNumberOfItems(Number(e.target.value));
        }}
        value={numberOfItems}
      >
        {[...Array(10)].map((_, i) => {
          const value = i + 1;
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="Enter item"
        className="p-3 border-2 border-secondary rounded-md"
        onChange={(e) => setItemName(e.target.value)}
        value={itemName}
      />
      <input
        type="submit"
        value="Add"
        className="py-3 px-10 bg-accent text-white rounded-md cursor-pointer hover:bg-secondary transition"
      />
    </form>
  );
};

export default Form;
