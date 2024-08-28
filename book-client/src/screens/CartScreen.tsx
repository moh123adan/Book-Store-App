// src/screens/CartScreen.tsx
import React from "react";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";

const CartScreen: React.FC = () => {
  // Mock cart items (in a real app, you'd fetch this data from your state/store or a backend)
  const cartItems = [
    { id: 1, title: "The Great Gatsby", price: 19.99, quantity: 1 },
    { id: 2, title: "To Kill a Mockingbird", price: 14.99, quantity: 2 },
    { id: 3, title: "1984", price: 12.99, quantity: 1 },
  ];

  const handleRemoveItem = (itemId: number) => {
    // Logic to remove item from cart
    console.log(`Remove item with id: ${itemId}`);
  };

  const handleIncreaseQuantity = (itemId: number) => {
    // Logic to increase item quantity
    console.log(`Increase quantity for item with id: ${itemId}`);
  };

  const handleDecreaseQuantity = (itemId: number) => {
    // Logic to decrease item quantity
    console.log(`Decrease quantity for item with id: ${itemId}`);
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <ShoppingCart size={64} className="text-blue-600 mx-auto mb-4" />
            <p className="text-gray-700 text-xl">Your cart is empty.</p>
          </div>
        ) : (
          <div>
            {/* Cart Items */}
            <div className="mb-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-blue-100 p-4 mb-4 rounded-lg shadow-md"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleDecreaseQuantity(item.id)}
                      className="bg-gray-200 text-gray-600 p-2 rounded-lg hover:bg-gray-300"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="mx-4 text-lg">{item.quantity}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className="bg-gray-200 text-gray-600 p-2 rounded-lg hover:bg-gray-300"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="text-right">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="text-right">
              <h2 className="text-2xl font-semibold text-gray-800">
                Total: ${calculateTotal()}
              </h2>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
