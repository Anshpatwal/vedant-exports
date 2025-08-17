import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    // Inject Google Translate script
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    // Define callback for Google Translate
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );

      // Style the dropdown after Google adds it
      setTimeout(() => {
        const select = document.querySelector(
          "#google_translate_element select.goog-te-combo"
        );
        if (select) {
          select.style.appearance = "none";
          select.style.display = "inline-block";
          select.style.verticalAlign = "middle";
          select.style.whiteSpace = "nowrap";
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

    // Load script
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

        {/* Navigation */}
        <nav className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-8 text-black font-[700]">
            <a
              href="/"
              className="hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              About
            </a>
            <a
              href="/product"
              className="hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              Products
            </a>
            <a
              href="/contactus"
              className="hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              Contact Us
            </a>
            <a
              href="/certificates"
              className="hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              Certificates
            </a>
          </div>

          {/* Google Translate Dropdown */}
          <div
            id="google_translate_wrapper"
            className="flex items-center gap-2 whitespace-nowrap"
            aria-label="Select Language"
          >
            <label
              htmlFor="google_translate_element"
              className="text-sm text-slate-600 hidden md:inline-block font-[700]"
            >
              Select Language:
            </label>
            <div
              id="google_translate_element"
              className="transform scale-90 origin-top-right flex items-center"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
