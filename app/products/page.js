import products from "../products";

export default function ProductsPage() {
  const formatPrice = (amount) => `৳${amount.toLocaleString("en-BD")}`;

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="w-full bg-gray-900 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">All Products</h1>
        </div>
      </header>

      {/* Products Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
        <h2 className="text-3xl font-bold mb-8 text-gray-100">Browse Our Collection</h2>
        {products.length === 0 ? (
          <p className="text-gray-400">No products available right now.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-48 object-cover sm:h-56 md:h-60"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-100">{p.name}</h3>
                  <p className="text-yellow-400 font-bold mt-2">{formatPrice(p.price)}</p>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 text-center py-6 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Junior Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}
