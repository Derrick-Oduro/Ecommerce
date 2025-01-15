import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const ProductsPage = () => {
  const { addToCart } = useContext(CartContext);
  const [search, setSearch] = useState('');
  
  // Adding image URLs to the jerseys array
  const jerseys = [
    { id: 1, name: 'ManCity Home Jersey', price: 50, image: '/image/Man City Home Kit.webp' },
    { id: 2, name: 'ManCity', price: 60, image: '/image/701230971001_pp_01_mcfc.webp' },
    { id: 3, name: 'Barcelona Home', price: 60, image: '/image/BA Home.webp' },
    { id: 4, name: 'RealMadrid Away kit', price: 60, image: '/image/RM Away.webp' },
    { id: 5, name: 'Team Jersey B', price: 60, image: '/image/RM Home.webp' },
    { id: 6, name: 'Team Jersey B', price: 60, image: '/image/Arsenal Away kit.webp' },
    { id: 7, name: 'Team Jersey B', price: 60, image: '/image/MU Away1.avif' },
    { id: 8, name: 'Team Jersey B', price: 60, image: '/image/MU Away2.avif' },
    { id: 9, name: 'Team Jersey B', price: 60, image: '/image/MU home.avif' },
    
    
    // Add more jerseys here
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
            {/* Image Section */}
            <img 
              src={jersey.image} 
              alt={jersey.name} 
              className="w-full h-56 object-cover rounded-md mb-4" 
            />
            <h2 className="text-xl font-semibold">{jersey.name}</h2>
            <p className="text-gray-600">${jersey.price}</p>
            <button
              onClick={() => addToCart(jersey)}
              className="mt-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-600"
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
