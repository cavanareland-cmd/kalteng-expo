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

type Hotspot = {
  id: string;
  name: string;
  desc: string;
  // percentage relative to the image (0-100)
  x: number; y: number;
  color?: string;
};

const defaultHotspots: Hotspot[] = [
  { id: "gor", name: "GOR Indoor", desc: "Venue utama untuk acara seremonial, panggung & pertunjukan budaya.", x: 6, y: 56, color: "bg-brand-teal" },
  { id: "hallA", name: "Hall A", desc: "Stand premium 9×6 m (A17–A21) dan stand standar A1–A48.", x: 32, y: 58, color: "bg-brand-red" },
  { id: "hallB", name: "Hall B", desc: "Stand standar B1–B52 dengan partisi sistem & fasilitas lengkap.", x: 31, y: 78, color: "bg-brand-red" },
  { id: "umkmTop", name: "Area UMKM (Tengah)", desc: "Tenda outdoor untuk pelaku UMKM di area tengah venue.", x: 38, y: 42, color: "bg-brand-orange" },
  { id: "umkmRight", name: "Area UMKM (Timur)", desc: "Tenda outdoor UMKM di sisi timur dekat area parkir.", x: 60, y: 62, color: "bg-brand-orange" },
  { id: "pkl", name: "Area Bermain & PKL", desc: "Zona keluarga, hiburan anak, dan pedagang kaki lima.", x: 56, y: 8, color: "bg-brand-teal" },
  { id: "parkir", name: "Area Parkir", desc: "Parkir kendaraan pengunjung di sisi timur venue.", x: 84, y: 55, color: "bg-brand-yellow" },
  { id: "polda", name: "Stand POLDA", desc: "Pos pelayanan & keamanan dari Kepolisian Daerah.", x: 16, y: 42, color: "bg-brand-green-deep" },
  { id: "kodam", name: "Stand KODAM", desc: "Pos pelayanan dari Komando Daerah Militer.", x: 9, y: 75, color: "bg-brand-green-deep" },
  { id: "bpbd", name: "Stand BPBD", desc: "Posko Badan Penanggulangan Bencana Daerah.", x: 25, y: 88, color: "bg-brand-green-deep" },
  { id: "toilet", name: "Toilet & Fasilitas", desc: "Fasilitas toilet umum tersebar di area dalam dan luar.", x: 13, y: 19, color: "bg-brand-yellow" },
];

const IMG_ASPECT = 605 / 862; // width / height

