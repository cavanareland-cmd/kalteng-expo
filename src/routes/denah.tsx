import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter, PageHero } from "@/components/site-footer";
import { MapPin, Info } from "lucide-react";

export const Route = createFileRoute("/denah")({
  head: () => ({
    meta: [
      { title: "Denah Lokasi — Kalteng Expo 2026" },
      { name: "description", content: "Denah lokasi Hall A, Hall B, area bermain, dan fasilitas Kalteng Expo 2026." },
    ],
  }),
  component: DenahPage,
});

const zones = [
  { name: "Hall A", desc: "Stand standar premium dan stand khusus 9×6 m (No. 17–21)." },
  { name: "Hall B", desc: "Stand standar Hall B dengan partisi sistem standar dan fasilitas lengkap." },
  { name: "Hall C", desc: "Stand standar Hall C dengan kapasitas tambahan untuk pelaku usaha." },
  { name: "Tenda Outdoor", desc: "Raw space tenda Sarnafil dengan flooring dan karpet." },
  { name: "Area Bermain", desc: "Zona keluarga dan hiburan anak selama 7 hari kegiatan." },
  { name: "Toilet & Fasilitas Umum", desc: "Tersebar di area dalam dan luar venue." },
];

function DenahPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageHero
        eyebrow="DENAH LOKASI"
        title="Layout & Zona Kalteng Expo 2026"
        subtitle="Halaman GOR Indoor Palangka Raya — Hall A, Hall B–C, area bermain, dan tenda outdoor."
      />

      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-secondary border border-border aspect-[16/9] overflow-hidden flex items-center justify-center">
            <div className="text-center p-10">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-brand-teal/15 text-brand-teal flex items-center justify-center">
                <MapPin className="h-7 w-7" />
              </div>
              <p className="mt-5 text-lg font-bold">Denah Lokasi Kalteng Expo 2026</p>
              <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                Visualisasi denah Hall A, Hall B, dan area pendukung di Halaman GOR Indoor Palangka Raya.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-brand-yellow/15 border border-brand-yellow/40 p-4 flex items-start gap-3">
            <Info className="h-4 w-4 text-brand-orange flex-shrink-0 mt-0.5" />
            <p className="text-xs text-foreground/80">
              Gambar hanya ilustrasi dan dapat berubah sewaktu-waktu menyesuaikan dengan kondisi dan keadaan tempat.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {zones.map((z) => (
              <div key={z.name} className="rounded-2xl bg-card border border-border p-6 hover:border-brand-teal/40 transition">
                <p className="font-display text-xl text-brand-teal">{z.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{z.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
