"use client";
import React from 'react'
import styles from "../styles/whatis.module.css";
import Navbar from "../components/Navbar";

export default function whatis() {
  return (
    <div className="h-full gradient-bg text-gray-900 overflow-auto">   
    <div className="min-h-full w-full">
      {/* <!-- Navigation --> */}
        <Navbar/>
      {/* <!-- Main Content --> */}
      <main className="pt-16">
        <section className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">
                Apa itu
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
                  >OOP</span
                >
                &amp;
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
                  >C++</span
                >?
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Memahami konsep fundamental yang menjadi dasar pengembangan
                software modern.
              </p>
            </div>
            {/* <!-- OOP Section --> */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full text-purple-400 text-sm mb-6"
                >
                  📚 Konsep Dasar
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Object-Oriented Programming (OOP)
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  OOP adalah paradigma pemrograman yang menggunakan konsep
                  "objek" untuk merepresentasikan data dan metode. Paradigma ini
                  membuat kode lebih terstruktur, mudah dipelihara, dan dapat
                  digunakan kembali.
                </p>
                <div className="space-y-4">
                  <div className={`${styles.glasscard} rounded-xl p-4 flex items-start gap-4`}>
                    <div
                      className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0"
                    >
                      <span className="text-blue-400 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Encapsulation</h4>
                      <p className="text-gray-300 text-sm">
                        Membungkus data dan method dalam satu unit (className)
                      </p>
                    </div>
                  </div>
                  <div className={`${styles.glasscard} rounded-xl p-4 flex items-start gap-4`}>
                    <div
                      className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0"
                    >
                      <span className="text-green-400 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Inheritance</h4>
                      <p className="text-gray-300 text-sm">
                        Mewariskan sifat dari className induk ke className anak
                      </p>
                    </div>
                  </div>
                  <div className={`${styles.glasscard} rounded-xl p-4 flex items-start gap-4`}>
                    <div
                      className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0"
                    >
                      <span className="text-yellow-400 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Polymorphism</h4>
                      <p className="text-gray-300 text-sm">
                        Satu interface untuk berbagai implementasi
                      </p>
                    </div>
                  </div>
                  <div className={`${styles.glasscard} rounded-xl p-4 flex items-start gap-4`}>
                    <div
                      className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0"
                    >
                      <span className="text-red-400 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Abstraction</h4>
                      <p className="text-gray-300 text-sm">
                        Menyembunyikan detail kompleks, menampilkan yang penting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.glasscard} rounded-2xl overflow-hidden`}>
                <div
                  className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700"
                >
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-gray-400 text-sm code-font"
                    >oop_example.cpp</span
                  >
                </div>
                <div className="p-6 code-font text-sm leading-relaxed">
                  <div className="text-gray-400">// Contoh 4 Pilar OOP</div>
                  <br />
                  <div>
                    <span className="text-blue-400">className</span>
                    <span className="text-yellow-300">Hewan</span>
                    <span className="text-white">{"{"} </span
                    ><span className="text-gray-400">// Abstraction</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">protected</span
                    ><span className="text-white">: </span
                    ><span className="text-gray-400">// Encapsulation</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-cyan-300">string</span>
                    <span className="text-white">nama;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">public</span
                    ><span className="text-white">:</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-blue-400">virtual</span>
                    <span className="text-cyan-300">void</span>
                    <span className="text-green-300">bersuara</span
                    ><span className="text-white">() = </span
                    ><span className="text-orange-300">0</span
                    ><span className="text-white">;</span>
                  </div>
                  <div>
                    <span className="text-white">{"}"};</span>
                  </div>
                  <br />
                  <div>
                    <span className="text-blue-400">className</span>
                    <span className="text-yellow-300">Kucing</span>
                    <span className="text-white">: </span>
                    <span className="text-blue-400">public</span> Hewan
                    <span className="text-white">{"}"}</span>
                    <span className="text-gray-400">// Inheritance</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">public</span
                    ><span className="text-white">:</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-cyan-300">void</span>
                    <span className="text-green-300">bersuara</span>
                    <span className="text-white">{"() {"} </span>
                    <span className="text-gray-400">// Polymorphism</span>
                  </div>
                  <div className="pl-12">
                    <span className="text-white">cout &lt;&lt;</span>
                    <span className="text-orange-300">"Meong!"</span
                    ><span className="text-white">;</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-white">{"}"}</span>
                  </div>
                  <div>
                    <span className="text-white">{"}"};</span>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className={`${styles.glasscard} rounded-2xl p-8`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center"
                    >
                      <span className="text-2xl font-bold code-font text-white"
                        >C++</span
                      >
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">C++ Language</h3>
                      <p className="text-gray-300">
                        Est. 1985 by Bjarne Stroustrup
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300"
                        >High Performance &amp; Efficiency</span
                      >
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300"
                        >Low-level Memory Manipulation</span
                      >
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300"
                        >Object-Oriented &amp; Procedural</span
                      >
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300"
                        >Standard Template Library (STL)</span
                      >
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300"
                        >Cross-platform Development</span
                      >
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-700">
                    <p className="text-sm text-gray-300">
                      Digunakan oleh: Game Development, System Software,
                      Embedded Systems, High-Performance Applications
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm mb-6"
                >
                  💻 Bahasa Pemrograman
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white">Mengapa C++?</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  C++ adalah bahasa pemrograman yang powerful dan versatile.
                  Dikembangkan oleh Bjarne Stroustrup sebagai ekstensi dari
                  bahasa C, C++ menambahkan fitur OOP sambil mempertahankan
                  efisiensi dan kontrol low-level.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  C++ menjadi pilihan utama untuk pengembangan game, sistem
                  operasi, browser, dan aplikasi yang membutuhkan performa
                  tinggi. Dengan mempelajari C++, kamu akan memiliki fondasi
                  kuat untuk memahami bahasa pemrograman lainnya.
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
                <div
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center"
                >
                  <span className="code-font font-bold text-lg text-white"
                    >&lt;/&gt;</span
                  >
                </div>
                <span className="font-bold text-xl text-white"
                  >OOP<span className="text-cyan-400">C++</span></span
                >
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
                  <a href="index.html" className="hover:text-white transition"
                    >Home</a
                  >
                </li>
                <li>
                  <a href="whatis.html" className="hover:text-white transition"
                    >What is OOP</a
                  >
                </li>
                <li>
                  <a href="course.html" className="hover:text-white transition"
                    >Course</a
                  >
                </li>
                <li>
                  <a href="mentor.html" className="hover:text-white transition"
                    >Mentor</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <span className="hover:text-white transition cursor-pointer"
                    >Documentation</span
                  >
                </li>
                <li>
                  <span className="hover:text-white transition cursor-pointer"
                    >Video Tutorial</span
                  >
                </li>
                <li>
                  <span className="hover:text-white transition cursor-pointer"
                    >FAQ</span
                  >
                </li>
                <li>
                  <span className="hover:text-white transition cursor-pointer"
                    >Support</span
                  >
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
          <div
            className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-500 text-sm"
          >
            © 2024 OOP C++ Learning Platform. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
    {/* <script>
      function toggleMobileMenu() {
        document.getElementById("mobile-menu").classNameList.toggle("hidden");
      }
    </script>
    <script>
      (function () {
        function c() {
          var b = a.contentDocument || a.contentWindow.document;
          if (b) {
            var d = b.createElement("script");
            d.innerHTML =
              "window.__CF$cv$params={r:'9c30119b855fc4b3',t:'MTc2OTI2MzM1MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName("head")[0].appendChild(d);
          }
        }
        if (document.body) {
          var a = document.createElement("iframe");
          a.height = 1;
          a.width = 1;
          a.style.position = "absolute";
          a.style.top = 0;
          a.style.left = 0;
          a.style.border = "none";
          a.style.visibility = "hidden";
          document.body.appendChild(a);
          if ("loading" !== document.readyState) c();
          else if (window.addEventListener)
            document.addEventListener("DOMContentLoaded", c);
          else {
            var e = document.onreadystatechange || function () {};
            document.onreadystatechange = function (b) {
              e(b);
              "loading" !== document.readyState &&
                ((document.onreadystatechange = e), c());
            };
          }
        }
      })();
    </script> */}
</div>
  )
}
