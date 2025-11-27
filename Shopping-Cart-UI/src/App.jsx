import ProductCard from "./components/ProductCard";
import HomePage from "./pages/homePage";
import { Route, Routes } from "react-router";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<div>Products Catalog</div>} />
      </Routes>
    </>
  );
};

export default App;
