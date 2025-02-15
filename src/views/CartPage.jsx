import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import emailjs from "emailjs-com";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [showMoMoOption, setShowMoMoOption] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [userDetails, setUserDetails] = useState({ location: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    setShowMoMoOption(event.target.value === "MoMo");
  };

  const handleSubmit = () => {
    setLoading(true);
    setStatusMessage(""); // Clear any previous status message

    const templateParams = {
      to_email: "derekoduro449@gmail.com",
      location: userDetails.location,
      phone: userDetails.phone,
      paymentMethod: paymentMethod,
      cartItems: cartItems.map(
        (item) => `${item.name} (${item.id}) - $${item.price}`
      ).join(", "),
      totalPrice: totalPrice,
    };

    emailjs
      .send(
        "service_o2e7ldi", // Replace with your EmailJS service ID
        "template_kx1izdm", // Replace with your EmailJS template ID
        templateParams,
        "KKD0NnYzfGlZG7d-e" // Replace with your EmailJS user ID
      )
      .then((response) => {
        setLoading(false);
        setStatusMessage("Order submitted successfully!");
        setUserDetails({ location: "", phone: "" }); // Reset user details
      })
      .catch((error) => {
        setLoading(false);
        setStatusMessage("Failed to submit your order. Please try again.");
      });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1>

      {cartItems.length > 0 ? (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.cartItemId}
                className="flex items-center justify-between border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.cartItemId)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Total: ${totalPrice.toFixed(2)}</h2>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Select Payment Method:</h3>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Credit Card"
                  checked={paymentMethod === "Credit Card"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Credit Card
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="MoMo"
                  checked={paymentMethod === "MoMo"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                MoMo
              </label>

              {showMoMoOption && (
                <div>
                  <label htmlFor="momoDetails" className="block text-gray-700">
                    Enter MoMo Number:
                  </label>
                  <input
                    type="text"
                    id="momoDetails"
                    placeholder="Your MoMo number"
                    className="border p-2 rounded-md w-full mt-2"
                    value={userDetails.phone}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, phone: e.target.value })
                    }
                  />
                </div>
              )}

              <div>
                <label htmlFor="location" className="block text-gray-700">
                  Delivery Location:
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Your location"
                  className="border p-2 rounded-md w-full mt-2"
                  value={userDetails.location}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, location: e.target.value })
                  }
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className={`mt-6 px-6 py-3 rounded-md w-full text-center ${
                loading
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Order"}
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">
          Your cart is empty.{" "}
          <a href="/ProductsPage" className="text-blue-500 hover:underline">
            Browse products.
          </a>
        </p>
      )}

      {/* Status Message Popup */}
      {statusMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-lg text-center">
            <p className="text-lg font-semibold">{statusMessage}</p>
            <button
              onClick={() => setStatusMessage("")}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
