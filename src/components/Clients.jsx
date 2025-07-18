import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";

const Clients = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0b1f17] via-[#0f2a20] to-black text-white px-6 py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Yuvraj Singh</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Passionate B.Tech CSE student from <span className="text-yellow-300">Parul University</span>,
            building full-stack web solutions with a love for tech, growth, and collaboration.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-yellow-400">Quick Links</h2>
          <ul className="space-y-3 text-sm">
            {["About", "Projects", "Certifications", "Testimonials", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-300 hover:text-yellow-300 transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-yellow-400">Connect</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              <a href="mailto:yuvviirajput@gmail.com" className="hover:text-yellow-300 transition">
                yuvviirajput@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91-6284119117</span>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-yellow-400" />
              <a
                href="https://www.linkedin.com/in/yuvraj-singh-87422024b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaGithub className="text-yellow-400" />
              <a
                href="https://github.com/yuvii42"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-3">
              <SlSocialTwitter className="text-yellow-400" />
              <a
                href="https://x.com/Yuvvirajput45"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-white font-medium">Yuvraj Singh</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Clients;
