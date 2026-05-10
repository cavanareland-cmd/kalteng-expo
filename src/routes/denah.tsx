import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter, PageHero } from "@/components/site-footer";
import { MapPin, Info, ZoomIn, ZoomOut, RotateCcw, Maximize2, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import denahImg from "@/assets/denah-kalteng-expo-2026.png";
import { useCmsValue } from "@/lib/cms";

export const Route = createFileRoute("/denah")({
  head: () => ({
    meta: [
      { title: "Denah Lokasi — Kalteng Expo 2026" },
      { name: "description", content: "Denah interaktif Hall A, Hall B, area UMKM, dan fasilitas Kalteng Expo 2026 di Halaman GOR Indoor Palangka Raya." },
    ],
  }),
  component: DenahPage,
});

const defaultZones = [
  { name: "Hall A", desc: "Stand premium 9×6 m (A17–A21) dan stand standar A1–A48." },
  { name: "Hall B", desc: "Stand standar B1–B52 dengan partisi sistem & fasilitas lengkap." },
  { name: "Area UMKM", desc: "Tenda outdoor untuk pelaku UMKM di sekeliling hall." },
  { name: "GOR Indoor", desc: "Venue utama untuk acara seremonial & panggung." },
  { name: "Area Bermain & PKL", desc: "Zona keluarga, kuliner & hiburan anak." },
  { name: "Area Parkir", desc: "Parkir kendaraan pengunjung di sisi timur venue." },
  { name: "Stand Instansi", desc: "POLDA, KODAM, BPBD dan instansi vertikal lainnya." },
  { name: "Toilet & Fasilitas", desc: "Tersebar di area dalam dan luar venue." },
];

function InteractiveMap({ src, alt, onOpen }: { src: string; alt: string; onOpen: () => void }) {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ x: number; y: number; px: number; py: number } | null>(null);

  const clampScale = (s: number) => Math.min(4, Math.max(1, s));
  const reset = () => { setScale(1); setPos({ x: 0, y: 0 }); };

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale((s) => clampScale(s + (e.deltaY < 0 ? 0.2 : -0.2)));
  };
  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current || scale === 1) return;
    setPos({
      x: dragRef.current.px + (e.clientX - dragRef.current.x),
      y: dragRef.current.py + (e.clientY - dragRef.current.y),
    });
  };
  const onPointerUp = () => { dragRef.current = null; };

  return (
    <div className="relative rounded-3xl bg-secondary border border-border overflow-hidden group">
      <div
        className="relative w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[16/10] overflow-hidden touch-none select-none cursor-grab active:cursor-grabbing"
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="absolute inset-0 h-full w-full object-contain transition-transform duration-150 ease-out"
          style={{ transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`, transformOrigin: "center center" }}
        />
      </div>

      <div className="absolute top-3 right-3 flex flex-col gap-2 bg-background/90 backdrop-blur rounded-xl border border-border p-1.5 shadow-lg">
        <button onClick={() => setScale((s) => clampScale(s + 0.3))} aria-label="Perbesar" className="h-9 w-9 rounded-lg hover:bg-brand-teal hover:text-white text-foreground flex items-center justify-center transition">
          <ZoomIn className="h-4 w-4" />
        </button>
        <button onClick={() => setScale((s) => clampScale(s - 0.3))} aria-label="Perkecil" className="h-9 w-9 rounded-lg hover:bg-brand-teal hover:text-white text-foreground flex items-center justify-center transition">
          <ZoomOut className="h-4 w-4" />
        </button>
        <button onClick={reset} aria-label="Reset" className="h-9 w-9 rounded-lg hover:bg-brand-teal hover:text-white text-foreground flex items-center justify-center transition">
          <RotateCcw className="h-4 w-4" />
        </button>
        <button onClick={onOpen} aria-label="Layar penuh" className="h-9 w-9 rounded-lg hover:bg-brand-orange hover:text-foreground text-foreground flex items-center justify-center transition">
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>

      <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur rounded-full border border-border px-3 py-1 text-xs font-semibold">
        {Math.round(scale * 100)}%
      </div>
    </div>
  );
}

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in" onClick={onClose}>
      <button aria-label="Tutup" className="absolute top-4 right-4 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition" onClick={onClose}>
        <X className="h-5 w-5" />
      </button>
      <img src={src} alt={alt} className="max-h-full max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

function DenahPage() {
  const cms = useCmsValue<{ image: string; zones: { name: string; desc: string }[] }>("denah", {
    image: denahImg,
    zones: defaultZones,
  });
  const imageSrc = cms.image || denahImg;
  const zones = cms.zones?.length ? cms.zones : defaultZones;
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageHero
        eyebrow="DENAH LOKASI"
        title="Layout & Zona Kalteng Expo 2026"
        subtitle="Halaman GOR Indoor Palangka Raya — Hall A, Hall B, Area UMKM, dan fasilitas pendukung. Geser, zoom, atau buka layar penuh untuk melihat lebih detail."
      />

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <InteractiveMap src={imageSrc} alt="Denah Lokasi Kalteng Expo 2026" onOpen={() => setOpen(true)} />

          <div className="mt-4 rounded-xl bg-brand-yellow/15 border border-brand-yellow/40 p-4 flex items-start gap-3">
            <Info className="h-4 w-4 text-brand-orange flex-shrink-0 mt-0.5" />
            <p className="text-xs text-foreground/80">
              Gunakan tombol zoom, scroll mouse, atau cubit (pinch) di layar sentuh untuk memperbesar. Tap ikon layar penuh untuk melihat denah dalam ukuran maksimal. Layout dapat berubah menyesuaikan kondisi lapangan.
            </p>
          </div>

          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-brand-teal/15 text-brand-teal flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-display">Zona & Fasilitas</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {zones.map((z) => (
                <div key={z.name} className="rounded-2xl bg-card border border-border p-5 hover:border-brand-teal/40 hover:shadow-md transition">
                  <p className="font-display text-lg text-brand-teal">{z.name}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{z.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {open && <Lightbox src={imageSrc} alt="Denah Lokasi Kalteng Expo 2026" onClose={() => setOpen(false)} />}
      <SiteFooter />
    </div>
  );
}
