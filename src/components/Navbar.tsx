const Navbar = () => {
  return (
    <div className="relative py-4 px-8 sm:px-12 md:px-16 lg:py-4 lg:px-24 xl:py-6 xl:px-48 text-white text-lg sm:text-xl md:text-2xl navbar bg-gray-900 border-b border-b-white flex justify-between">
      <div className="blog-headers font-bold">
        <a href="https://a2ys.dev" className="link">
          a2ys
        </a>{" "}
        <span className="px-1 font-bold">/</span> <a href="/">Blog</a>
      </div>
      <div className="space-x-6">
        <a href="/posts" className="link text-xl">
          Posts
        </a>
        <a href="/authors" className="link text-xl">
          Authors
        </a>
      </div>
    </div>
  );
};

export default Navbar;
