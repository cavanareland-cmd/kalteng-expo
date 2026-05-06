import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import mainEl from "@/assets/main-element.png";
import el2 from "@/assets/element-2.png";
import el5 from "@/assets/element-5.png";
import logoEl from "@/assets/logo-with-element.png";
import {
  Calendar, MapPin, Store, Sparkles, Handshake, Music, BookOpen, Building2,
  ArrowRight, Users, TrendingUp, Clock,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kalteng Expo 2026 — Bangkitkan Potensi Daerah Kalimantan Tengah" },
      { name: "description", content: "Kalteng Expo 2026: pameran tahunan UMKM, OPD & investor. 17–23 Mei 2026 di Halaman GOR Indoor Palangka Raya." },
      { property: "og:title", content: "Kalteng Expo 2026" },
      { property: "og:description", content: "17–23 Mei 2026 · Halaman GOR Indoor, Palangka Raya." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-green-deep text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle at 20% 30%, rgba(120,180,140,0.25), transparent 60%), radial-gradient(circle at 80% 70%, rgba(40,80,60,0.5), transparent 60%)" }} />
      <img src={el2} alt="" className="absolute -right-10 -top-10 w-[420px] opacity-15 pointer-events-none hidden md:block" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-medium text-white/90">
            <Calendar className="h-3.5 w-3.5" /> 17–23 Mei 2026 · 12.00–22.00 WIB
          </span>
          <h1 className="mt-5 text-6xl sm:text-7xl lg:text-8xl leading-[0.85] font-display">
            KAL<br/>TENG<br/>EXPO<br/><span className="text-brand-yellow">2026</span>
          </h1>
          <p className="mt-6 max-w-md text-brand-yellow text-lg sm:text-xl font-semibold italic">
            “Menguatkan Lokal, Menjangkau Global”
          </p>
          <p className="mt-3 max-w-md text-white/80 text-base sm:text-lg">
            Exhibition · Discussion · Workshop · B2B & Business Matching · Cultural Performance · Entertainment.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-white/70 text-sm">
            <MapPin className="h-4 w-4 text-brand-orange" /> Halaman GOR Indoor, Palangka Raya
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/sponsorship" className="inline-flex items-center gap-2 rounded-full bg-brand-orange hover:brightness-110 text-foreground px-6 py-3 font-semibold transition">
              Daftar Booth <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/tentang" className="inline-flex items-center gap-2 rounded-full border border-white/25 hover:bg-white/10 text-white px-6 py-3 font-semibold transition">
              Pelajari Lebih Lanjut
            </Link>
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
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-brand-teal flex items-center justify-center gap-2">
          <span className="h-px w-6 bg-brand-teal" /> SELAMAT DATANG <span className="h-px w-6 bg-brand-teal" />
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">
          Selamat Datang di <span className="text-brand-teal">Kalteng Expo 2026</span>
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Kalteng Expo adalah agenda tahunan Pemerintah Provinsi Kalimantan Tengah sebagai upaya mempromosikan potensi daerah meliputi sektor perdagangan, perindustrian, perekonomian, pertanian, perikanan, perkebunan, kehutanan, sumber daya alam, pariwisata, jasa konstruksi, dan investasi kepada masyarakat luas.
        </p>
        <div className="mt-8 flex justify-center">
          <Link to="/tentang" className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:gap-3 transition-all">
            Selengkapnya tentang kami <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const HIGHLIGHTS = [
  { icon: Store, title: "Pameran Produk Unggulan", desc: "Kuliner, fashion, kerajinan, dan produk ramah lingkungan asli Kalimantan Tengah." },
  { icon: Building2, title: "Stand OPD & BUMD", desc: "Pelayanan langsung kesehatan, perizinan, pajak, adminduk, perbankan, dan BUMD." },
  { icon: Handshake, title: "B2B & Business Matching", desc: "Pertemuan pelaku bisnis dan akademisi untuk memaksimalkan transaksi antar perusahaan." },
  { icon: Music, title: "Cultural Performance", desc: "Pertunjukan seni dan budaya khas Kalimantan Tengah yang membanggakan." },
  { icon: BookOpen, title: "Discussion & Workshop", desc: "Sesi edukasi dan peningkatan kapasitas pelaku UMKM serta talenta muda daerah." },
  { icon: Sparkles, title: "Entertainment", desc: "Hiburan rakyat dan area bermain keluarga selama 7 hari penuh kegiatan." },
];

function Highlights() {
  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] text-brand-teal flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-brand-teal" /> BENTUK KEGIATAN <span className="h-px w-6 bg-brand-teal" />
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
        <div className="mt-10 text-center">
          <Link to="/kegiatan" className="inline-flex items-center gap-2 text-brand-teal font-semibold hover:gap-3 transition-all">
            Lihat detail kegiatan <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function EventInfo() {
  const items = [
    { icon: Calendar, label: "Tanggal", value: "17 – 23 Mei 2026" },
    { icon: Clock, label: "Waktu", value: "12.00 – 22.00 WIB" },
    { icon: MapPin, label: "Tempat", value: "Halaman GOR Indoor, Palangka Raya" },
  ];
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-4">
          {items.map((i) => (
            <div key={i.label} className="rounded-2xl bg-secondary border border-border p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-brand-orange/15 text-brand-orange flex items-center justify-center flex-shrink-0">
                <i.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest text-muted-foreground">{i.label.toUpperCase()}</p>
                <p className="mt-1 font-semibold">{i.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "70K", l: "Total Kedatangan", s: "Orang", icon: Users },
    { v: "Rp 9,2 M", l: "Total Transaksi", s: "7 Hari", icon: TrendingUp },
    { v: "Rp 11,4 M", l: "Transaksi Potensial", s: "7 Hari", icon: Sparkles },
  ];
  const profile = [
    { p: 50, l: "Masyarakat Umum", c: "bg-brand-teal text-white" },
    { p: 30, l: "Pelaku Usaha", c: "bg-brand-orange text-foreground" },
    { p: 10, l: "Akademisi", c: "bg-brand-yellow text-foreground" },
    { p: 10, l: "Instansi Pemerintahan", c: "bg-brand-red text-white" },
  ];
  return (
    <section className="relative overflow-hidden bg-brand-green-deep text-white py-20 sm:py-24">
      <img src={mainEl} alt="" className="absolute right-0 top-0 w-[500px] opacity-10 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-brand-yellow">STATISTIK 2025</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">Statistik Kedatangan Pengunjung</h2>
          <p className="mt-3 text-white/60">Data kunjungan Kalteng Expo tahun 2025</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
              <s.icon className="h-6 w-6 text-brand-orange mx-auto" />
              <div className="mt-3 text-4xl sm:text-5xl font-display text-brand-orange">{s.v}</div>
              <div className="mt-2 text-sm text-white/70">{s.l} <span className="opacity-60">· {s.s}</span></div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid lg:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8">
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
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8">
            <p className="text-sm font-semibold text-white/80">Gender Pengunjung</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-brand-orange/20 border border-brand-orange/30 p-5 text-center">
                <div className="text-4xl font-display text-brand-orange">60%</div>
                <p className="mt-1 text-sm">Perempuan</p>
              </div>
              <div className="rounded-xl bg-brand-teal/20 border border-brand-teal/30 p-5 text-center">
                <div className="text-4xl font-display text-brand-yellow">40%</div>
                <p className="mt-1 text-sm">Laki-laki</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-brand-teal text-white p-10 sm:p-16 text-center">
          <img src={el5} alt="" className="absolute -right-6 -bottom-6 w-56 opacity-30 pointer-events-none" />
          <img src={el5} alt="" className="absolute -left-10 -top-10 w-44 opacity-20 pointer-events-none rotate-180" />
          <h2 className="relative text-3xl sm:text-4xl lg:text-5xl">
            Ayo Jadi Bagian dari<br/>
            <span className="text-brand-yellow">Kalteng Expo 2026!</span>
          </h2>
          <p className="relative mt-5 text-white/85 max-w-2xl mx-auto">
            Daftarkan booth, sponsorship, atau kehadiran Anda sekarang. Bergabunglah dalam pesta ekonomi rakyat terbesar di Kalimantan Tengah.
          </p>
          <div className="relative mt-7 flex flex-wrap gap-3 justify-center">
            <Link to="/sponsorship" className="inline-flex items-center gap-2 rounded-full bg-brand-orange hover:brightness-110 text-foreground px-6 py-3 font-semibold transition">
              Daftar Booth <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="https://wa.me/6281367866677" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/40 hover:bg-white/10 px-6 py-3 font-semibold transition">
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sponsors() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-muted-foreground">DIDUKUNG OLEH</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-80">
          {["Pemprov Kalteng", "Disperindag", "OPD Kalteng", "BUMN", "BUMD"].map((s) => (
            <div key={s} className="h-14 w-28 rounded-lg bg-secondary border border-border flex items-center justify-center text-[10px] font-semibold text-muted-foreground text-center px-2">
              {s}
            </div>
          ))}
        </div>
        <div className="my-10 h-px bg-border" />
        <p className="text-xs font-bold tracking-[0.25em] text-muted-foreground">DISELENGGARAKAN OLEH</p>
        <div className="mt-4 flex justify-center">
          <img src={logo} alt="Kalteng Expo" className="h-12 w-auto" />
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Welcome />
        <EventInfo />
        <Highlights />
        <Stats />
        <CTA />
        <Sponsors />
      </main>
      <SiteFooter />
    </div>
  );
}
