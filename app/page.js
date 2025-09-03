"use client";

import { useState } from "react";
import products from "./products";
import { Search } from "lucide-react";

export default function Home() {
  const [query, setQuery] = useState("");

  const formatPrice = (amount) => `৳${amount.toLocaleString("en-BD")}`;

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      
      <header className="w-full bg-gray-900 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 text-center sm:text-left">
            Junior Shop
          </h1>

          
          <div className="relative w-full sm:w-64 md:w-80 mt-3 sm:mt-0">
            <input
              type="text"
              placeholder="Search here ...."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
            <Search className="absolute left-3 top-2.5 sm:top-3 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
      </header>

      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-100 text-center sm:text-left">
          Our Products
        </h2>

        {filteredProducts.length === 0 ? (
          <p className="text-gray-400 text-sm sm:text-base text-center">
            No products found for "{query}"
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105 flex flex-col"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-48 sm:h-56 md:h-60 object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-gray-100">
                    {p.name}
                  </h3>
                  <p className="text-yellow-400 font-bold mt-2 text-base sm:text-lg md:text-xl">
                    {formatPrice(p.price)}
                  </p>
                  <button className="mt-auto w-full bg-blue-600 text-white py-2 sm:py-2.5 rounded-lg hover:bg-blue-500 transition mt-4 text-sm sm:text-base md:text-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      
      <footer className="bg-gray-950 text-gray-400 text-center py-6 border-t border-gray-800 text-sm sm:text-base">
        <p>&copy; {new Date().getFullYear()} Junior Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}
