import React from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";

export default function Navbar() {

  function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-lg border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className={`${styles.navlink} w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center`}>
              <span className="code-font font-bold text-lg text-white">&lt;/&gt;</span>
            </div>
            <span className="font-bold text-xl text-white">
              OOP<span className="text-cyan-400">C++</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <Link href="/" className={`${styles.navlink} text-gray-300 hover:text-white transition`}>
              Home
            </Link>

            <Link href="/whatis" className={`${styles.navlink} text-gray-300 hover:text-white transition`}>
              What is
            </Link>

            <Link href="/course" className={`${styles.navlink} text-gray-300 hover:text-white transition`}>
              Course
            </Link>

            <Link href="/mentor" className={`${styles.navlink} text-gray-300 hover:text-white transition`}>
              Mentor
            </Link>

            {/* LOGIN BUTTON */}
<Link
  href="/login_menu"
  className="ml-4 px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition">
  Login
</Link>

          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => toggleMobileMenu()}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-slate-800/95 border-t border-slate-700">
        <div className="px-4 py-4 space-y-3">

          <Link href="/" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg">
            Home
          </Link>

          <Link href="/whatis" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg">
            What is
          </Link>

          <Link href="/course" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg">
            Course
          </Link>

          <Link href="/mentor" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg">
            Mentor
          </Link>

          {/* LOGIN MOBILE */}
          <div className="border-t border-slate-700 pt-3"></div>
 <Link
    href="/login_menu"
    className="flex items-center justify-center w-full px-4 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition shadow-lg">
    Login
  </Link>

        </div>
      </div>

    </nav>
  );
}