import React, { useContext, useState, useEffect } from "react"
import { CartContext } from "./CartContext"
import { WishlistContext } from "./WishlistContext"
import { ShoppingCart, Heart, Search, Filter, Star, X } from "lucide-react"

const ProductCard = ({ jersey, onImageClick, addToWishlist, isInWishlist }) => (
  <div className="border p-4 rounded-md shadow-md transition-transform hover:scale-105">
    <img
      src={jersey.image || "/placeholder.svg"}
      alt={jersey.name}
      className="w-full h-56 object-cover rounded-md mb-4 cursor-pointer"
      style={{ objectFit: "contain", objectPosition: "center" }}
      onClick={() => onImageClick(jersey)}
    />
    <h2 className="text-xl font-semibold mb-2">{jersey.name}</h2>
    <div className="flex items-center mb-2">
      <div className="flex items-center mr-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(jersey.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-600">{jersey.rating.toFixed(1)}</span>
    </div>
    <p className="text-gray-600 mb-2">${jersey.price.toFixed(2)}</p>
    <div className="flex space-x-2">
      <button
        onClick={() => onImageClick(jersey)}
        className="flex-1 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-500 transition duration-300"
      >
        View Details
      </button>
      <button
        onClick={() => addToWishlist(jersey)}
        className={`flex items-center justify-center p-2 rounded-md transition duration-300 ${
          isInWishlist(jersey.id) ? "bg-red-100 text-red-600" : "bg-gray-100 hover:bg-gray-200"
        }`}
        aria-label={isInWishlist(jersey.id) ? "Remove from Wishlist" : "Add to Wishlist"}
      >
        <Heart className={`w-6 h-6 ${isInWishlist(jersey.id) ? "fill-current" : ""}`} />
      </button>
    </div>
  </div>
)

const JerseyModal = ({ jersey, onClose, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState("M")

  // Disables scrolling on modal open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  // Closes the modal when clicking outside it
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose()
    }
  }

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          <X className="w-6 h-6" />
        </button>
        <img
          src={jersey.image || "/placeholder.svg"}
          alt={jersey.name}
          className="w-full max-h-[400px] object-contain rounded-md mb-4"
          style={{ objectFit: "contain" }} // Ensures full image is shown
        />
        <h2 className="text-2xl font-semibold mb-2">{jersey.name}</h2>
        <p className="text-gray-600 mb-4">{jersey.description || "No description available."}</p>
        <div className="mb-4">
          <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
            Select Size
          </label>
          <select
            id="size"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <button
          onClick={() => {
            addToCart({ ...jersey, size: selectedSize })
            onClose()
          }}
          className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-600 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

