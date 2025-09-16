import { useState } from 'react';
import { Helmet } from "react-helmet";
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const [inquiry, setInquiry] = useState({
    product: '',
    quantity: '',
    company: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInquiry((prev) => ({ ...prev, [name]: value }));
  };

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://vedant-exports-2rqe.onrender.com/api/send-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiry)
      });

      if (res.ok) {
        alert('Inquiry sent successfully!');
        setInquiry({ product: '', quantity: '', company: '', email: '', message: '' });
      } else {
        alert('Failed to send inquiry');
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('An error occurred');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50">

      <Helmet>
        <title>Vedant Exports | Garment & Textile Exporter from India</title>
        <meta
          name="description"
          content="Vedant Exports is a trusted garment and fabric exporter from India, delivering high-quality apparel, fabrics, and embroidery to buyers in USA, EU, and Australia."
        />
        <meta
          name="keywords"
          content="garment exporter India, clothing supplier India, fabric exporter India, textile manufacturer India, wholesale garments USA EU Australia"
        />
        <meta name="author" content="Vedant Exports" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vedant-exports.vercel.app" />

        {/* Social Share (Open Graph & Twitter) */}
        <meta property="og:title" content="Vedant Exports | Garment & Textile Exporter from India" />
        <meta
          property="og:description"
          content="Exporting garments, fabrics, and embroidery from India to USA, EU, and Australia. Trusted quality, global reach."
        />
        <meta property="og:image" content="/banner2.jpg" />
        <meta property="og:url" content="https://vedant-exports.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="/banner2.jpg"
            alt="Vedant Export Operations"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-teal-900/60" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-7 md:px-12 max-w-6xl space-y-8 mt-[-5vh]">


          <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug tracking-tight drop-shadow-md">
            Garment & Textile Exporter from India
            <span className="block mt-2 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
             ~ Vedant Exports
            </span>
          </h1>


          <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl">
            Vedant Exports delivers premium garments and fabrics worldwide with trust and reliability.
          </p>
          <div className="pt-4">
            <a
              href="#products"
              className="inline-block px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg text-lg transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Explore Our Products
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Our Export Products
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={product.image}
                  alt={`Export ${product.name} from India`}
                  className="rounded-t-xl object-cover h-84 w-full"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-600 mb-4">{product.description}</p>
                  <a
                    href="/contact"
                    className="inline-block w-full bg-indigo-100 text-indigo-600 text-center px-4 py-2 rounded-lg hover:bg-indigo-200 transition-colors"
                  >
                    Request Specifications
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>



      {/* Why Choose Us Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
            Why Choose Vedant Exports?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <img src={item.icon} alt={item.title} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 text-left bg-indigo-50 hover:bg-indigo-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                </button>
                <div className={`px-6 py-4 ${activeFaq === faq.id ? 'block' : 'hidden'}`}>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Inquiry Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-800 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/white-wall-3.png')]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight">
              Start Your Export Inquiry
            </h2>
            <p className="text-indigo-100 text-lg max-w-md">
              Share your requirements and receive a quote within <strong>2 hours</strong> from our export experts. We offer globally certified quality and reliable shipping.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">Email Us</p>
                  <p className="text-indigo-100">vedantexportss@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h1l1 2 1-2h1M7 10v4M10 10h1l1 2 1-2h1M14 10v4M17 10h1l1 2 1-2h1M21 10v4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">Location</p>
                  <p className="text-indigo-100">Surat, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Product Interest</label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                  name="product"
                  value={inquiry.product}
                  onChange={handleChange}
                >
                  <option>Select Product</option>
                  <option>Fabrics</option>
                  <option>Garments</option>
                  <option>Laces</option>
                  <option>T-shirts</option>
                  <option>Embroidery</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Quantity (MTR)</label>
                <input
                  name="quantity"
                  value={inquiry.quantity}
                  onChange={handleChange}
                  type="number"
                  placeholder="e.g. 100"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Company Name</label>
              <input
                name="company"
                value={inquiry.company}
                onChange={handleChange}
                type="text"
                required
                placeholder="Your Company"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                name="email"
                value={inquiry.email}
                onChange={handleChange}
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message (Optional)</label>
              <textarea
                name="message"
                value={inquiry.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us more about your requirement..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-md"
            >
              Get a Custom Quote
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const products = [
  {
    name: 'Garments',
    description: 'Trendy and durable garments tailored for global fashion markets.',
    image: '/garments.jpg'
  },
  {
    name: 'Fabrics',
    description: 'Premium fabrics including polyester, cotton blends, and viscose for apparel manufacturing.',
    image: '/fabrics.jpg'
  },
  {
    name: 'Embroidery',
    description: 'Intricate embroidered textiles crafted with precision for high-end fashion and decor.',
    image: '/embroidery.jpeg'
  }
];


const whyChooseUs = [
  {
    title: 'Driven by Passion',
    description: 'A young, energetic team committed to excellence',
    icon: 'https://img.icons8.com/ios-filled/50/1A73E8/rocket.png'
  },
  {
    title: 'Quality First',
    description: 'Strict quality checks to meet global standards',
    icon: 'https://img.icons8.com/ios-filled/50/1A73E8/guarantee.png'
  },
  {
    title: 'Personalized Support',
    description: 'One-on-one service from inquiry to delivery',
    icon: 'https://img.icons8.com/ios-filled/50/1A73E8/customer-support.png'
  }
];

const faqs = [
  {
    id: 1,
    question: 'What payment methods do you accept?',
    answer: 'We accept LC (Letter of Credit), TT (Telegraphic Transfer), and advance payments through secure banking channels.'
  },
  {
    id: 2,
    question: 'What is your minimum order quantity?',
    answer: 'Our MOQ is flexible depending on the textile. For fabrics and garments, it usually starts from 1,000 meters or as per buyer requirements.'

  },
  {
    id: 3,
    question: 'Do you handle customs clearance?',
    answer: 'Yes, we provide complete EXIM documentation and customs clearance services.'
  }
];
