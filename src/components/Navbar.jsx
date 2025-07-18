import React from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Certifications", href: "#certifications" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/profile.png"
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-yellow-400"
          />
          <h1 className="text-lg md:text-xl font-bold tracking-wide">
            Yuvraj Singh
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative group font-medium text-white hover:text-yellow-400 transition duration-300"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Social Buttons */}
        <div className="hidden md:flex gap-3 ml-4">
          <a
            href="https://www.linkedin.com/in/yuvraj-singh-87422024b/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-yellow-300 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/yuvii42"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-gray-700 transition"
          >
            GitHub
          </a>

          <a
            href="https://leetcode.com/u/yuviirajput1/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-orange-400 transition"
          >
            LeetCode
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
