import {
    FaInstagram,
    FaWhatsapp,
    FaTelegramPlane,
    FaLinkedinIn,
  } from "react-icons/fa";
  
  export default function Footer() {
    return (
      <footer className="bg-[#121213]    py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
          
          {/* Left side */}
          <div className="flex items-center gap-4">
            <p>Copyright © 2025 Safionix. All rights reserved.</p>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
          </div>
  
          {/* Middle (Socials) */}
          <div className="flex gap-4 text-xl text-gray-500">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaWhatsapp />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaTelegramPlane />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
  
          {/* Right (Quote + Heart) */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-pink-500 animate-pulse">❤️</span>
            <span>
              <span className="text-purple-400 font-medium">Where passion</span>{" "}
              meets precision - Safionix
            </span>
          </div>
        </div>
      </footer>
    );
  }
  