"use client";

import React, { useState } from 'react';
import { 
  Github, Linkedin, Mail, Code, PenTool, Trophy, 
  BookOpen, Users, GraduationCap, Briefcase, 
  ArrowUpRight, Star, ScrollText, Globe, Palette, ImageIcon 
} from 'lucide-react';

const Portfolio = () => {
  const [lang, setLang] = useState<'id' | 'en'>('id');

  // Database konten
  const content = {
    id: {
      nav: {
        hire: "Rekrut Saya",
        contact: "Hubungi Saya"
      },
      hero: {
        badge: "IPK 3.98 • Terbuka untuk Proyek",
        
        // --- HEADLINE PURE ENGINEERING (ID) ---
        title1: "Software Engineer.", 
        title2: "Building Scalable Systems.",
        
        desc: <>Saya <strong>Rhegysa</strong>. Mahasiswi Teknik Informatika Semester 5 penerima Beasiswa Penuh di STIKOM PGRI Banyuwangi. Fokus membangun sistem web berskala industri (SaaS) dengan arsitektur yang efisien menggunakan <strong>Next.js, Node.js, dan MySQL</strong>.</>,
        
        btn_projects: "Lihat Sistem",
        btn_pubs: "Publikasi (3)"
      },
      stats: {
        gpa_label: "IPK Terakhir (Sem 1-4)",
        comp_title: "Sorotan Kompetisi",
        comp_1: <><strong>Top 10 Finalis Internasional</strong> Business Plan (Proxocoris 2025)</>,
        comp_2: <><strong>Juara Harapan 2 Nasional</strong> Business Plan (Corisindo 2024)</>,
        grad_title: "Lulusan Terbaik Jurusan Desain Komunikasi Visual",
        grad_desc: "SMK Al-Munawwir IIBS Singojuruh (2023)"
      },
      section_titles: {
        edu: "Pendidikan",
        exp: "Pengalaman Teknis",
        projects: "Sistem & Proyek",
        projects_sub: "Implementasi arsitektur perangkat lunak untuk solusi nyata.",
        research: "Riset & Publikasi",
        research_sub: "Kontribusi ilmiah dalam Transformasi Digital dan Audit Sistem (2025).",
        gallery: "Arsip Akademik", 
        gallery_sub: "Dokumentasi hasil lomba.",
        comp_detail: "Detail Kompetisi",
        collab: "Mari Berkolaborasi."
      },
      edu_exp: {
        uni_title: "S1 Teknik Informatika",
        uni_desc: "Penerima Beasiswa Penuh (BERBAGI). IPK 3.98. Aktif dalam riset dosen dan pengembangan sistem kampus.",
        smk_title: "SMK Al-Munawwir IIBS Singojuruh", 
        smk_desc: "Lulusan Terbaik Peringkat 1 Jurusan Desain Komunikasi Visual. Ketua OSIS (2021-2022).",
        teacher_title: "Guru Ekstrakurikuler Programming",
        teacher_desc: "Mengajar algoritma dasar, logika pemrograman, dan struktur data kepada siswa.",
        dev_title: "Fullstack Developer (Ketua Tim)",
        dev_desc: "Memimpin tim engineer dalam pengembangan sistem akreditasi TPM Kampus."
      },
      projects: {
        p1_tag: "Commercial SaaS",
        p1_title: "Sistem Sekolah Terpadu (SaaS)",
        p1_desc: <>Platform manajemen sekolah berbasis cloud yang dirancang untuk skalabilitas tinggi. Mencakup modul <strong>PPDB, Keuangan, CBT, dan Absensi</strong>. Menggunakan arsitektur database relasional yang kompleks untuk sinkronisasi Dapodik.</>,
        p2_tag: "Team Lead",
        p2_title: "Sistem Informasi Penjaminan Mutu",
        p2_desc: "Sistem manajemen dokumen terpusat untuk Unit TPM. Fokus pada keamanan data, role-based access control (RBAC), dan efisiensi query database untuk pelaporan akreditasi."
      },
      research: {
        author_1: "Penulis Pertama",
        author_3: "Penulis Ketiga",
        author_4: "Penulis Keempat",
        desc_1: "Publikasi Jurnal Ilmiah (2025). Penelitian ini dilakukan untuk mengevaluasi tantangan dan peluang transformasi digital pada PT Lokabyte Digital Innovations menggunakan pendekatan RACE Planning Framework yang mencakup tahapan Reach, Act, Convert, dan Engage. Penelitian menggunakan metode deskriptif kualitatif dengan teknik observasi kanal digital, wawancara informal, serta analisis S.W.O.T sebagai dasar pemetaan kondisi perusahaan.",
        desc_2: "Publikasi Jurnal Ilmiah (2025). Evaluasi pengendalian batasan sistem informasi manajemen keuangan di PT Lokabyte Digital Innovations perlu dilakukan untuk meminimalisir terjadinya risiko. Pendekatan dilakukan secara langsung pada sistem informasi menggunakan audit through computer dengan berfokus pada tahapan pengendalian batasan (boundary control).",
        desc_3: "Publikasi Jurnal Ilmiah (2025). Penelitian ini bertujuan merancang  strategi  pengadaan cloud  storagebagi  PT  Lokabyte  Digital  Innovations dengan menggunakan pendekatan analisis SWOT. Metode yang digunakan bersifat deskriptif kualitatif, dengan teknik pengumpulan data berupa observasi sistem yang sedang  berjalan,  wawancara  internal,  serta  studi  literatur  pendukung.",
        link_1: "https://ojs.stmikpontianak.ac.id/sisfotenika/article/view/556/164", // Ganti dengan link Google Scholar/Jurnal asli
        link_2: "https://ojs.stmikpontianak.ac.id/sisfotenika/article/view/535/158",
        link_3: "https://ojs.stikombanyuwangi.ac.id/index.php/jikom/article/view/245/150"
      },
      comp: {
        c1_title: "TRANSFORMASI DIGITAL UMKM MELALUI AUTO-INVEST DAN DIGITAL MARKETING BERBASIS GOOGLE ADS DAN META ADS (2025)",
        c1_desc: "\"LokaVest merupakan platform start-up yang menggabungkan marketplace  dengan sistem auto-invest untuk membantu UMKM meningkatkan stabilitas  keuangan dan jangkauan pasar. Platform ini mengintegrasikan investasi otomatis  dengan pemasaran digital menggunakan Meta Ads dan Google Ads sehingga  memberikan solusi bagi UMKM agar lebih kompetitif di era digital.\"",
        c2_title: "Pemanfaatan Sampah Plastik dan Social Media Advertising untuk Mengoptimalkan Produksi dan Distribusi Paving Blok Plastik Grade A (2024)",
        c2_desc: "\"Produk utama adalah paving block ramah lingkungan dari plastik daur ulang, tersedia dalam berbagai warna dan lebih berkualitas dibandingkan paving block konvensional. Dengan harga terjangkau, produk ini mendukung pelestarian lingkungan dan mengurangi sampah plastik. Memenuhi standar SNI 03-0691-1996, produk ini dirancang untuk berbagai proyek infrastruktur.\"",
        link_c1: "/proposal-lokavest.pdf", 
        link_c2: "/proposal-paving.pdf"
      },
      footer: {
        sub: "Terbuka untuk posisi Software Engineer Intern atau Freelance.",
        email_cta: "Kirim Email"
      }
    },
    en: {
      nav: {
        hire: "Hire Me",
        contact: "Contact Me"
      },
      hero: {
        badge: "GPA 3.98 • Open for Projects",
        
        // --- HEADLINE PURE ENGINEERING (EN) ---
        title1: "Software Engineer.",
        title2: "Building Scalable Systems.",
        
        desc: <>I am <strong>Rhegysa</strong>. A 5th-semester Informatics Engineering student and Full Scholarship Awardee at STIKOM PGRI Banyuwangi. I focus on building industrial-scale web systems (SaaS) with efficient architecture using <strong>Next.js, Node.js, and MySQL</strong>.</>,
        
        btn_projects: "View Systems",
        btn_pubs: "Publications (3)"
      },
      stats: {
        gpa_label: "Latest GPA (Sem 1-4)",
        comp_title: "Competition Highlights",
        comp_1: <><strong>Top 10 Int'l Finalist</strong> Business Plan (Proxocoris 2025)</>,
        comp_2: <><strong>2nd Runner Up National</strong> Business Plan (Corisindo 2024)</>,
        grad_title: "Best Graduate #1",
        grad_desc: "Vocational High School (2023)"
      },
      section_titles: {
        edu: "Education",
        exp: "Technical Experience",
        projects: "Systems & Projects",
        projects_sub: "Software architecture implementations for real-world solutions.",
        research: "Research & Publications",
        research_sub: "Scientific contributions in Digital Transformation and System Audit (2025).",
        gallery: "Academic Archive",
        gallery_sub: "Competition documentation.",
        comp_detail: "Competitions Detail",
        collab: "Let's Collaborate."
      },
      edu_exp: {
        uni_title: "S1 Informatics Engineering",
        uni_desc: "Full Scholarship Awardee (BERBAGI). GPA 3.98. Active in lecturer research and campus system development.",
        smk_title: "SMK Al-Munawwir IIBS Singojuruh",
        smk_desc: "Rank 1 Best Graduate. Student Council President (2021-2022).",
        teacher_title: "Extracurricular Programming Teacher",
        teacher_desc: "Teaching algorithms, programming logic, and data structures to students.",
        dev_title: "Fullstack Developer (Team Lead)",
        dev_desc: "Leading a team of 4 engineers in developing the accreditation system for Campus TPM Unit."
      },
      projects: {
        p1_tag: "Commercial SaaS",
        p1_title: "Integrated School System (SaaS)",
        p1_desc: <>Cloud-based school management platform designed for high scalability. Includes <strong>PPDB, Finance, CBT, and Attendance</strong> modules. Utilizes complex relational database architecture for Dapodik synchronization.</>,
        p2_tag: "Team Lead",
        p2_title: "Quality Assurance Information System",
        p2_desc: "Centralized document management system for TPM Unit. Focused on data security, role-based access control (RBAC), and database query efficiency for reporting."
      },
      research: {
        author_1: "First Author",
        author_3: "Third Author",
        author_4: "Fourth Author",
        desc_1: "Scientific Journal Publication (2025). Strategic analysis of technology implementation in business transformation.",
        desc_2: "Scientific Journal Publication (2025). Security audit and financial information system controls.",
        desc_3: "Scientific Journal Publication (2025). Cloud storage infrastructure analysis for enterprise efficiency.",
        link_1: "https://ojs.stmikpontianak.ac.id/sisfotenika/article/view/556/164", // Ganti dengan link Google Scholar/Jurnal asli
        link_2: "https://ojs.stmikpontianak.ac.id/sisfotenika/article/view/535/158",
        link_3: "https://ojs.stikombanyuwangi.ac.id/index.php/jikom/article/view/245/150"
      },
      comp: {
        c1_title: "LOKAVEST (2025)",
        c1_desc: "\"Digital Transformation of MSMEs Through Auto-Invest and Ads Algorithm-Based Marketing.\"",
        c2_title: "Sustainable Production Innovation (2024)",
        c2_desc: "\"Supply Chain and Production Optimization Using Digital Approaches.\"",
        link_c1: "/proposal-lokavest.pdf", 
        link_c2: "/proposal-paving.pdf"
      },
      footer: {
        sub: "Open for Software Engineer Intern or Freelance positions.",
        email_cta: "Email Me"
      }
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-hidden">
      
      {/* Custom Animations - Fixed Hydration Mismatch by removing styled-jsx */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient-shift 3s ease infinite;
        }
      `}} />

      {/* --- HEADER --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 animate-fade-up">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter text-slate-900">
            <span className="text-indigo-600">Rhegysa </span>Alvyanthi Juniartha
          </div>
          <div className="flex gap-4 items-center">
             {/* Language Toggle */}
             <div className="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
                <button 
                  onClick={() => setLang('id')}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${lang === 'id' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  ID
                </button>
                <button 
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${lang === 'en' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  EN
                </button>
             </div>

             <a href="mailto:rhegysajuniartha@gmail.com" className="hidden md:flex px-5 py-2 text-sm font-medium bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all items-center gap-2 hover:scale-105 active:scale-95">
               <Mail size={16} /> {t.nav.hire}
             </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* --- HERO SECTION --- */}
        <section className="mb-20 animate-fade-up delay-100">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Kolom Kiri: Teks */}
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6 hover:bg-indigo-100 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                {t.hero.badge}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                {t.hero.title1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 animate-gradient">
                  {t.hero.title2}
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {t.hero.desc}
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 hover:-translate-y-1">
                  <Code size={18} /> {t.hero.btn_projects}
                </a>
                <a href="#research" className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all hover:-translate-y-1 hover:shadow-sm">
                  <BookOpen size={18} /> {t.hero.btn_pubs}
                </a>
              </div>
            </div>

            {/* Kolom Kanan: Foto Profil (SIZE INCREASED) */}
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center relative">
              {/* Lingkaran Dekorasi */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-full blur-2xl opacity-60 scale-90 animate-pulse"></div>
              
              {/* Container Foto (Ukuran diperbesar: w-80 h-80 di mobile, 28rem di desktop) */}
              <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full border-4 border-white shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-500 bg-slate-200 flex items-center justify-center">
                <img 
                  src="/profile.jpg" 
                  alt="Rhegysa Alvyanthi" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerText = "Photo Here";
                  }}
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 md:bottom-0 md:right-10 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 animate-bounce">
                <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                  <Star size={16} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">GPA</p>
                  <p className="text-sm font-bold text-slate-800">3.98</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- BENTO GRID: STATS --- */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-24 animate-fade-up delay-200">
          
          {/* Stats: IPK */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-indigo-300 hover:shadow-md transition-all duration-300 group hover:scale-[1.02]">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
              <Star size={20} />
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-1">3.98</h3>
              <p className="text-slate-500 text-sm font-medium">{t.stats.gpa_label}</p>
            </div>
          </div>

          {/* Stats: Achievements */}
          <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-2xl shadow-sm flex flex-col justify-center hover:shadow-lg transition-all duration-300 hover:scale-[1.01] group">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Trophy className="text-yellow-400 group-hover:rotate-12 transition-transform" size={20}/> {t.stats.comp_title}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <span className="min-w-[4px] h-[4px] bg-yellow-400 rounded-full mt-2"></span>
                <p>{t.stats.comp_1}</p>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <span className="min-w-[4px] h-[4px] bg-yellow-400 rounded-full mt-2"></span>
                <p>{t.stats.comp_2}</p>
              </div>
            </div>
          </div>

          {/* Stats: Best Graduate */}
          <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 hover:scale-[1.02] group">
            <div className="w-10 h-10 bg-indigo-200 rounded-lg flex items-center justify-center text-indigo-700 mb-4 group-hover:scale-110 transition-transform">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-indigo-900 mb-1 leading-tight">{t.stats.grad_title}</h3>
              <p className="text-indigo-600 text-sm">{t.stats.grad_desc}</p>
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE & EDUCATION TIMELINE --- */}
        <section className="grid md:grid-cols-2 gap-12 mb-24 animate-fade-up delay-300">
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap className="text-indigo-600" /> {t.section_titles.edu}
            </h2>
            <div className="space-y-8 pl-4 border-l-2 border-slate-200">
              <div className="relative pl-8 group">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 group-hover:scale-125 transition-transform"></span>
                <h4 className="font-bold text-lg">{t.edu_exp.uni_title}</h4>
                <p className="text-indigo-600 font-medium text-sm mb-1">STIKOM PGRI Banyuwangi • 2023 - Present</p>
                <p className="text-slate-600 text-sm">
                  {t.edu_exp.uni_desc}
                </p>
              </div>
              <div className="relative pl-8 group">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-slate-300 group-hover:border-indigo-400 group-hover:scale-125 transition-all"></span>
                <h4 className="font-bold text-lg">{t.edu_exp.smk_title}</h4>
                <p className="text-slate-500 font-medium text-sm mb-1">2020 - 2023</p>
                <p className="text-slate-600 text-sm">
                  {t.edu_exp.smk_desc}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Briefcase className="text-indigo-600" /> {t.section_titles.exp}
            </h2>
            <div className="space-y-8 pl-4 border-l-2 border-slate-200">
              <div className="relative pl-8 group">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 group-hover:scale-125 transition-transform"></span>
                <h4 className="font-bold text-lg">{t.edu_exp.teacher_title}</h4>
                <p className="text-indigo-600 font-medium text-sm mb-1">SMK Al-Munawwir IIBS • 2024 - Present</p>
                <p className="text-slate-600 text-sm">
                  {t.edu_exp.teacher_desc}
                </p>
              </div>
              <div className="relative pl-8 group">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-slate-300 group-hover:border-indigo-400 group-hover:scale-125 transition-all"></span>
                <h4 className="font-bold text-lg">{t.edu_exp.dev_title}</h4>
                <p className="text-slate-500 font-medium text-sm mb-1">Project Sistem Akreditasi • Semester 5</p>
                <p className="text-slate-600 text-sm">
                  {t.edu_exp.dev_desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- FEATURED PROJECTS (SAAS & SYSTEMS) --- */}
        <section id="projects" className="mb-24 animate-fade-up delay-300">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">{t.section_titles.projects}</h2>
              <p className="text-slate-500 mt-2">{t.section_titles.projects_sub}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Project 1: SaaS Sekolah */}
            <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
              <div className="h-48 bg-slate-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 opacity-90 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative z-10 text-center text-white px-6">
                  <h3 className="text-2xl font-bold">Integrated School System</h3>
                  <p className="text-blue-100 text-sm mt-2">SaaS Product (In Development)</p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600">{t.projects.p1_title}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">{t.projects.p1_tag}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {t.projects.p1_desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">Next.js</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">Prisma ORM</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">MySQL</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">SaaS Architecture</span>
                </div>
              </div>
            </div>

            {/* Project 2: TPM System */}
            <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
              <div className="h-48 bg-slate-100 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-slate-800 opacity-90 group-hover:scale-110 transition-transform duration-500"></div>
                 <div className="relative z-10 text-center text-white px-6">
                  <h3 className="text-2xl font-bold">Sistem Akreditasi TPM</h3>
                  <p className="text-slate-300 text-sm mt-2">Campus Recognition Project</p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600">{t.projects.p2_title}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">{t.projects.p2_tag}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {t.projects.p2_desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">Next.js</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">Node.js</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">MySQL</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">Team Management</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- RESEARCH & PUBLICATIONS --- */}
        <section id="research" className="mb-24 animate-fade-up delay-300">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">{t.section_titles.research}</h2>
          <p className="text-slate-500 mb-8">{t.section_titles.research_sub}</p>

          <div className="grid gap-6">
            
            {/* Journal 1 */}
            <a 
              href={t.research.link_1} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex gap-6 p-6 bg-white border border-slate-200 rounded-xl items-start shadow-sm hover:border-indigo-300 hover:shadow-md transition-all hover:scale-[1.01] cursor-pointer group"
            >
              <div className="shrink-0 w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                <ScrollText size={24}/>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                   <span className="px-2 py-0.5 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider rounded">SINTA 4</span>
                   <span className="text-xs font-bold text-slate-500 uppercase">{t.research.author_1}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  Tantangan dan Peluang Penerapan Transformasi Digital Menggunakan RACE Planning Framework
                </h4>
                <p className="text-slate-600 text-sm">
                  {t.research.desc_1}
                </p>
              </div>
            </a>

            {/* Journal 2 */}
            <a
              href={t.research.link_2} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex gap-6 p-6 bg-white border border-slate-200 rounded-xl items-start shadow-sm hover:border-indigo-300 hover:shadow-md transition-all hover:scale-[1.01] cursor-pointer group"
              >
              <div className="shrink-0 w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                <ScrollText size={24}/>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                   <span className="px-2 py-0.5 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider rounded">SINTA 4</span>
                   <span className="text-xs font-bold text-slate-500 uppercase">{t.research.author_3}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  Audit Pengendalian Batasan Sistem Informasi Manajemen Keuangan Menggunakan Kerangka Kerja COSO
                </h4>
                <p className="text-slate-600 text-sm">
                  {t.research.desc_2}
                </p>
              </div>
            </a>

             {/* Journal 3 */}
             <a
              href={t.research.link_3} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex gap-6 p-6 bg-white border border-slate-200 rounded-xl items-start shadow-sm hover:border-indigo-300 hover:shadow-md transition-all hover:scale-[1.01] cursor-pointer group"
             >
              <div className="shrink-0 w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                <ScrollText size={24}/>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                   <span className="px-2 py-0.5 bg-slate-600 text-white text-[10px] font-bold uppercase tracking-wider rounded">SINTA 5</span>
                   <span className="text-xs font-bold text-slate-500 uppercase">{t.research.author_4}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  Analisis SWOT Sebagai Dasar Perencanaan Pengadaan Cloud Storage Untuk Transformasi Digital Di PT Lokabyte
                </h4>
                <p className="text-slate-600 text-sm">
                  {t.research.desc_3}
                </p>
              </div>
            </a>

          </div>
        </section>

        {/* --- NEW SECTION: ILLUSTRATION GALLERY --- */}
        <section id="gallery" className="mb-24 animate-fade-up delay-300">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                <Palette className="text-indigo-600"/> {t.section_titles.gallery}
              </h2>
              <p className="text-slate-500 mt-2">{t.section_titles.gallery_sub}</p>
            </div>
          </div>

          {/* Gallery Grid - Masonry Style Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
              
              {/* Item 1 (Tall - Gambar Utama) */}
              <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <img 
                    src="/gallery1.jpg" 
                    alt="Illustration Main" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      // Menampilkan placeholder jika gambar gagal dimuat
                      const parent = e.currentTarget.parentElement;
                      if(parent) {
                        const placeholder = document.createElement('div');
                        placeholder.className = "absolute inset-0 flex flex-col items-center justify-center text-slate-400";
                        placeholder.innerHTML = '<span>Simpan "gallery1.jpg" di public/</span>';
                        parent.appendChild(placeholder);
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white text-sm font-bold">Character Design / Poster</p>
                  </div>
              </div>

              {/* Item 2 (Square) */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                   <img 
                    src="/gallery2.jpg" 
                    alt="Digital Sketch" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                   {/* Placeholder Icon (Hanya muncul jika gambar belum ada/error) */}
                   <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 -z-10">
                      <ImageIcon size={32} className="mb-2 opacity-50"/>
                      <span className="text-xs font-medium">gallery2.jpg</span>
                  </div>
              </div>

              {/* Item 3 (Square) */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                   <img 
                    src="/gallery3.jpg" 
                    alt="Game Asset" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                   <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 -z-10">
                      <ImageIcon size={32} className="mb-2 opacity-50"/>
                      <span className="text-xs font-medium">gallery3.jpg</span>
                  </div>
              </div>

               {/* Item 4 (Wide) */}
               <div className="col-span-2 relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                   <img 
                    src="/gallery4.jpg" 
                    alt="Other Illustration" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                   <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 -z-10">
                      <ImageIcon size={32} className="mb-2 opacity-50"/>
                      <span className="text-sm font-medium">gallery4.jpg (Wide)</span>
                  </div>
              </div>
          </div>
        </section>

        {/* --- DETAILED COMPETITIONS --- */}
        <section className="mb-24 animate-fade-up delay-300">
           <h2 className="text-3xl font-bold text-slate-900 mb-8">{t.section_titles.comp_detail}</h2>
           <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all hover:scale-[1.01]">
                 <h4 className="font-bold text-lg text-slate-900 mb-2">{t.comp.c1_title}</h4>
                 <p className="text-indigo-600 text-sm font-semibold mb-3">Top 10 Finalist International • PROXOCORIS</p>
                 <p className="text-slate-600 text-sm leading-relaxed">
                   {t.comp.c1_desc}
                 </p>
                <a 
                    href={t.comp.link_c1} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors"
                 >
                  <br></br>
                  <br></br>
                    <BookOpen size={16} /> Baca Proposal Business Plan
                 </a>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-yellow-300 hover:shadow-md transition-all hover:scale-[1.01]">
                 <h4 className="font-bold text-lg text-slate-900 mb-2">{t.comp.c2_title}</h4>
                 <p className="text-yellow-600 text-sm font-semibold mb-3">Juara Harapan 2 Nasional • CORISINDO</p>
                 <p className="text-slate-600 text-sm leading-relaxed">
                   {t.comp.c2_desc}
                 </p>
                  <a 
                    href={t.comp.link_c2} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-yellow-600 transition-colors"
                 >
                  <br></br>
                  <br></br>
                    <BookOpen size={16} /> Lihat Dokumen
                 </a>
              </div>
           </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="mt-24 pt-12 border-t border-slate-200 animate-fade-up delay-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
               <h2 className="text-2xl font-bold text-slate-900">{t.section_titles.collab}</h2>
               <p className="text-slate-500 mt-2">{t.footer.sub}</p>
            </div>
            
            <a 
              href="mailto:rhegysajuniartha@gmail.com" 
              className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
               <Mail className="group-hover:scale-110 transition-transform" />
               <div className="text-left">
                 <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">{t.footer.email_cta}</p>
                 <p className="font-semibold">rhegysajuniartha@gmail.com</p>
               </div>
            </a>
          </div>
          <div className="mt-12 text-center text-slate-400 text-sm pb-8">
            © 2025 Rhegysa Alvyanthi Juniartha
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Portfolio;