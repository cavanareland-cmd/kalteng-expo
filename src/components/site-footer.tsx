import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { NAV } from "./site-header";

export function SiteFooter() {
  return (
    <footer className="bg-brand-green-deep text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <img src={logo} alt="Kalteng Expo" className="h-14 w-auto" />
          <p className="mt-4 text-sm italic text-brand-yellow">“Menguatkan Lokal, Menjangkau Global”</p>
          <p className="mt-5 text-sm font-semibold text-white">Kantor Sekretariat</p>
          <p className="mt-2 text-xs text-white/70 leading-relaxed flex items-start gap-2">
            <MapPin className="h-4 w-4 text-brand-orange flex-shrink-0 mt-0.5" />
            Jl. Raden Saleh IV No. 11B, Menteng,<br/>Jekan Raya, Palangka Raya, Kalimantan Tengah
          </p>
          <p className="mt-3 text-xs text-white/70 flex items-center gap-2">
            <Phone className="h-4 w-4 text-brand-orange" /> +62 813 6786 6677 (Rika/Putri)
          </p>
          <p className="mt-2 text-xs text-white/70 flex items-center gap-2">
            <Mail className="h-4 w-4 text-brand-orange" />
            <span>info@kaltengexpo.com</span>
          </p>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.25em] text-brand-orange">NAVIGASI</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-brand-yellow">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.25em] text-brand-orange">SOCIAL MEDIA</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="inline-flex items-center gap-2 hover:text-brand-yellow"><Instagram className="h-4 w-4" /> Instagram</a></li>
            <li><a href="#" className="inline-flex items-center gap-2 hover:text-brand-yellow"><Facebook className="h-4 w-4" /> Facebook</a></li>
            <li><a href="#" className="inline-flex items-center gap-2 hover:text-brand-yellow"><Youtube className="h-4 w-4" /> Youtube</a></li>
          </ul>
          <p className="mt-6 text-xs font-bold tracking-[0.25em] text-brand-orange">WEBSITE</p>
          <p className="mt-2 text-sm">www.kaltengexpo.com</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© 2026 Kalteng Expo. All rights reserved.</p>
          <p>Pemerintah Provinsi Kalimantan Tengah</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-brand-green-deep text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle at 20% 30%, rgba(120,180,140,0.25), transparent 60%), radial-gradient(circle at 80% 70%, rgba(40,80,60,0.5), transparent 60%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <p className="text-xs font-bold tracking-[0.3em] text-brand-yellow">{eyebrow}</p>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display leading-tight">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-white/75 text-base sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
