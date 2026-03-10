"use client";

import Link from "next/link";

export default function LoginMenu() {
  return (
    <div className="font-poppins min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2a4a] to-[#071a2e] relative px-4">

      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-5 left-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-slate-200 hover:bg-white/20 transition"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </Link>

      <div className="w-full max-w-[420px] p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">

        {/* Logo */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/40">
          <span className="text-white text-xl sm:text-2xl font-semibold">
            &lt;/&gt;
          </span>
        </div>

        <h1 className="text-center text-white text-xl sm:text-2xl font-semibold">
          Selamat Datang!
        </h1>

        <p className="text-center text-xs sm:text-sm text-slate-300 mt-1 mb-6 sm:mb-7">
          Pilih tipe akun untuk melanjutkan
        </p>

        {/* Murid */}
        <Link href="/login_siswa">
          <div className="flex items-center justify-between p-3 sm:p-4 mb-3 sm:mb-4 rounded-2xl bg-white/10 border border-white/10 cursor-pointer transition hover:bg-white/20 hover:-translate-y-1">
            <div className="flex items-center gap-3 sm:gap-4">
              
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white">
                <i className="fa-solid fa-user-graduate"></i>
              </div>

              <div>
                <h3 className="text-white text-sm sm:text-base font-medium">
                  Murid
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Login dengan Email
                </p>
              </div>

            </div>

            <i className="fa-solid fa-chevron-right text-slate-300"></i>
          </div>
        </Link>

        {/* Guru */}
        <Link href="/login_guru">
          <div className="flex items-center justify-between p-3 sm:p-4 rounded-2xl bg-white/10 border border-white/10 cursor-pointer transition hover:bg-white/20 hover:-translate-y-1">
            <div className="flex items-center gap-3 sm:gap-4">

              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white">
                <i className="fa-solid fa-school"></i>
              </div>

              <div>
                <h3 className="text-white text-sm sm:text-base font-medium">
                  Guru
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Login dengan NIP
                </p>
              </div>

            </div>

            <i className="fa-solid fa-chevron-right text-slate-300"></i>
          </div>
        </Link>

      </div>
    </div>
  );
}