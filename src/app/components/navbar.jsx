import React from 'react'
import styles from "../styles/navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
          <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-lg border-b border-slate-700" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="index.html" className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <span className="code-font font-bold text-lg text-white"
                  >&lt;/&gt;</span>
              </div>
              <span className="font-bold text-xl text-white"
                >OOP<span className="text-cyan-400">C++</span></span>
            </a>
            <div className="hidden md:flex items-center gap-8">
      <Link
        href="/"
        className={`${styles.navlink} text-gray-300 hover:text-white transition`}>
        Home
      </Link>

      <Link
        href="/whatis"
        className={`${styles.navlink} text-gray-300 hover:text-white transition`}>
        What is
      </Link>
              <a
                href="course.html"
                className={`${styles.navlink} text-gray-300 hover:text-white transition`}
                >Course</a>
              <a
                href="mentor.html"
                className={`${styles.navlink} text-gray-300 hover:text-white transition`}
                >Mentor</a>
            </div>
            <button className="md:hidden text-white" onClick={() => toggleMobileMenu()}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
        <div
          id="mobile-menu"
          className="hidden md:hidden bg-slate-800/95 border-t border-slate-700">
          <div className="px-4 py-4 space-y-3">
            <a
              href="index.html"
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg"
              >Home</a>
            <a
              href="whatis.html"
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg"
              >What is</a>
            <a
              href="course.html"
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg"
              >Course</a>
            <a
              href="mentor.html"
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg"
              >Mentor</a>
          </div>
        </div>
      </nav>
  )
}
