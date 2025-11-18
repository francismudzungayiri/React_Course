import Form from "./components/Form";
import Header from "./components/Header";
import PackingList from "./components/List";

const App = () => {
  const bag = [
    { id: 1, item: "Tent", quantity: 1, packed: false },
    { id: 2, item: "Sleeping Bag", quantity: 5, packed: true },
    { id: 3, item: "Flashlight", quantity: 5, packed: false },
    { id: 4, item: "First Aid Kit", quantity: 1, packed: false },
    { id: 5, item: "Map", quantity: 2, packed: false },
  ];
  return (
    <div className="w-full h-screen bg-background">
      <Header />
      <Form items={bag} />
      <PackingList items={bag} />
    </div>
  );
};

export default App;
