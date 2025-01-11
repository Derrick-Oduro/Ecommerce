import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const ProductsPage = () => {
  const { addToCart } = useContext(CartContext);
  const [search, setSearch] = useState('');
  const jerseys = [
    { id: 1, name: 'Team Jersey A', price: 50 },
    { id: 2, name: 'Team Jersey B', price: 60 },
    // more jerseys...
  ];

  const handleSearch = (event) => setSearch(event.target.value);

  const filteredJerseys = jerseys.filter(jersey =>
    jersey.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Jerseys</h1>
      <input
        type="text"
        placeholder="Search jerseys..."
        value={search}
        onChange={handleSearch}
        className="mb-4 p-2 border border-gray-300 rounded-md w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredJerseys.map((jersey) => (
          <div key={jersey.id} className="border p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">{jersey.name}</h2>
            <p className="text-gray-600">${jersey.price}</p>
            <button
              onClick={() => addToCart(jersey)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
