import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import HomePage from "./pages/homePage";
import { Route, Routes } from "react-router";
import Nav from "./components/Nav";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage loading={loading} error={error} products={products} />
          }
        />
        <Route path="/catalog" element={<div>Products Catalog</div>} />
      </Routes>
    </>
  );
};

export default App;
