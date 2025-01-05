import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <div className="logo">EPICART</div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="nav-icons">
          <span role="img" aria-label="search">🔍</span>
          <span role="img" aria-label="wishlist">❤️</span>
          <span role="img" aria-label="cart">🛒</span>
        </div>
      </header>

      {/* Featured Section */}
      <section className="featured">
        <div className="featured-text">
          <h1>Design Your Jersey, Your Way</h1>
          <p>
            <a href="#">→</a>
          </p>
        </div>
        <div className="featured-image">
          {/* Replace the src with your image */}
          <img src="placeholder-featured.jpg" alt="Featured Jersey" />
        </div>
      </section>

      {/* Personalized Section */}
      <section className="personalize">
        <h2>
          Personalize Your Look <a href="#">→</a>
        </h2>
      </section>

      {/* Product Grid Section */}
      <section className="product-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="product-card" key={index}>
            {/* Replace the src with your image */}
            <img src={`placeholder${index + 1}.jpg`} alt={`Product ${index + 1}`} />
            <p>$150</p>
          </div>
        ))}
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          At EPICART, we believe in celebrating individuality through sportswear. 
          Our platform allows you to design and personalize your jerseys exactly how you want them. 
          With a wide variety of high-quality options, we’re here to make sure your style and team spirit shine. 
          Join us in creating a one-of-a-kind look, made just for you!
        </p>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 EPICART. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
