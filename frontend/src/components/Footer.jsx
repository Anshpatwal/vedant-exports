import { MapPin, Phone, Mail, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Vedant Exports
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Registered Export House under DGFT, Ministry of Commerce & Industry,
            Government of India.
          </p>
          <div className="flex items-center space-x-3">
            <img
              src="/Make_in_India.png"
              alt="Made in India"
              width={36}
              height={36}
            />
            <span className="text-slate-400 text-sm">
              Make in India Certified
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {["About Us", "Our Services", "Export Process", "Quality Assurance"].map(
              (link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Products</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="/products"
                className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
              >
                Women Cord Set
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
              >
                Dresses
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
              >
                Women Tops
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
              >
                Embrodiery
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <div className="space-y-3 text-slate-400 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-teal-400" />
              <p>
                28/30, Hari Om Industry,
                <br />
                Surat, Gujarat
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-teal-400" />
              <a href="tel:+918799473680" className="hover:text-teal-400">
                +91 8799473680
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-teal-400" />
              <a
                href="mailto:anshpatwal2703@gmail.com"
                className="hover:text-teal-400"
              >
                vedantexportss@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Socials */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/ansh-patwal-143a87369/"
              className="text-slate-400 hover:text-teal-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-teal-400 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Vedant Exports. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
