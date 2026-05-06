import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import mainEl from "@/assets/main-element.png";
import el1 from "@/assets/element-1.png";
import el2 from "@/assets/element-2.png";
import el5 from "@/assets/element-5.png";
import logoEl from "@/assets/logo-with-element.png";
import {
  Calendar, MapPin, Store, Sparkles, Handshake, Music, BookOpen, Building2,
  ArrowRight, Instagram, Facebook, Youtube, Search, ChevronRight, Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kalteng Expo 2026 — Bangkitkan Potensi, Majukan Ekonomi Rakyat" },
      { name: "description", content: "Kalteng Expo 2026 — ajang tahunan UMKM, startup, pemerintah & masyarakat Kalimantan Tengah. 17–23 Mei 2026, GOR Serbaguna Indoor, Palangka Raya." },
      { property: "og:title", content: "Kalteng Expo 2026" },
      { property: "og:description", content: "17–23 Mei 2026 · GOR Serbaguna Indoor, Palangka Raya." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  component: Home,
});

const NAV = [
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Denah Lokasi", href: "#denah" },
  { label: "Agenda", href: "#agenda" },
  { label: "Sponsorship & Booth", href: "#sponsorship" },
  { label: "Galeri Kalteng Expo", href: "#galeri" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-green-deep/95 backdrop-blur border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Kalteng Expo 2026" className="h-9 w-auto invert brightness-0" style={{ filter: "invert(1)" }} />
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm text-white/80">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-brand-yellow transition-colors">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label="Cari" className="text-white/70 hover:text-white p-2"><Search className="h-4 w-4" /></button>
          <a href="#daftar" className="inline-flex items-center gap-2 rounded-full bg-brand-teal hover:bg-brand-teal/90 text-white px-4 py-2 text-sm font-semibold transition-colors">
            Daftar Sekarang
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-green-deep text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle at 20% 30%, rgba(120,180,140,0.25), transparent 60%), radial-gradient(circle at 80% 70%, rgba(40,80,60,0.5), transparent 60%)" }} />
      <img src={el2} alt="" className="absolute -right-10 -top-10 w-[420px] opacity-15 pointer-events-none hidden md:block" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-medium text-white/90">
            <Calendar className="h-3.5 w-3.5" /> 17–23 Mei 2026
          </span>
          <h1 className="mt-5 text-6xl sm:text-7xl lg:text-8xl leading-[0.85] font-display">
            KAL<br/>TENG<br/>EXPO<br/><span className="text-brand-yellow">2026</span>
          </h1>
          <p className="mt-6 max-w-md text-white/80 text-base sm:text-lg">
            Kalteng Expo adalah ajang tahunan berskala nasional yang mempertemukan UMKM, startup, pemerintah, dan masyarakat Kalimantan Tengah.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-white/70 text-sm">
            <MapPin className="h-4 w-4 text-brand-orange" /> GOR Serbaguna Indoor, Palangka Raya
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#daftar" className="inline-flex items-center gap-2 rounded-full bg-brand-orange hover:brightness-110 text-foreground px-6 py-3 font-semibold transition">
              Daftar Sekarang <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#tentang" className="inline-flex items-center gap-2 rounded-full border border-white/25 hover:bg-white/10 text-white px-6 py-3 font-semibold transition">
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-3xl bg-brand-cream p-6 sm:p-10 shadow-2xl">
            <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-brand-orange text-foreground px-3 py-1 text-xs font-semibold">
              <Calendar className="h-3 w-3" /> 17–23 Mei 2026
            </span>
            <img src={logoEl} alt="Kalteng Expo 2026" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section id="tentang" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-brand-teal flex items-center justify-center gap-2">
          <span className="h-px w-6 bg-brand-teal" /> SELAMAT DATANG <span className="h-px w-6 bg-brand-teal" />
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">
          Selamat Datang di <span className="text-brand-teal">Kalteng Expo 2026</span>
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Kalteng Expo adalah ajang tahunan berskala nasional yang telah menjadi etalase utama potensi Kalimantan Tengah sejak tahun 2007. Pada tahun 2026, event ini kembali hadir dengan energi baru, menghadirkan panggung kolaborasi lintas sektor — dari UMKM, startup, pengrajin lokal, akademisi, hingga instansi pemerintahan — untuk membangun ekonomi kerakyatan dari bawah ke atas.
        </p>
      </div>
    </section>
  );
}

