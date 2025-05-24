import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log("Menu state changed:", isMenuOpen);
  }, [isMenuOpen]);

  return (
    <div className="relative z-50 py-6 px-8 sm:px-16 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white border-b border-slate-700/50 backdrop-blur-sm">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent"></div>

      <div className="flex justify-between items-center text-lg sm:text-xl md:text-2xl max-w-7xl mx-auto">
        <div className="blog-headers font-bold">
          <a
            href="https://a2ys.dev"
            className="hover:text-blue-300 transition-colors duration-300 ease-out"
          >
            a2ys
          </a>
          <span className="px-2 font-light text-slate-400">/</span>
          <a
            href="/"
            className="hover:text-blue-300 transition-colors duration-300 ease-out"
          >
            Savant
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="space-x-8 max-[640px]:hidden">
          {["Posts", "Series", "Authors", "About"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative text-lg font-medium text-slate-200 hover:text-white transition-all duration-300 ease-out group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="min-[640px]:hidden p-2 hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 z-50 bg-gradient-to-b from-slate-800 to-gray-900 border-b border-slate-700/50 backdrop-blur-sm shadow-xl">
          <div className="p-6 space-y-4 max-w-7xl mx-auto z-50">
            {["Posts", "Series", "Authors", "About"].map((item, index) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block text-lg font-medium text-slate-200 hover:text-white hover:translate-x-2 transition-all duration-300 ease-out"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
