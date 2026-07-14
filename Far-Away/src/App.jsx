import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PackingList from "./components/List";

const App = () => {
  const [bag, setBag] = useState([
    // { id: 1, item: "Tent", quantity: 1, packed: false },
    //{ id: 2, item: "Sleeping Bag", quantity: 5, packed: true },
    //{ id: 3, item: "Flashlight", quantity: 5, packed: false },
    //{ id: 4, item: "First Aid Kit", quantity: 1, packed: false },
    //{ id: 5, item: "Map", quantity: 2, packed: false },
  ]);

  //function to add new item to the bag
  function addItem(newItem) {
    setBag((prevBag) => [...prevBag, newItem]);
  }

  //delete item from the bag
  function deleteItem(id) {
    setBag((prevBag) => prevBag.filter((item) => item.id !== id));
  }

  //check item as packed
  function togglePacked(id) {
    setBag((prevBag) =>
      prevBag.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  return (
    <div className="w-full h-screen bg-background">
      <Header />
      <Form addItem={addItem} />
      <PackingList
        items={bag}
        deleteItem={deleteItem}
        togglePacked={togglePacked}
      />
    </div>
  );
};

export default App;
