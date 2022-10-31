import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image src="/logo.png" width={40} height={35} />
          <span className="font-bold text-primary ml-2">Modern Blog</span>
        </div>
      </Link>
      <ul className="flex items-center">
        <li className="navlinks">
          <a href="#">Products</a>
        </li>
        <li className="navlinks">
          <a href="#">Pricing</a>
        </li>
        <li className="navlinks">
          <a href="#">Docs</a>
        </li>
        <li className="navlinks">
          <a href="#">Company</a>
        </li>
      </ul>
      <ul className="flex items-center">
        <li className="navlinks">
          <a href="#" className="hover:text-gray-400">
            Log In
          </a>
        </li>
        <li className="navlinks">
          <a
            href="#"
            className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all"
          >
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
