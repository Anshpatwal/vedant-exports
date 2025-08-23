import { useParams } from "react-router-dom";
import { certificates } from "../components/lib";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CertificateDetailPage() {
  const { id } = useParams();
  const cert = certificates.find((c) => c.id === id);

  if (!cert) {
    return (
      <div className="text-center p-12">
        <h2 className="text-2xl font-bold">Certificate Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-slate-50 to-indigo-50 min-h-screen">
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <img src={cert.image} alt={cert.title} className="w-full max-h-156 object-contain rounded-lg mb-6" />
            <h1 className="text-3xl font-bold mb-4">{cert.title}</h1>
            <p className="text-lg mb-2"><strong>Issuer:</strong> {cert.issuer}</p>
            <p className="text-lg mb-6"><strong>Date:</strong> {cert.date}</p>
            <p className="text-base leading-relaxed">{cert.description}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
