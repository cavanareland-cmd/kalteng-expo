import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

export const NAV = [
  { label: "Beranda", to: "/" },
  { label: "Tentang", to: "/tentang" },
  { label: "Kegiatan", to: "/kegiatan" },
  { label: "Agenda", to: "/agenda" },
  { label: "Denah Lokasi", to: "/denah" },
  { label: "Sponsorship & Booth", to: "/sponsorship" },
  { label: "Kontak", to: "/kontak" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-brand-green-deep/95 backdrop-blur border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Kalteng Expo 2026" className="h-10 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm text-white/80">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-brand-yellow transition-colors"
              activeProps={{ className: "text-brand-yellow font-semibold" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/6281367866677"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-orange hover:brightness-110 text-foreground px-4 py-2 text-sm font-semibold transition-colors"
          >
            Daftar Sekarang
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-brand-green-deep">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-white/85 hover:bg-white/10"
                activeProps={{ className: "bg-white/10 text-brand-yellow font-semibold" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
