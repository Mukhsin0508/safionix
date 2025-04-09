import Image from "next/image";
import Link from "next/link";
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
          
          <div className="flex items-center gap-4">
            <p>Copyright © 2025 Safionix. All rights reserved.</p>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          </div>
  
          <div className="flex gap-4 text-xl text-gray-500">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaInstagram />
            </Link>
            <Link href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaWhatsapp />
            </Link>
            <Link href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaTelegramPlane />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaLinkedinIn />
            </Link>
          </div>
  
          <div className="flex items-center gap-2 text-sm">
            <Image src={'/assets/heart.png'} width={20} height={20} alt="heart"></Image>
            <span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-medium">
  Where passion 
</span>

              meets precision - Safionix
            </span>
          </div>
        </div>
      </footer>
    );
  }
  