const HIGHLIGHTS = [
  { icon: Store, title: "Booth UMKM Terbaik", desc: "Ratusan produk unggulan UMKM Kalimantan Tengah hadir dalam satu tempat." },
  { icon: Sparkles, title: "Produk Unggulan Lokal", desc: "Temukan keunikan produk lokal Kalteng, dari kerajinan hingga kuliner." },
  { icon: Handshake, title: "B2B Business Matching", desc: "Pertemukan pelaku usaha dengan investor dan pembeli potensial." },
  { icon: Music, title: "Pertunjukan Budaya & Hiburan Rakyat", desc: "Seni dan budaya Kalimantan Tengah yang kaya dan membanggakan." },
  { icon: BookOpen, title: "Workshop & Seminar", desc: "Sesi edukasi dan peningkatan kapasitas pelaku UMKM." },
  { icon: Building2, title: "Pelayanan Publik & OPD Kalteng", desc: "Akses layanan pemerintah dan informasi pembangunan daerah." },
];

function Highlights() {
  return (
    <section id="agenda" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] text-brand-teal flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-brand-teal" /> HIGHLIGHTS <span className="h-px w-6 bg-brand-teal" />
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Apa yang Bisa Kamu Temukan di Expo Ini?</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {HIGHLIGHTS.map((h) => (
            <div key={h.title} className="group bg-card rounded-2xl p-6 border border-border hover:border-brand-teal/40 hover:shadow-lg transition">
              <div className="h-12 w-12 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PRODUCTS = ["Teh kapalawi", "Batik lawung kaktik", "Inovasi produk rumah tangga dari daun", "Olahan kuliner khas daerah"];

function Products() {
  return (
    <section id="galeri" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="rounded-3xl bg-secondary aspect-square flex items-center justify-center p-10">
          <img src={el1} alt="Produk UMKM Kalteng" className="max-w-full max-h-full object-contain" />
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.25em] text-brand-teal flex items-center gap-2">
            <span className="h-px w-6 bg-brand-teal" /> PRODUK LOKAL
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Produk-produk UMKM Unggulan</h2>
          <p className="mt-4 text-muted-foreground">
            Di Kalteng Expo, dapatkan produk-produk kerajinan dan olahan asli Kalimantan Tengah yang unik dan berkualitas.
          </p>
          <ul className="mt-6 space-y-3">
            {PRODUCTS.map((p) => (
              <li key={p} className="flex items-center justify-between bg-secondary/60 hover:bg-secondary rounded-xl px-5 py-4 border border-border transition">
                <span className="flex items-center gap-3 text-sm font-medium">
                  <Check className="h-4 w-4 text-brand-teal" /> {p}
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </li>
            ))}
          </ul>
          <a href="#" className="mt-6 inline-flex items-center gap-2 text-brand-orange font-semibold hover:gap-3 transition-all">
            Lihat semua produk <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "156", l: "Total Kunjungan", s: "Orang" },
    { v: "Rp1.2M", l: "Total Transaksi", s: "" },
    { v: "Rp4.7M", l: "Transaksi Perkiraan", s: "" },
  ];
  const profile = [
    { p: 50, l: "Lainnya", c: "bg-brand-blue text-foreground" },
    { p: 15, l: "Pelajar", c: "bg-brand-teal text-white" },
    { p: 10, l: "Wirausaha", c: "bg-brand-orange text-foreground" },
    { p: 25, l: "Karyawan", c: "bg-brand-red text-white" },
  ];
  return (
    <section className="relative overflow-hidden bg-brand-green-deep text-white py-20 sm:py-24">
      <img src={mainEl} alt="" className="absolute right-0 top-0 w-[500px] opacity-10 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">Statistik Kedatangan Pengunjung</h2>
          <p className="mt-3 text-white/60">Data kunjungan Kalteng Expo sebelumnya</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
              <div className="text-5xl font-display text-brand-orange">{s.v}</div>
              <div className="mt-2 text-sm text-white/70">{s.l} {s.s && <span className="opacity-60">· {s.s}</span>}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8">
          <p className="text-sm font-semibold text-white/80">Profil Pengunjung</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.map((p) => (
              <span key={p.l} className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold ${p.c}`}>
                <span className="font-display">{p.p}%</span> {p.l}
              </span>
            ))}
          </div>
          <div className="mt-4 flex h-3 overflow-hidden rounded-full bg-white/10">
            {profile.map((p) => (
              <div key={p.l} className={p.c.split(" ")[0]} style={{ width: `${p.p}%` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="daftar" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-brand-teal text-white p-10 sm:p-16 text-center">
          <img src={el5} alt="" className="absolute -right-6 -bottom-6 w-56 opacity-30 pointer-events-none" />
          <img src={el5} alt="" className="absolute -left-10 -top-10 w-44 opacity-20 pointer-events-none rotate-180" />
          <h2 className="relative text-3xl sm:text-4xl lg:text-5xl">
            Ayo Jadi Bagian dari<br/>
            <span className="text-brand-yellow">Kalteng Expo 2026!</span>
          </h2>
          <p className="relative mt-5 text-white/85 max-w-2xl mx-auto">
            Daftarkan booth, bisnis, atau kehadiran Anda sekarang. Bergabunglah dengan ratusan pelaku usaha dan ribuan pengunjung dalam pesta ekonomi rakyat terbesar di Kalimantan Tengah.
          </p>
          <div className="relative mt-7 flex flex-wrap gap-3 justify-center">
            <a href="#sponsorship" className="inline-flex items-center gap-2 rounded-full bg-brand-orange hover:brightness-110 text-foreground px-6 py-3 font-semibold transition">
              Daftar Booth <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#tentang" className="inline-flex items-center gap-2 rounded-full border border-white/40 hover:bg-white/10 px-6 py-3 font-semibold transition">
              Info Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sponsors() {
  return (
    <section id="sponsorship" className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-muted-foreground">SUPPORTED BY</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-80">
          {["DISDAG DPERIN", "OPD I", "OPD II", "OPD III", "OPD IV"].map((s) => (
            <div key={s} className="h-14 w-24 rounded-lg bg-secondary border border-border flex items-center justify-center text-[10px] font-semibold text-muted-foreground text-center px-2">
              {s}
            </div>
          ))}
        </div>
        <div className="my-10 h-px bg-border" />
        <p className="text-xs font-bold tracking-[0.25em] text-muted-foreground">ORGANIZE BY</p>
        <div className="mt-4 flex justify-center">
          <img src={logo} alt="Kalteng Expo" className="h-12 w-auto" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-green-deep text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="Kalteng Expo" className="h-12 w-auto" style={{ filter: "invert(1)" }} />
          <p className="mt-5 text-sm">Gedung Olahraga (GOR)<br/>Serbaguna Indoor Palangka Raya</p>
          <p className="mt-3 text-xs text-white/60 leading-relaxed">
            Jl. Tjilik Riwut, Bukit Tunggal,<br/>Kec. Jekan Raya, Kota Palangka Raya,<br/>Kalimantan Tengah 74874
          </p>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.25em] text-brand-orange">LINKS</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#top" className="hover:text-brand-yellow">Home</a></li>
            {NAV.map((n) => <li key={n.label}><a href={n.href} className="hover:text-brand-yellow">{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.25em] text-brand-orange">SOCIAL MEDIA</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="inline-flex items-center gap-2 hover:text-brand-yellow"><Instagram className="h-4 w-4" /> Instagram</a></li>
            <li><a href="#" className="inline-flex items-center gap-2 hover:text-brand-yellow"><Facebook className="h-4 w-4" /> Facebook</a></li>
            <li><a href="#" className="inline-flex items-center gap-2 hover:text-brand-yellow"><Youtube className="h-4 w-4" /> Youtube</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© 2026 Kalteng Expo. All rights reserved.</p>
          <p>Kalimantan Tengah</p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Highlights />
        <Products />
        <Stats />
        <CTA />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
