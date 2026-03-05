import React from 'react'
import Link from "next/link";

export default function Footer() {
  return (
    /* <!-- Footer --> */
        <footer className="bg-slate-950/80 border-t border-slate-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                    <span className="code-font font-bold text-lg text-white">
                      &lt;/&gt;
                    </span>
                  </div>
                  <span className="font-bold text-xl text-white">
                    OOP<span className="text-cyan-400">C++</span>
                  </span>
                </div>
                <p className="text-gray-300 text-sm">
                  Platform pembelajaran OOP C++ untuk siswa SMK jurusan Rekayasa
                  Perangkat Lunak.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>
                    <a
                      href="index.html"
                      className="hover:text-white transition"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="whatis.html"
                      className="hover:text-white transition"
                    >
                      What is OOP
                    </a>
                  </li>
                  <li>
                    <a
                      href="course.html"
                      className="hover:text-white transition"
                    >
                      Course
                    </a>
                  </li>
                  <li>
                    <a
                      href="mentor.html"
                      className="hover:text-white transition"
                    >
                      Mentor
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-white">Resources</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>
                    <span className="hover:text-white transition cursor-pointer">
                      Documentation
                    </span>
                  </li>
                  <li>
                    <span className="hover:text-white transition cursor-pointer">
                      Video Tutorial
                    </span>
                  </li>
                  <li>
                    <span className="hover:text-white transition cursor-pointer">
                      FAQ
                    </span>
                  </li>
                  <li>
                    <span className="hover:text-white transition cursor-pointer">
                      Support
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-white">Contact</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>📍 SMK Negeri 1 Indonesia</li>
                  <li>📧 rpl@smk.sch.id</li>
                  <li>📞 (021) 1234567</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-500 text-sm">
              © 2024 OOP C++ Learning Platform. All rights reserved.
            </div>
          </div>
        </footer>
  )
}
