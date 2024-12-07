import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative py-4 px-8 sm:px-12 md:px-16 lg:py-4 lg:px-24 xl:py-6 xl:px-48 text-white text-lg sm:text-xl md:text-2xl navbar bg-gray-900 border-b border-b-white flex justify-between items-center">
      <div className="blog-headers font-bold">
        <a href="https://a2ys.dev" className="link">
          a2ys
        </a>{" "}
        <span className="px-1 font-bold">/</span> <a href="/">Savant</a>
      </div>
      <div className="space-x-6 max-[440px]:hidden">
        <a href="/posts" className="link text-xl">
          Posts
        </a>
        <a href="/tags" className="link text-xl">
          Tags
        </a>
        <a href="/authors" className="link text-xl">
          Authors
        </a>
        <a href="/about" className="link text-xl">
          About
        </a>
      </div>
      <button
        className="min-[440px]:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
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
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
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
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {isMenuOpen && (
        <div
          className={`absolute top-full left-0 right-0 border-b border-b-white bg-gray-900 text-white p-4 dropdown ${isMenuOpen ? "open" : ""}`}
        >
          <a href="/posts" className="block">
            Posts
          </a>
          <a href="/tags" className="block mt-3">
            Tags
          </a>
          <a href="/authors" className="block mt-3">
            Authors
          </a>
          <a href="/about" className="block mt-3">
            About
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
