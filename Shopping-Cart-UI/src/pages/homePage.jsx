import { useContext } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../context/ContextObjects";

const HomePage = () => {
  const { products, loading, error } = useContext(ProductContext);
  return (
    <div className="min-h-screen bg-gray-100 px-15 py-0">
      <Header />
      <h1 className="text-3xl text-gray-400 font-bold mb-8">
        Products Catalog
      </h1>
      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <ProductCard products={products} />
    </div>
  );
};

export default HomePage;
