import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger icons

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );

      setTimeout(() => {
        const select = document.querySelector(
          "#google_translate_element select.goog-te-combo"
        );
        if (select) {
          select.style.appearance = "none";
          select.style.height = "30px";
          select.style.paddingRight = "32px";
          select.style.backgroundImage =
            "url(\"data:image/svg+xml;utf8,<svg fill='black' height='12' viewBox='0 0 24 24' width='12' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>\")";
          select.style.backgroundRepeat = "no-repeat";
          select.style.backgroundPosition = "right 10px center";
          select.style.backgroundSize = "12px 12px";
        }
      }, 1500);
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <a href="/">
          <img
            src="/logo.png"
            alt="Vedant Exports Logo"
            width={70}
            height={70}
            className="object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-black font-[700]">
          <a href="/" className="hover:text-indigo-600 transition">Home</a>
          <a href="/about" className="hover:text-indigo-600 transition">About</a>
          <a href="/product" className="hover:text-indigo-600 transition">Products</a>
          <a href="/contactus" className="hover:text-indigo-600 transition">Contact Us</a>
          <a href="/certificates" className="hover:text-indigo-600 transition">Certificates</a>
        </nav>

        {/* Google Translate */}
        <div
          id="google_translate_wrapper"
          className="hidden md:flex items-center gap-1 whitespace-nowrap"
        >
          <div
            id="google_translate_element"
            className="transform scale-90 origin-top-right flex items-center"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4 font-[700]">
          <a href="/" className="hover:text-indigo-600">Home</a>
          <a href="/about" className="hover:text-indigo-600">About</a>
          <a href="/product" className="hover:text-indigo-600">Products</a>
          <a href="/contactus" className="hover:text-indigo-600">Contact Us</a>
          <a href="/certificates" className="hover:text-indigo-600">Certificates</a>

          {/* Translate Dropdown on Mobile */}
          <div id="google_translate_element" className="mt-2" />
        </div>
      )}
    </header>
  );
}
