import { useState } from 'react';
import { cordset, dress, tops } from '../components/lib';
import Header from '../components/Header';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

const categories = ['Textiles'];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('Textiles');
  const [activeSubCategory, setActiveSubCategory] = useState('cordset');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6; // change this to 9 or 12 as you like

  const dataMap = {
    Textiles: {
      cordset: cordset,
      dress: dress,
      tops: tops,
    },
  };

  const subCategories = Object.keys(dataMap[activeCategory]);

  // Get products of active sub-category
  const products = dataMap[activeCategory][activeSubCategory];

  // Pagination logic
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Header />

      <main className="bg-gradient-to-b from-slate-50 to-indigo-50">
        {/* Hero Banner */}
        <section className="relative h-64 px-6 bg-gradient-to-br from-indigo-800 to-teal-600 flex items-center justify-center">
          <div className="max-w-7xl w-full mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Our Export Products</h1>
            <p className="text-indigo-200 mt-2 text-lg">
              Select a category to view detailed products.
            </p>
          </div>
        </section>

        {/* Main Category Tabs */}
        <nav className="px-6">
          <div className="max-w-7xl mx-auto py-6 flex justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveSubCategory(Object.keys(dataMap[cat])[0]);
                  setCurrentPage(1); // reset page
                }}
                className={`px-5 py-2 rounded-full font-medium transition-all ${activeCategory === cat
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-indigo-700 shadow'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </nav>

        {/* Sub Category Tabs */}
        <nav className="px-6">
          <div className="max-w-7xl mx-auto py-4 flex justify-center gap-3">
            {subCategories.map((sub) => (
              <button
                key={sub}
                onClick={() => {
                  setActiveSubCategory(sub);
                  setCurrentPage(1); // reset page
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${activeSubCategory === sub
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-indigo-700 shadow'
                  }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </nav>

        {/* Products Grid */}
        <section className="px-6 pb-12">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {paginatedProducts.map((prod) => (
              <Link
                key={prod.id}
                to={`/products/${prod.id}`}
                className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <img src={prod.images[0]} alt={prod.name} className="object-cover h-150 w-full" />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-2">{prod.name}</h2>

                  <span className="text-teal-500 font-semibold">View Details →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8 gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded bg-white shadow text-indigo-700 disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded shadow ${currentPage === i + 1
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-indigo-700'
                  }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded bg-white shadow text-indigo-700 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-6 py-16 text-center bg-gradient-to-br from-teal-500 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Customized Products?
            </h3>
            <p className="mb-6 text-lg">
              Contact us today for bulk orders, tailored specs, and pricing!
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
