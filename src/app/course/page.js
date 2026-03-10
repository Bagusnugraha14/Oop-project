"use client";
import { useState } from "react";
import styles from "../styles/course.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const modules = [
  {
    // Info modul course //
    id: 1,
    title: "Introduction to OOP",
    duration: "2 jam",
    description:
      "Memahami konsep dasar Object-Oriented Programming dan perbedaannya dengan paradigma lainnya.",
    topics: [
      "Apa itu OOP?",
      "Paradigma Pemrograman",
      "Class & Object",
      "Advantages of OOP",
    ],
    
    // code example course //
    code: `#include <iostream>
using namespace std;

class BankAccount {
  private:
    double saldo;
    
  public:
    BankAccount(double saldoAwal) {
      saldo = saldoAwal;
    }
    
    double getSaldo() {
      return saldo;
    }
    
    void setor(double jumlah) {
      if (jumlah > 0) {
        saldo += jumlah;
        cout << "Setor berhasil!" << endl;
      }
    }
    
    void tarik(double jumlah) {
      if (jumlah <= saldo) {
        saldo -= jumlah;
        cout << "Tarik tunai berhasil!" << endl;
      } else {
        cout << "Saldo tidak cukup!" << endl;
      }
    }
};

int main() {
  BankAccount akun(1000000);
  cout << "Saldo: Rp" << akun.getSaldo() << endl;
  akun.setor(500000);
  cout << "Saldo: Rp" << akun.getSaldo() << endl;
  return 0;
x`,

    // latihan modul course //
    exercises: [
      {
        title: "Membuat Class Sederhana",
        question:
          "Buat class 'Mobil' dengan atribut merk dan tahun, serta method tampilInfo().",
        starter: `#include <iostream>
using namespace std;

// Tulis class Mobil di sini`,
      },
    ],
  },

   {
    id: 2,
    title: "Encapsulation",
    duration: "2 jam",
    description:
      "Belajar bagaimana melindungi data dalam class menggunakan konsep encapsulation.",
    topics: [
      "Apa itu Encapsulation",
      "Access Modifier (public, private)",
      "Getter & Setter",
      "Keuntungan Encapsulation",
    ],
    code: `#include <iostream>
using namespace std;

class Mahasiswa {
private:
  int umur;

public:
  void setUmur(int u) {
    umur = u;
  }

  int getUmur() {
    return umur;
  }
};`,
    exercises: [
      {
        title: "Encapsulation Practice",
        question:
          "Buat class 'AkunBank' dengan atribut private saldo dan method setSaldo() serta getSaldo().",
        starter: `#include <iostream>
using namespace std;

// Buat class AkunBank di sini`,
      },
    ],
  },

  {
    id: 3,
    title: "Inheritance",
    duration: "2.5 jam",
    description:
      "Memahami konsep pewarisan class dimana class anak dapat mewarisi atribut dan method dari class induk.",
    topics: [
      "Apa itu Inheritance",
      "Base Class dan Derived Class",
      "Keyword : public inheritance",
      "Contoh penggunaan inheritance",
    ],
    code: `#include <iostream>
using namespace std;

class Hewan {
public:
  void suara() {
    cout << "Hewan bersuara" << endl;
  }
};

class Kucing : public Hewan {
public:
  void meong() {
    cout << "Meong..." << endl;
  }
};`,
    exercises: [
      {
        title: "Inheritance Practice",
        question:
          "Buat class 'Kendaraan' lalu turunkan class 'Mobil' dari class tersebut.",
        starter: `#include <iostream>
using namespace std;

// Buat class Kendaraan dan Mobil`,
      },
    ],
  },
];

export default function CoursePage() {
  const [activeModule, setActiveModule] = useState(1);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeExercise, setActiveExercise] = useState(null);
  const [codeValue, setCodeValue] = useState("");
  const [output, setOutput] = useState("");
  
  
