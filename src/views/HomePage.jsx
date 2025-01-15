import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/image/sublimation jersey degsin.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Grab Upto 50% Off On Selected Products</h1>
            <Link to="/ProductsPage">
              <button className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-600">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Welcome to EpicArt, the ultimate destination for premium jerseys! We are dedicated to bringing sports enthusiasts and fashion-forward individuals a curated selection of high-quality jerseys that celebrate the spirit of the game. At EpicArt, we believe in combining passion for sports with the artistry of style, offering jerseys that not only represent your favorite teams and players but also make a bold fashion statement.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