const ProductsPage = () => {
  const { addToCart } = useContext(CartContext)
  const { addToWishlist, wishlist } = useContext(WishlistContext)
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [filterTeam, setFilterTeam] = useState("")
  const [selectedJersey, setSelectedJersey] = useState(null)

  const jerseys = [
    // Your array of jerseys remains unchanged.
    {
      id: 1,
      name: "ManCity Home Jersey",
      price: 50,
      image: "/image/Man City Home Kit.webp",
      team: "ManCity",
      rating: 4.5,
      description: "Official Manchester City home jersey for the 2023 season.",
    },
    {
      id: 2,
      name: "ManCity Away Jersey",
      price: 60,
      image: "/image/701230971001_pp_01_mcfc.webp",
      team: "ManCity",
      rating: 4.2,
      description: "Stylish away jersey for Manchester City fans.",
    },

    {
      id: 3,
      name: "Barcelona Home Kit",
      price: 60,
      image: "/image/BA Home.webp",
      team: "Barcelona",
      rating: 4.8,
      description: "Iconic Barcelona home jersey featuring traditional blue and red stripes.",
    },
    {
      id: 4,
      name: "Real Madrid Away Kit",
      price: 60,
      image: "/image/RM Away.webp",
      team: "RealMadrid",
      rating: 4.3,
      description: "Sleek Real Madrid away kit designed for performance and style.",
    },
    {
      id: 5,
      name: "Real Madrid Home Kit",
      price: 60,
      image: "/image/RM H.avif",
      team: "RealMadrid",
      rating: 4.7,
      description: "Classic white Real Madrid home jersey for true fans.",
    },
    {
      id: 6,
      name: "Arsenal Away Kit",
      price: 60,
      image: "/image/Arsenal Away kit.webp",
      team: "Arsenal",
      rating: 4.1,
      description: "Bold Arsenal away kit for making a statement.",
    },
    {
      id: 7,
      name: "Man United Away Kit 1",
      price: 60,
      image: "/image/MU Away1.avif",
      team: "ManUnited",
      rating: 4.4,
      description: "Manchester United away kit featuring cutting-edge design.",
    },
    {
      id: 8,
      name: "Man United Away Kit 2",
      price: 60,
      image: "/image/MU Away2.avif",
      team: "ManUnited",
      rating: 4.6,
      description: "Stylish Manchester United away kit for fans everywhere.",
    },
    {
      id: 9,
      name: "Man United Home Kit",
      price: 60,
      image: "/image/MU home.avif",
      team: "ManUnited",
      rating: 4.9,
      description: "Traditional red Manchester United home jersey.",
    },
    {
      id: 10,
      name: "AC Milan Kit",
      price: 60,
      image: "/image/AC Ani kit.webp",
      team: "AC Milan",
      rating: 4.8,
      description: "Iconic red and black AC Milan jersey for passionate fans.",
    },
    {
      id: 11,
      name: "AC Milan Away Kit 1",
      price: 60,
      image: "/image/AC away 2 kit.webp",
      team: "AC Milan",
      rating: 4.3,
      description: "Stylish AC Milan away kit featuring a fresh design.",
    },
    {
      id: 12,
      name: "AC Milan Away Kit 2",
      price: 60,
      image: "/image/AC away kit.webp",
      team: "AC Milan",
      rating: 4.7,
      description: "Modern AC Milan away jersey for the 2023 season.",
    },
    {
      id: 13,
      name: "AC Milan Home Kit",
      price: 60,
      image: "/image/AC HOME kit.webp",
      team: "AC Milan",
      rating: 4.1,
      description: "Classic AC Milan home kit for loyal supporters.",
    },
    {
      id: 14,
      name: "Valencia Away Kit 1",
      price: 60,
      image: "/image/valencia A1.webp",
      team: "Valencia",
      rating: 4.9,
      description: "Stylish Valencia away kit for bold football fans.",
    },
    {
      id: 15,
      name: "Valencia Away Kit",
      price: 60,
      image: "/image/Valencia Away.avif",
      team: "Valencia",
      rating: 4.8,
      description: "Official Valencia away jersey for the new season.",
    },
    {
      id: 16,
      name: "Valencia Home Kit",
      price: 60,
      image: "/image/Valencia Home.avif",
      team: "Valencia",
      rating: 4.3,
      description: "Classic Valencia home kit with a fresh touch.",
    },
    {
      id: 17,
      name: "Sevilla Home Kit",
      price: 60,
      image: "/image/Sevilla.avif",
      team: "Sevilla",
      rating: 4.7,
      description: "Traditional Sevilla home kit with a modern flair.",
    },
    {
      id: 18,
      name: "Athletic Bilbao Away Kit",
      price: 60,
      image: "/image/AT B A.avif",
      team: "Athletic Bilbao",
      rating: 4.1,
      description: "Athletic Bilbao away jersey for dedicated supporters.",
    },
    {
      id: 19,
      name: "Athletic Bilbao Home Kit",
      price: 60,
      image: "/image/AT B.avif",
      team: "Athletic Bilbao",
      rating: 4.4,
      description: "Proud Athletic Bilbao home jersey for the season.",
    },
    {
      id: 20,
      name: "Athletic Bilbao Away Kit 2",
      price: 60,
      image: "/image/ATB A1.avif",
      team: "Athletic Bilbao",
      rating: 4.6,
      description: "Unique Athletic Bilbao away kit design.",
    },
    {
      id: 21,
      name: "Atletico Madrid Home Kit",
      price: 60,
      image: "/image/Atico.jpg",
      team: "Atletico Madrid",
      rating: 4.9,
      description: "Classic red and white Atletico Madrid home jersey.",
    },
    {
      id: 22,
      name: "Dortmund Away Kit",
      price: 60,
      image: "/image/Dot A.webp",
      team: "Dortmund",
      rating: 4.8,
      description: "Sleek black and yellow Dortmund away jersey.",
    },
    {
      id: 23,
      name: "Dortmund Home Kit",
      price: 60,
      image: "/image/Dotmond.webp",
      team: "Dortmund",
      rating: 4.3,
      description: "Iconic Dortmund yellow home jersey for fans.",
    },
    {
      id: 24,
      name: "Girona Kit",
      price: 60,
      image: "/image/Girona.avif",
      team: "Girona",
      rating: 4.7,
      description: "Girona home kit with a sleek design.",
    },
  ]

  const handleSearch = (event) => setSearch(event.target.value)
  const handleSortChange = (event) => setSortBy(event.target.value)
  const handleFilterChange = (event) => setFilterTeam(event.target.value)

  const filteredAndSortedJerseys = jerseys
    .filter(
      (jersey) =>
        jersey.name.toLowerCase().includes(search.toLowerCase()) && (filterTeam === "" || jersey.team === filterTeam),
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name)
      if (sortBy === "price") return a.price - b.price
      if (sortBy === "rating") return b.rating - a.rating
      return 0
    })

  const teams = [...new Set(jerseys.map((jersey) => jersey.team))]

  const isInWishlist = (id) => wishlist.some((item) => item.id === id)

  useEffect(() => {
    document.title = "EpicArt Jerseys | Shop Premium Sports Jerseys"
  }, [])

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">EpicArt Premium Jerseys</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search jerseys..."
            value={search}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex space-x-4 w-full md:w-auto">
          <div className="relative w-full md:w-auto">
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="appearance-none pl-10 pr-8 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
            </select>
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative w-full md:w-auto">
            <select
              value={filterTeam}
              onChange={handleFilterChange}
              className="appearance-none pl-10 pr-8 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Teams</option>
              {teams.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
      {filteredAndSortedJerseys.length === 0 ? (
        <p className="text-center text-gray-600 mt-8">No jerseys found. Try adjusting your search or filters.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedJerseys.map((jersey) => (
            <ProductCard
              key={jersey.id}
              jersey={jersey}
              onImageClick={setSelectedJersey}
              addToWishlist={addToWishlist}
              isInWishlist={isInWishlist}
            />
          ))}
        </div>
      )}
      {selectedJersey && (
        <JerseyModal jersey={selectedJersey} onClose={() => setSelectedJersey(null)} addToCart={addToCart} />
      )}
    </div>
  )
}

export default ProductsPage