const handleCopy = () => {
  if (navigator?.clipboard) {
    navigator.clipboard.writeText(module.code);
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = module.code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
  }, 2000);
};

  const [showToast, setShowToast] = useState(false);

  const module = modules.find((m) => m.id === activeModule);

  function openExercise(ex) {
    setActiveExercise(ex);
    setCodeValue(ex.starter);
    setOutput("");
    setModalOpen(true);
  }

  function runCode() {
    setOutput(
      "⚠️ C++ butuh backend compiler.\n\nKode kamu:\n\n" + codeValue
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* NAVBAR */}
       <Navbar />

         {/* MOBILE MENU BUTTON */}
  <div className="lg:hidden flex items-center p-4 border-b border-slate-700 bg-slate-900">
    <button
      onClick={() => setMobileOpen(true)}
      className="text-white text-xl">
      <i className="fa-solid fa-bars"></i>
    </button>
  </div>

{/* MOBILE MENU BUTTON */}
<div className="lg:hidden flex items-center p-4 border-b border-slate-700 bg-slate-900">
  <button
    onClick={() => setMobileOpen(true)}
    className="text-white text-xl">
    <i className="fa-solid fa-bars"></i>
  </button>

  <h2 className="ml-4 font-semibold">Course Modules</h2>
</div>

  {/* MOBILE SIDEBAR */}
  {mobileOpen && (
    <div className="fixed inset-0 z-[999] flex lg:hidden">

      <div
        onClick={() => setMobileOpen(false)}
        className="absolute inset-0 bg-black/60">
        </div>

      <aside className="relative w-72 bg-slate-900 border-r border-slate-700 p-6 overflow-y-auto">

        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-lg">Modul</h2>

          <button
            onClick={() => setMobileOpen(false)}
            className="text-xl">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* modules */}
        <div className="space-y-3">
          {modules.map((mod) => (
            <div
              key={mod.id}
              onClick={() => {
                setActiveModule(mod.id);
                setMobileOpen(false);
              }}
              className="p-4 rounded-xl bg-slate-800 border border-slate-700 cursor-pointer hover:border-blue-500">
              {mod.title}
            </div>
          ))}
        </div>

      </aside>

    </div>
  )}
      <div className="flex pt-16">

        {/* SIDEBAR */}
        <aside className="w-80 bg-slate-900/80 backdrop-blur-lg border-r border-slate-700 p-6 hidden lg:block">
  <h2 className="text-xl font-bold text-white mb-2">
    Modul Pembelajaran
  </h2>
  <p className="text-sm text-gray-400 mb-6">
    {modules.length} Modul Terstruktur
  </p>
  

  <div className="space-y-3">
    {modules.map((mod) => (
      <div
        key={mod.id}
        onClick={() => setActiveModule(mod.id)}
        className={`group relative p-4 rounded-xl cursor-pointer transition-all duration-300 
        ${activeModule === mod.id
            ? "bg-gradient-to-r from-blue-600/40 to-cyan-500/30 border border-blue-500 shadow-lg shadow-blue-900/30"
            : "bg-slate-800/50 border border-slate-700 hover:border-blue-500 hover:bg-slate-800"}`}>
        {/* Active indicator */}
        {activeModule === mod.id && (
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-l-xl"></div>
        )}

        <div className="flex items-center gap-4">

          {/* Number badge */}
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-all duration-300
            ${activeModule === mod.id
                ? "bg-blue-500 text-white"
                : "bg-slate-700 text-blue-300 group-hover:bg-blue-500 group-hover:text-white"}`}>
            {mod.id}
          </div>

          {/* Text */}
          <div className="flex-1">
            <h4 className="font-semibold text-white text-sm group-hover:text-blue-300 transition">
              {mod.title}
            </h4>
            <p className="text-xs text-gray-400">
              ⏱ {mod.duration}
            </p>
          </div>

        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
      </div>
    )
  )
}
  </div>
</aside>

        {/* CONTENT */}
<main className="flex-1 p-10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 min-h-screen">

  {/* TITLE */}
  <div className="mb-8">
    <h1 className="text-4xl font-bold text-white mb-3">
      {module.title}
    </h1>

    <p className="text-gray-400 max-w-2xl leading-relaxed">
      {module.description}
    </p>
  </div>


  {/* TOPICS */}
  <div className="bg-slate-800/60 backdrop-blur-lg border border-slate-700 p-6 rounded-2xl mb-8 shadow-lg">
    <h3 className="text-xl font-semibold text-blue-400 mb-4">
      📚 Topik Pembelajaran
    </h3>

    <ul className="grid md:grid-cols-2 gap-3">
      {module.topics.map((topic, i) => (
        <li
          key={i}
          className="bg-slate-800 border border-slate-700 px-4 py-3 rounded-lg hover:border-blue-500 hover:bg-slate-700 transition">
          {topic}
        </li>
      ))}
    </ul>
  </div>


  {/* CODE EXAMPLE */}
  <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden mb-10 shadow-xl">

    <div className="flex items-center justify-between bg-slate-800 px-5 py-3 border-b border-slate-700">
        
        <button
  onClick={handleCopy}
  className="text-xs bg-slate-700 px-3 py-1 rounded hover:bg-slate-600">
  Copy
</button>
        
      <h3 className="text-lg font-semibold text-blue-400">
         Contoh Kode
      </h3>

      <span className="text-xs text-gray-400">
        C++
      </span>
    </div>

    <SyntaxHighlighter
  language="cpp"
  style={oneDark}
  PreTag="div"
  customStyle={{
    margin: 0,
    padding: "24px",
    background: "transparent",
  }}
  codeTagProps={{
    style: {
      background: "transparent",
    }
  }}>
  {module.code}
</SyntaxHighlighter>
  </div>


  {/* EXERCISES */}
  {module.exercises.length > 0 && (
    <div>
      <h3 className="text-2xl font-bold text-white mb-6">
        ✏️ Latihan Coding
      </h3>

      <div className="grid md:grid-cols-2 gap-6">

        {module.exercises.map((ex, i) => (
          <div
            key={i}
            className="group bg-slate-800/60 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-900/30 transition duration-300">
            <h4 className="font-semibold text-lg text-white mb-2">
              {ex.title}
            </h4>

            <p className="text-gray-400 mb-5 text-sm leading-relaxed">
              {ex.question}
            </p>

            <button
              onClick={() => openExercise(ex)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:scale-105 transition transform">
              Mulai Latihan →
            </button>

          </div>
        ))}

      </div>
    </div>
  )}
</main>


</div>
{/* MODAL */}
{modalOpen && activeExercise && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50 animate-fadeIn">

    <div className="bg-slate-900 border border-slate-700 w-full max-w-4xl rounded-2xl p-6 shadow-2xl transform animate-scaleIn">

      <h3 className="text-2xl font-bold text-white mb-4">
        {activeExercise.title}
      </h3>

      <textarea
        value={codeValue}
        onChange={(e) => setCodeValue(e.target.value)}
        className="w-full h-64 p-4 rounded-xl bg-slate-800 text-blue-200 code-font border border-slate-700 focus:outline-none focus:border-blue-500 mb-5"/>
      <div className="flex gap-3 mb-5">

        <button
          onClick={runCode}
          className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-500 transition">
           Run
        </button>

        <button
          onClick={() => setCodeValue(activeExercise.starter)}
          className="px-5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition">
          Reset
        </button>

        <button
          onClick={() => setModalOpen(false)}
          className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-500 ml-auto transition">
          Close
        </button>

      </div>

      {output && (
        <pre className="bg-slate-800 p-4 rounded-xl text-green-300 text-sm overflow-x-auto border border-slate-700">
          {output}
        </pre>
      )}
      

    </div>

  </div>
)}
<Footer/>

{showToast && (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-toast">

    <div className="
      flex items-center gap-3
      px-5 py-3
      rounded-xl
      bg-slate-800
      border border-slate-700
      shadow-md
      text-sm
      text-gray-200">
      <span>Code copied</span>

    </div>

  </div>
)}

    </div>
  );
}