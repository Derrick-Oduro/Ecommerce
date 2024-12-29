import React from "react";
import "./HomePage.css"; // We'll style it using CSS

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Your Brand</h1>
        <nav>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="hero">
        <div>
          <h1>Welcome to Your Premium Marketplace</h1>
          <p>Discover unique products that cater to your exclusive needs.</p>
          <div className="cta">
            <a href="#features">Explore Now</a>
          </div>
        </div>
      </div>

      <section id="features">
        <h2>Why Choose Us</h2>
        <div className="features">
          <div>
            <h3>Unique Products</h3>
            <p>We offer exclusive items you won't find anywhere else.</p>
          </div>
          <div>
            <h3>Quality Guaranteed</h3>
            <p>Our products meet the highest quality standards.</p>
          </div>
          <div>
            <h3>Seamless Experience</h3>
            <p>Shop with ease using our responsive and intuitive design.</p>
          </div>
        </div>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>
          We are a leading provider in our niche market, delivering exceptional
          value to our customers through unparalleled product offerings and
          customer service.
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Your Brand. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
