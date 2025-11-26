const ProductCard = ({ products }) => {
  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-500 mb-4">{product.description}</p>
          <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
