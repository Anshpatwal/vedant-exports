import { useState } from 'react';
import { garments, fabrics } from '../components/lib';
import Header from '../components/Header';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

const categories = ['Textiles'];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('Textiles');
  const [activeSubCategory, setActiveSubCategory] = useState('Garments'); // default sub-category

  const dataMap = {
    Textiles: {
      Garments: garments,
      Fabrics: fabrics,
    },

  };

  const subCategories = Object.keys(dataMap[activeCategory]);

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
                  setActiveSubCategory(Object.keys(dataMap[cat])[0]); // reset to first sub-category
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
                onClick={() => setActiveSubCategory(sub)}
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
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {dataMap[activeCategory][activeSubCategory].map((prod) => (
              <Link
                key={prod.id}
                to={`/products/${prod.id}`}
                className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <img src={prod.images[0]} alt={prod.name} className="object-cover h-56 w-full" />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-2">{prod.name}</h2>
                  <p className="text-slate-600 mb-4">
                    {prod.description.length > 200
                      ? prod.description.slice(0, 200) + "..."
                      : prod.description}
                  </p>
                  <span className="text-teal-500 font-semibold">View Details →</span>
                </div>
              </Link>

            ))}
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
