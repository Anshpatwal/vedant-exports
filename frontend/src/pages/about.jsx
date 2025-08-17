import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt="About Vedant Exports"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/60 to-teal-600/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">About Vedant Exports</h1>
          <p className="mt-4 text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto">
            A growing exporter from Gujarat, delivering premium garments and fabrics worldwide.
          </p>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: 'Quality Assurance',
                desc: 'We ensure that every product meets international standards and client expectations.',
              },
              {
                title: 'Reliable Logistics',
                desc: 'Timely and safe delivery of goods through trusted logistic partners worldwide.',
              },
              {
                title: 'Transparent Communication',
                desc: 'Honesty and clarity in every step of the export process.',
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-indigo-50 rounded-xl shadow">
                <h4 className="text-xl font-semibold text-indigo-800 mb-2">{item.title}</h4>
                <p className="text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-indigo-50 px-6" id="products">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Products We Export</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-teal-700 mb-2">Garments</h3>
              <p className="text-slate-600">
                Premium-quality ready-made garments for global markets — crafted with style, comfort, and durability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-teal-700 mb-2">Fabrics</h3>
              <p className="text-slate-600">
                A wide range of fabrics including cotton, polyester blends, and embroidered textiles sourced from Gujarat.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-16 text-center bg-gradient-to-br from-indigo-800 to-teal-600 text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Partner With Vedant Exports</h3>
        <p className="mb-6 text-indigo-200">
          Let’s grow together. Reach out to get customized quotes for your export needs.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-teal-400 to-cyan-400 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
