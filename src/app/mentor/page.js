"use client";
import { useState } from "react";
import styles from "../styles/mentor.module.css";


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MentorPage() {

const mentors = [
{
id: 1,
name: "Pak Budi Santoso, S.Kom., M.T.",
title: "Senior Programming Instructor",
experience: "15 tahun",
image: "/images/arda.jpg",
description: "Guru senior dengan pengalaman 15 tahun mengajar pemrograman.",
achievements: [
"Coach Olimpiade Programming Nasional",
"ICPC Judge",
"Microsoft Certified Trainer"
],
expertise: ["C++","Java","Python","Design Patterns"]
},

{
id: 2,
name: "Ibu Siti Nurhaliza, S.T., M.Kom.",
title: "Algorithm & Data Structure Expert",
experience: "12 tahun",
image: "/images/arda.jpg",
description: "Expert dalam algoritma dan struktur data.",
achievements: [
"Coach Olimpiade Programming Nasional",
"ICPC Judge",
"Microsoft Certified Trainer"
],
expertise: ["C++","Algorithms","Data Structures"]
},

{
id: 3,
name: "Pak Ahmad Rizki, S.Kom.",
title: "Game Development Instructor",
experience: "10 tahun",
image: "/images/arda.jpg",
description: "Mengajarkan C++ untuk game development.",
achievements: [
"Coach Olimpiade Programming Nasional",
"ICPC Judge",
"Microsoft Certified Trainer"
],
expertise: ["C++","Unity","Unreal Engine"]
}
];

const [selectedMentor,setSelectedMentor] = useState(null);
const [showModal,setShowModal] = useState(false);

function openMentorModal(mentor){
setSelectedMentor(mentor);
setShowModal(true);
}

function closeMentorModal(){
setShowModal(false);
}

return (



<main className="min-h-screen bg-slate-900 text-white pt-20">

        <Navbar/>

<div className="max-w-7xl mx-auto px-6">

{/* TITLE */}

<div className="text-center mb-16">

<h1 className="text-5xl font-bold mb-6">

Meet Your
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
{" "}Expert Mentors
</span>

</h1>

<p className="text-gray-400 max-w-2xl mx-auto">
Belajar langsung dari guru berpengalaman yang siap membimbing perjalanan programming Anda.
</p>

</div>

{/* MENTOR CARDS */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

{mentors.map((mentor)=>(
<div
key={mentor.id}
onClick={()=>openMentorModal(mentor)}
className="bg-slate-800 p-6 rounded-xl cursor-pointer hover:scale-105 transition">

<div className="text-center">

<div className="flex justify-center mb-4">

<img
src={mentor.image}
alt={mentor.name}
className="w-20 h-20 rounded-full object-cover border-2 border-cyan-400"/>

</div>

<h3 className="text-lg font-bold">
{mentor.name}
</h3>

<p className="text-cyan-400 text-sm">
{mentor.title}
</p>

<p className="text-gray-400 text-xs mt-2 flex items-center justify-center gap-2">
  <i className="fa-solid fa-briefcase"></i>
  {mentor.experience} pengalaman
</p>
</div>

</div>
))}

</div>

{/* ======================= */}
{/* JADWAL KONSULTASI */}
{/* ======================= */}

<div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-10 mb-12 ">

<h2 className="text-3xl font-bold text-center mb-10">
Jadwal Konsultasi
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

<div className="bg-slate-800 rounded-xl p-6">
<i className="fas fa-clock text-3xl mb-3"></i>
<h4 className="font-semibold">Senin – Kamis</h4>
<p className="text-gray-400 text-sm">14:00 - 16:00 WIB</p>
</div>

<div className="bg-slate-800 rounded-xl p-6">
<i className="fas fa-calendar-day text-3xl  mb-3"></i>
<h4 className="font-semibold">Jumat</h4>
<p className="text-gray-400 text-sm">13:00 - 15:00 WIB</p>
</div>

<div className="bg-slate-800 rounded-xl p-6">
<i className="fas fa-comments text-3xl  mb-3"></i>
<h4 className="font-semibold">Online Chat</h4>
<p className="text-gray-400 text-sm">24/7 via Discord</p>
</div>

<div className="bg-slate-800 rounded-xl p-6">
<i className="fas fa-envelope text-3xl  mb-3"></i>
<h4 className="font-semibold">Email Support</h4>
<p className="text-gray-400 text-sm">Response &lt; 24 jam</p>
</div>

</div>

</div>

{/* ======================= */}
{/* HUBUNGI MENTOR */}
{/* ======================= */}

<div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-10 mb-10">

<h2 className="text-3xl font-bold text-center mb-3 flex items-center justify-center gap-3">

<i className="fas fa-paper-plane text-cyan-400"></i>

Hubungi Mentor

</h2>

<p className="text-center text-gray-400 mb-10">
Punya pertanyaan? Butuh bimbingan khusus? Hubungi kami!
</p>

<form className="max-w-3xl mx-auto space-y-6">

<div className="grid md:grid-cols-2 gap-6">

<div>
<label className="text-sm text-gray-300">Nama Lengkap</label>
<input
type="text"
className="w-full mt-2 p-3 bg-slate-800 border border-slate-700 rounded-lg"/>
</div>

<div>
<label className="text-sm text-gray-300">Email</label>
<input
type="email"
className="w-full mt-2 p-3 bg-slate-800 border border-slate-700 rounded-lg"/>
</div>

</div>

<div>

<label className="text-sm text-gray-300">
Pilih Mentor
</label>

<select className="w-full mt-2 p-3 bg-slate-800 border border-slate-700 rounded-lg">

<option> Pilih Mentor </option>

{mentors.map((mentor)=>(
<option key={mentor.id}>
{mentor.name}
</option>
))}

</select>

</div>

<div>

<label className="text-sm text-gray-300">
Pesan
</label>

<textarea
rows="5"
placeholder="Tuliskan pertanyaan atau topik yang ingin didiskusikan..."
className="w-full mt-2 p-3 bg-slate-800 border border-slate-700 rounded-lg"/>

</div>

<button
className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition"
>
Kirim Pesan →
</button>

</form>

</div>


</div>

{/* MODAL */}

{showModal && selectedMentor && (

<div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">

<div className="bg-slate-800 p-8 rounded-xl max-w-lg w-full">

<div className="text-center mb-6">

<div className="flex justify-center mb-4">

<img
src={selectedMentor.image}
alt={selectedMentor.name}
className="w-28 h-28 rounded-full object-cover border-4 border-cyan-400 shadow-lg"/>

</div>

<h2 className="text-2xl font-bold">
{selectedMentor.name}
</h2>

<p className="text-cyan-400">
{selectedMentor.title}
</p>

</div>

{/* Tentang Guru */}

<div className="bg-slate-800/70 border border-slate-700 rounded-xl p-5 mb-6">

<h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center gap-2">
 Tentang Guru
</h3>

<p className="text-gray-300 leading-relaxed text-sm">
{selectedMentor.description}
</p>

</div>


{/* Prestasi Guru */}

<div className="bg-slate-800/70 border border-slate-700 rounded-xl p-5 mb-6">

<h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center gap-2">
 Prestasi Guru
</h3>

<ul className="space-y-3">

{selectedMentor.achievements.map((item,index)=>(
<li
key={index}
className="flex items-start gap-3 text-gray-300 text-sm">

<span className="text-yellow-400 text-lg">★</span>

<span>{item}</span>

</li>
))}

</ul>

</div>

{/* Keahlian Guru */}

<div className="bg-slate-800/70 border border-slate-700 rounded-xl p-5 mb-6">

<h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center gap-2">
 Keahlian Guru
</h3>

<div className="flex flex-wrap gap-2">

{selectedMentor.expertise.map((skill,i)=>(
<span
key={i}
className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-xl text-sm">
{skill}
</span>
))}

</div>

</div>

<button
onClick={closeMentorModal}
className="w-full bg-blue-600 py-3 rounded-lg">
Close
</button>

</div>

</div>

)}

<Footer/>

</main>

);
}