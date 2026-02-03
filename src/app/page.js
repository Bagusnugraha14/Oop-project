"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/main.module.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="h-full gradient-bg text-gray-900 overflow-auto">
      <div className="min-h-full w-full">
        {/* <!-- Navigation --> */}
        <Navbar />
        {/* <!-- Main Content --> */}
        <main className="pt-16">
          <section className="min-h-screen">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
              </div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${styles.slidein}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      SMK RPL Learning Platform
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
                      Master
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                        OOP
                      </span>
                      with
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                        C++
                      </span>
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                      Pelajari Object-Oriented Programming dari dasar hingga
                      mahir. Kurikulum terstruktur untuk siswa SMK jurusan
                      Rekayasa Perangkat Lunak.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="course.html"
                        className={`${styles.glowblue} px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-semibold text-lg text-white hover:opacity-90 transition transform hover:scale-105`}
                      >
                        Mulai Belajar →
                      </a>
                      <a
                        href="whatis.html"
                        className={`${styles.glasscard} px-8 py-4 rounded-xl font-semibold text-lg text-white hover:bg-white/10 transition`}
                      >
                        Pelajari Lebih
                      </a>
                    </div>
                    <div className="flex items-center gap-8 mt-12">
                      <div>
                        <div className="text-3xl font-bold text-white">
                          500+
                        </div>
                        <div className="text-gray-300 text-sm">Siswa Aktif</div>
                      </div>
                      <div className="w-px h-12 bg-gray-600"></div>
                      <div>
                        <div className="text-3xl font-bold text-white">12</div>
                        <div className="text-gray-300 text-sm">
                          Modul Lengkap
                        </div>
                      </div>
                      <div className="w-px h-12 bg-gray-600"></div>
                      <div>
                        <div className="text-3xl font-bold text-white">50+</div>
                        <div className="text-gray-300 text-sm">Project</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.floatanimation}>
                    <div
                      className={`${styles.codeblock} rounded-2xl overflow-hidden shadow-2xl`}
                    >
                      <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-4 text-gray-400 text-sm code-font">
                          main.cpp
                        </span>
                      </div>
                      <div className="p-6 code-font text-sm leading-relaxed">
                        <div>
                          <span className="text-purple-400">#include</span>
                          <span className="text-green-400">
                            &lt;iostream&gt;
                          </span>
                        </div>
                        <div className="text-gray-400">
                          using namespace stds;
                        </div>
                        <br />
                        <div>
                          <span className="text-blue-400">class</span>
                          <span className="text-yellow-300">Mahasiswa</span>
                          <span className="text-white"></span>
                        </div>
                        <div className="pl-4">
                          <span className="text-blue-400">private</span>
                          <span className="text-white">:</span>
                        </div>
                        <div className="pl-8">
                          <span className="text-cyan-300">string</span>
                          <span className="text-white">nama;</span>
                        </div>
                        <div className="pl-8">
                          <span className="text-cyan-300">int</span>
                          <span className="text-white">nilai;</span>
                        </div>
                        <div className="pl-4">
                          <span className="text-blue-400">public</span>
                          <span className="text-white">:</span>
                        </div>
                        <div className="pl-8">
                          <span className="text-yellow-300">Mahasiswa</span>
                          <span className="text-white"></span>
                          <span className="text-cyan-300">string</span>n
                          <span className="text-white"></span>
                        </div>
                        <div className="pl-12">
                          <span className="text-white">nama = n;</span>
                        </div>
                        <div className="pl-8">
                          <span className="text-white"></span>
                        </div>
                        <div className="pl-8">
                          <span className="text-cyan-300">void</span>
                          <span className="text-green-300">belajar</span>
                          <span className="text-white"></span>
                        </div>
                        <div className="pl-12">
                          <span className="text-white">cout &lt;&lt;</span>
                          <span className="text-orange-300">
                            "Sedang belajar OOP!"
                          </span>
                          <span className="text-white">;</span>
                        </div>
                        <div className="pl-8">
                          <span className="text-white"></span>
                        </div>
                        <div>
                          <span className="text-white">;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Mengapa Belajar OOP C++ di Sini?
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Platform pembelajaran yang dirancang khusus untuk siswa SMK
                  RPL dengan kurikulum terstruktur dan mentor berpengalaman.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div
                  className={`${styles.glasscard} rounded-2xl p-8 hover:shadow-lg transition group`}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Kurikulum Terstruktur
                  </h3>
                  <p className="text-gray-300">
                    12 modul pembelajaran dari dasar hingga advanced sesuai
                    standar industri.
                  </p>
                </div>
                <div
                  className={`${styles.glasscard} rounded-2xl p-8 hover:shadow-lg transition group`}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Praktik Langsung
                  </h3>
                  <p className="text-gray-300">
                    Lebih dari 50 project dan latihan coding interaktif untuk
                    mengasah skill.
                  </p>
                </div>
                <div
                  className={`${styles.glasscard} rounded-2xl p-8 hover:shadow-lg transition group`}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Mentor Expert
                  </h3>
                  <p className="text-gray-300">
                    Dibimbing langsung oleh guru berpengalaman di bidang
                    pemrograman.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* <!-- Footer --> */}
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
      </div>
    </div>
  );
}
