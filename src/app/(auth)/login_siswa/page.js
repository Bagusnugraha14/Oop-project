"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"

export default function LoginMurid() {

  const [showSuccess, setShowSuccess] = useState(false)

  const [activeTab, setActiveTab] = useState("login");
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [showPass3, setShowPass3] = useState(false);

  const router = useRouter()

  const handleLogin = (e) => {
  e.preventDefault()

  const password = e.target.password.value

  if (!password) return

  router.push("/form_identitas")
}

const handleRegister = (e) => {
  e.preventDefault()

  // tampilkan notifikasi
  setShowSuccess(true)

  // pindah ke tab login
  setActiveTab("login")

  // hilangkan notifikasi setelah 3 detik
  setTimeout(() => {
    setShowSuccess(false)
  }, 3000)
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2a4a] to-[#071a2e] px-4">

        {/* Back */}
      <div className="absolute top-6 left-20">
   <Link href="/login_menu"
    className="inline-flex items-center gap-2 text-white/80 hover:text-blue-300 transition text-md">
    <i className="fa-solid fa-angle-left "></i>
    <span>Login Menu</span>
    </Link>
    </div>

      <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">

 
        {/* Icon */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 rounded-2xl bg-blue-500 flex items-center justify-center text-xl sm:text-2xl text-white shadow-lg">
          <i className="fa-solid fa-user-graduate"></i>
        </div>

        <h1 className="text-center text-white text-xl sm:text-2xl font-semibold">
          {activeTab === "login" ? "Login Murid" : "Register Murid"}
        </h1>

        <p className="text-center text-slate-300 text-sm mt-1 mb-6">
          {activeTab === "login"
            ? "Masuk dengan akun email kamu"
            : "Buat akun baru untuk melanjutkan"}
        </p>

        

        {/* Tabs */}
        <div className="relative flex bg-black/20 rounded-xl p-1 mb-6">

          <div
            className={`absolute top-1 left-1 w-1/2 h-[calc(100%-8px)] bg-blue-500 rounded-lg transition-all duration-300 ${
              activeTab === "register" ? "translate-x-full" : ""
            }`}/>

          <button
            onClick={() => setActiveTab("login")}
            className={`relative w-1/2 py-2 text-sm sm:text-base z-10 ${
              activeTab === "login" ? "text-white" : "text-slate-400"
            }`}>
            Login
          </button>

          <button
            onClick={() => setActiveTab("register")}
            className={`relative w-1/2 py-2 text-sm sm:text-base z-10 ${
              activeTab === "register" ? "text-white" : "text-slate-400"
            }`}>
            Register
          </button>
        </div>

        {/* LOGIN */}
        {activeTab === "login" && (
          <form onSubmit={handleLogin} className="space-y-4">

            <div>
              <label className="text-sm text-slate-300">Email</label>

              <input
                name="email"
                type="email"
                placeholder="email@example.com"
                required
                className="w-full mt-1 p-3 rounded-xl bg-transparent border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"/>
            </div>

            <div>
              <label className="text-sm text-slate-300">Password</label>

              <div className="relative mt-1">

                <input
                  name="password"
                  type={showPass1 ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="w-full p-3 pr-12 rounded-xl bg-transparent border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"/>

                <button
                  type="button"
                  onClick={() => setShowPass1(!showPass1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition text-lg">
                  <i className={`fa-regular ${showPass1 ? "fa-eye" : "fa-eye-slash"}`}></i>
                </button>

              </div>
            </div>

            <button type="submit" className="w-full py-3 mt-4 rounded-xl text-white font-medium bg-blue-500 hover:bg-blue-600 transition shadow-lg">
            Login
            </button>

            {showSuccess && (
  <div className="mt-4 mb-2 p-3 rounded-xl bg-green-500/20 border border-green-400 text-green-300 text-sm text-center">
    Register berhasil! Silakan login.
  </div>
)}

          </form>
        )}

        {/* REGISTER */}
        {activeTab === "register" && (
          <form onSubmit={handleRegister} className="space-y-4">

            <div>
              <label className="text-sm text-slate-300">NIS</label>

              <input
                type="text"
                placeholder="Masukkan NIS"
                required
                className="w-full mt-1 p-3 rounded-xl bg-transparent border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"/>
            </div>

            <div>
              <label className="text-sm text-slate-300">Nama</label>

              <input
                type="text"
                placeholder="Nama lengkap"
                required
                className="w-full mt-1 p-3 rounded-xl bg-transparent border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"/>
            </div>

            <div>
              <label className="text-sm text-slate-300">Email</label>

              <input
                type="email"
                placeholder="email@example.com"
                className="w-full mt-1 p-3 rounded-xl bg-transparent border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"/>
            </div>

            <div>
              <label className="text-sm text-slate-300">Password</label>

              <div className="relative mt-1">

                <input
                  type={showPass2 ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="w-full p-3 pr-12 rounded-xl bg-transparent border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"/>

                <button
                  type="button"
                  onClick={() => setShowPass2(!showPass2)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition text-lg">
                  <i className={`fa-regular ${showPass2 ? "fa-eye" : "fa-eye-slash"}`}></i>
                </button>

              </div>
            </div>

            <div>
              <label className="text-sm text-slate-300">Confirm Password</label>

              <div className="relative mt-1">

                <input
                  type={showPass3 ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="w-full p-3 pr-12 rounded-xl bg-transparent border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"/>

                <button
                  type="button"
                  onClick={() => setShowPass3(!showPass3)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition text-lg">
                  <i className={`fa-regular ${showPass3 ? "fa-eye" : "fa-eye-slash"}`}></i>
                </button>

              </div>
            </div>

            <button type="submit" className="w-full py-3 mt-4 rounded-xl text-white font-medium bg-blue-500 hover:bg-blue-600 transition shadow-lg">
            Register
            </button>


          </form>
        )}

      </div>
    </div>
  );
}