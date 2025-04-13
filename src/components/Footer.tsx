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
    <footer className="bg-[#121213] py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
        <div className="flex items-center gap-2 text-sm order-1 md:order-3">
          <Image
            src={"/assets/heart.png"}
            width={16}
            height={16}
            alt="heart"
            className="w-4 h-4 md:w-5 md:h-5"
          />
          <span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-medium">
              Where passion
            </span>{" "}
            meets precision - Safionix
          </span>
        </div>

        <div className="flex items-center gap-4 order-2 md:order-1">
          <Link href="/terms" className="hover:text-white transition">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
        </div>

        <div className="flex gap-4 text-lg md:text-xl text-gray-500 order-3 md:order-2">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaWhatsapp />
          </Link>
          <Link
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaTelegramPlane />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedinIn />
          </Link>
        </div>

        <div className="order-4 md:order-1">
          <p>Copyright © 2025 Safionix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}