function InteractiveMap({
  src, alt, hotspots, onOpen, active, setActive,
}: {
  src: string; alt: string; hotspots: Hotspot[]; onOpen: () => void;
  active: Hotspot | null; setActive: (h: Hotspot | null) => void;
}) {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ x: number; y: number; px: number; py: number; moved: boolean } | null>(null);

  const clampScale = (s: number) => Math.min(4, Math.max(1, s));
  const reset = () => { setScale(1); setPos({ x: 0, y: 0 }); setActive(null); };

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale((s) => clampScale(s + (e.deltaY < 0 ? 0.2 : -0.2)));
  };
  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    dragRef.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current || scale === 1) return;
    const dx = e.clientX - dragRef.current.x;
    const dy = e.clientY - dragRef.current.y;
    if (Math.abs(dx) + Math.abs(dy) > 4) dragRef.current.moved = true;
    setPos({ x: dragRef.current.px + dx, y: dragRef.current.py + dy });
  };
  const onPointerUp = () => { dragRef.current = null; };

  return (
    <div className="relative rounded-3xl bg-secondary border border-border overflow-hidden">
      <div
        className="relative w-full overflow-hidden touch-none select-none cursor-grab active:cursor-grabbing"
        style={{ aspectRatio: `${IMG_ASPECT}` }}
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div
          className="absolute inset-0 transition-transform duration-150 ease-out"
          style={{ transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`, transformOrigin: "center center" }}
        >
          <img src={src} alt={alt} draggable={false} className="absolute inset-0 h-full w-full object-contain" />
          {hotspots.map((h) => (
            <button
              key={h.id}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (dragRef.current?.moved) return;
                setActive(active?.id === h.id ? null : h);
              }}
              aria-label={h.name}
              className={`absolute -translate-x-1/2 -translate-y-1/2 group ${active?.id === h.id ? "z-10 scale-125" : ""}`}
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
            >
              <span className={`relative flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center`}>
                <span className={`absolute inline-flex h-full w-full rounded-full ${h.color ?? "bg-brand-teal"} opacity-75 animate-ping`} />
                <span className={`relative inline-flex h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full ${h.color ?? "bg-brand-teal"} ring-2 ring-white shadow-md`} />
              </span>
              <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-7 whitespace-nowrap rounded-md bg-foreground/90 px-2 py-0.5 text-[10px] font-semibold text-background opacity-0 group-hover:opacity-100 transition">
                {h.name}
              </span>
            </button>
          ))}
        </div>

        {/* Detail popover (fixed inside container, not transformed) */}
        {active && (
          <div className="absolute left-3 right-3 bottom-3 sm:left-auto sm:right-3 sm:max-w-xs rounded-2xl bg-background/95 backdrop-blur border border-border shadow-xl p-4 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-start gap-3">
              <span className={`mt-1 h-3 w-3 rounded-full flex-shrink-0 ${active.color ?? "bg-brand-teal"}`} />
              <div className="flex-1 min-w-0">
                <p className="font-display text-base text-brand-teal">{active.name}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{active.desc}</p>
              </div>
              <button onClick={() => setActive(null)} aria-label="Tutup" className="h-7 w-7 rounded-md hover:bg-secondary text-muted-foreground flex items-center justify-center">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
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
  const cms = useCmsValue<{ image: string; hotspots: Hotspot[] }>("denah", {
    image: denahImg,
    hotspots: defaultHotspots,
  });
  const imageSrc = cms.image || denahImg;
  const hotspots = cms.hotspots?.length ? cms.hotspots : defaultHotspots;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Hotspot | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const focusZone = (h: Hotspot) => {
    setActive(h);
    mapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageHero
        eyebrow="DENAH LOKASI"
        title="Layout & Zona Kalteng Expo 2026"
        subtitle="Halaman GOR Indoor Palangka Raya — klik titik berdenyut pada denah atau kartu zona untuk melihat detail."
      />

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div ref={mapRef} className="scroll-mt-24">
            <InteractiveMap
              src={imageSrc}
              alt="Denah Lokasi Kalteng Expo 2026"
              hotspots={hotspots}
              onOpen={() => setOpen(true)}
              active={active}
              setActive={setActive}
            />
          </div>

          <div className="mt-4 rounded-xl bg-brand-yellow/15 border border-brand-yellow/40 p-4 flex items-start gap-3">
            <Info className="h-4 w-4 text-brand-orange flex-shrink-0 mt-0.5" />
            <p className="text-xs text-foreground/80">
              Klik titik berdenyut atau kartu zona untuk detail. Gunakan zoom, scroll, atau pinch untuk memperbesar; tap layar penuh untuk melihat denah maksimal. Layout dapat berubah menyesuaikan kondisi lapangan.
            </p>
          </div>

          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-brand-teal/15 text-brand-teal flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-display">Daftar Zona & Fasilitas</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {hotspots.map((z) => {
                const isActive = active?.id === z.id;
                return (
                  <button
                    key={z.id}
                    type="button"
                    onClick={() => focusZone(z)}
                    className={`text-left rounded-2xl bg-card border p-5 transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-teal/40 ${
                      isActive ? "border-brand-teal ring-2 ring-brand-teal/30 shadow-md" : "border-border hover:border-brand-teal/40"
                    }`}
                    aria-pressed={isActive}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${z.color ?? "bg-brand-teal"}`} />
                      <p className="font-display text-lg text-brand-teal">{z.name}</p>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{z.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {open && <Lightbox src={imageSrc} alt="Denah Lokasi Kalteng Expo 2026" onClose={() => setOpen(false)} />}
      <SiteFooter />
    </div>
  );
}
