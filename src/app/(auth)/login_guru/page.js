"use client"

import { useState } from "react"
import Link from "next/link"

export default function LoginGuru() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="font-poppins min-h-screen flex items-center justify-center bg-[#0b1f3a] px-4">

        {/* Back */}
      <div className="absolute top-6 left-20">
   <Link
    href="/login_menu"
    className="inline-flex items-center gap-2 text-white/80 hover:text-blue-300 transition text-md">
    <i className="fa-solid fa-angle-left "></i>
    <span>Login Menu</span>
    </Link>
    </div>

      <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">

        {/* Icon */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 rounded-2xl bg-blue-600 flex items-center justify-center text-xl sm:text-2xl text-white shadow-lg">
          <i className="fa-solid fa-school"></i>
        </div>

        {/* Title */}
        <h1 className="text-center text-white text-xl sm:text-2xl font-semibold">
          Login Guru
        </h1>

        <p className="text-center text-slate-300 text-sm mt-1 mb-6">
          Masuk dengan NIP kamu
        </p>

        {/* Login Indicator */}
        <div className="flex bg-black/10 rounded-xl p-1 mb-6">
          <button className="w-full py-3 rounded-xl text-white text-sm sm:text-base font-medium bg-blue-600 shadow-lg transition hover:bg-blue-500 text-center">
            Login Page
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">

          {/* NIP */}
          <div>
            <label className="text-sm text-slate-300">NIP</label>

            <input
              type="text"
              placeholder="Nomor Induk Pegawai"
              className="w-full mt-1 p-3 rounded-xl bg-transparent border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"/>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-slate-300">Password</label>

            <div className="relative mt-1">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full p-3 pr-12 rounded-xl bg-transparent border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"/>

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition text-lg">
                <i className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
              </button>

            </div>
          </div>

          {/* Login Button */}
          <button className="w-full py-3 mt-4 rounded-xl text-white font-medium bg-blue-600 shadow-lg transition-all duration-300 hover:bg-blue-500 hover:-translate-y-0.5">
            Login
          </button>

        </form>

      </div>

    </div>
  )
}