// ContactPage.jsx
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch("https://vedant-exports.com/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          alert("Inquiry sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          console.log(formData);
        } else {
          alert("Failed to send inquiry");
        }
      } catch (err) {
        console.error("Error:", err);
        alert("An error occurred. Please try again later.");
      }
    };

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative h-72 flex items-center justify-center bg-gradient-to-br from-indigo-800 to-teal-600 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white z-10">
            Get in Touch
          </h1>
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
              alt="Contact illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-slate-900">
              We’d Love to Hear From You
            </h2>
            <p className="text-slate-600">
              Whether you have a question about exports, pricing, or anything
              else, our team is ready to answer all your inquiries.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8",
                  title: "Email",
                  info: "vedantexportss@gmail.com",
                },
                {
                  icon: "M3 5v4h18V5M3 12h18m-18 5h18",
                  title: "Phone",
                  info: "+91 8799473680",
                },
                {
                  icon: "M12 2l3 7H9l3-7zm0 5v15",
                  title: "Address",
                  info: "28/30, Hari Om Industry, Surat, Gujarat",
                },
              ].map(({ icon, title, info }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <svg
                      className="w-6 h-6 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{title}</h4>
                    <p className="text-slate-600">{info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm text-slate-500 italic">
                Or fill out the form and we’ll get back to you within 2 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-xl space-y-6 text-black"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                placeholder="What’s this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-indigo-600 transition-shadow shadow-md"
            >
              Send Inquiry
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
