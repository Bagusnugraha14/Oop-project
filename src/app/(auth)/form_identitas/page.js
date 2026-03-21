"use client";

import { useState } from "react";

export default function FormIndentitas() {
  const [form, setForm] = useState({
    nis: "",
    nama: "",
    jenisKelamin: "",
    tempatLahir: "",
    tanggalLahir: "",
    noHp: "",
    alamat: "",
    kelas: "",
    jurusan: "",
    namaOrtu: "",
    hpOrtu: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1c3a] via-[#0d2346] to-[#0b1c3a] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Lengkapi <span className="text-cyan-400">Data Diri</span>
          </h1>
          <p className="text-gray-300 mt-2">
            Masukkan informasi lengkap untuk melanjutkan ke dashboard pembelajaran.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Data Pribadi */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Data Pribadi</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="nis"
                placeholder="NIS"
                value={form.nis}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-white/50"/>

              <input
                type="text"
                name="nama"
                placeholder="Nama Lengkap"
                value={form.nama}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-white/50"/>

              <select
                name="jenisKelamin"
                value={form.jenisKelamin}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-white/50">
                <option value="" className="text-black">Jenis Kelamin</option>
                <option value="L" className="text-black">Laki-laki</option>
                <option value="P" className="text-black">Perempuan</option>
              </select>

              <input
                type="text"
                name="tempatLahir"
                placeholder="Tempat Lahir"
                value={form.tempatLahir}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-white/50"/>

              <input
                type="date"
                name="tanggalLahir"
                value={form.tanggalLahir}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-white/50"/>
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Kontak</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="noHp"
                placeholder="No HP"
                value={form.noHp}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-white/50"/>

              <input
                type="text"
                name="alamat"
                placeholder="Alamat"
                value={form.alamat}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-white/50"/>

              <div className="flex flex-col gap-1">
              <div className="flex justify-between text-sm">
              <span className="text-gray-400">Opsional</span>
              </div>

              <input
              type="text"
              name="noHp"
              placeholder="Instagram"
              value={form.noHp}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-white/50"/>
              </div>
            </div>
          </div>

          {/* Data Sekolah */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Data Sekolah</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <select
                name="kelas"
                value={form.kelas}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-white/50">
                <option value="" className="text-black">Kelas</option>
                <option value="X" className="text-black">X</option>
                <option value="XI" className="text-black">XI</option>
                <option value="XII" className="text-black">XII</option>
              </select>

              <select
                name="jurusan"
                value={form.jurusan}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-white/50">
                <option value="" className="text-black">Jurusan</option>
                <option value="IPA" className="text-black">Rekayasa Perangkat Lunak </option>
              </select>
            </div>
          </div>

         

          {/* Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold hover:opacity-90 transition">
              Simpan Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
