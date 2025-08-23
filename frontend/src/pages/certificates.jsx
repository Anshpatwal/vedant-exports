import { certificates } from '../components/lib'; // adjust path if needed
import Header from '../components/Header';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

export default function CertificatesPage() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative h-64 px-6 bg-gradient-to-br from-indigo-800 to-teal-600 flex items-center justify-center">
          <div className="max-w-7xl w-full mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our Certifications
            </h1>
          </div>
        </section>

        {/* Certificates Grid */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="object-cover h-48 w-full"
                />
                <div className="p-6 space-y-2">
                  <h2 className="text-xl font-bold text-slate-900">{cert.title}</h2>
                  <p className="text-slate-600 text-sm">Issued by {cert.issuer}</p>
                  <p className="text-slate-600 text-sm">Date: {cert.date}</p>
                  <p className="text-slate-700 mt-4">{cert.description}</p>
                 <Link
                    to={`/certificates/${cert.id}`}
                    className="inline-block mt-4 text-teal-500 font-semibold hover:underline"
                  >
                    View Certificate Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-6 py-16 text-center bg-gradient-to-br from-teal-500 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Specific Certification Copies?
            </h3>
            <p className="mb-6 text-lg">
              Contact us and we’ll provide authenticated copies of any certificate you require.
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
