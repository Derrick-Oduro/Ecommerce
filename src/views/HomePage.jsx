import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-96" 
        style={{ backgroundImage: "url('/image/sublimation jersey degsin.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Grab Upto 50% Off On Selected Products</h1>
            <button className="mt-4 px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          At EPICART, we are committed to bringing you the best in personalized sportswear...
        </p>
      </section>
    </div>
  );
};

export default HomePage;
