import React from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"

// ProductCard Component
const ProductCard = ({ name, image, price, rating }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image || "/placeholder.svg"} alt={name} className="w-full h-64 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xl font-bold">${price.toFixed(2)}</span>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
        </div>
      </div>
      <button className="w-full bg-black text-white font-semibold py-2 px-4 rounded hover:bg-gray-600 transition duration-300">
        Add to Cart
      </button>
    </div>
  </div>
)

// TestimonialCard Component
const TestimonialCard = ({ name, image, text }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      <img src={image || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <h3 className="font-semibold">{name}</h3>
    </div>
    <p className="text-gray-700 italic">&ldquo;{text}&rdquo;</p>
  </div>
)

// Newsletter Component
const Newsletter = () => {
  const [email, setEmail] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement newsletter signup logic
    console.log("Signing up with email:", email)
    setEmail("")
  }

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
        <p className="text-gray-700 mb-8">
          Subscribe to our newsletter for exclusive deals and the latest jersey releases!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

// Main HomePage Component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/image/home p.avif')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-4">Elevate Your Game with EpicArt Jerseys</h1>
            <p className="text-xl mb-8">Grab Up to 50% Off on Selected Premium Jerseys</p>
            <Link
              to="/ProductsPage"
              className="bg-black text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-600 transition duration-300 inline-flex items-center"
            >
              Shop Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ProductCard name="Classic Team Jersey" image="/image/FM.jpg" price={79.99} rating={4.5} />
          <ProductCard name="Limited Edition All-Star Jersey" image="/image/FM1.jpg" price={129.99} rating={5} />
          <ProductCard name="Retro Vintage Jersey" image="/image/Retro1.jpg" price={89.99} rating={4.8} />
        </div>
        <div className="text-center mt-12">
          <Link
            to="/ProductsPage"
            className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-md border-2 border-black hover:bg-black hover:text-white transition duration-300"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">About EpicArt</h2>
          <p className="text-gray-700 mb-8">
            Welcome to EpicArt, the ultimate destination for premium jerseys! We are dedicated to bringing sports
            enthusiasts and fashion-forward individuals a curated selection of high-quality jerseys that celebrate the
            spirit of the game. At EpicArt, we believe in combining passion for sports with the artistry of style,
            offering jerseys that not only represent your favorite teams and players but also make a bold fashion
            statement.
          </p>
          
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TestimonialCard
            name="John Doe"
            image="https://avatar.iran.liara.run/public/boy"
            text="The quality of EpicArt jerseys is unmatched. I've never felt more comfortable and stylish on game day!"
          />
          <TestimonialCard
            name="Jane Smith"
            image="https://avatar.iran.liara.run/public/girl"
            text="EpicArt's customer service is top-notch. They helped me find the perfect jersey for my son's birthday."
          />
          <TestimonialCard
            name="Mike Johnson"
            image="https://avatar.iran.liara.run/public"
            text="I love the variety of designs EpicArt offers. There's something for every sports fan!"
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}

export default HomePage

