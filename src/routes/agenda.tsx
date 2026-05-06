import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter, PageHero } from "@/components/site-footer";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";

export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title: "Jadwal & Agenda — Kalteng Expo 2026" },
      { name: "description", content: "Jadwal pelaksanaan harian Kalteng Expo 17–23 Mei 2026 lengkap dengan tanggal, jam, dan nama kegiatan." },
    ],
  }),
  component: AgendaPage,
});

type Item = { t: string; a: string; highlight?: boolean };

const days: { d: string; date: string; day: string; items: Item[] }[] = [
  {
    d: "Hari 1",
    date: "17 Mei 2026",
    day: "Minggu",
    items: [
      { t: "13.00", a: "Persiapan dan Booth Setup" },
      { t: "14.00", a: "Open Booth — Pameran Dibuka" },
      { t: "19.00", a: "Pembukaan Resmi Kalteng Expo 2026", highlight: true },
      { t: "20.00", a: "Cultural Performance — Tari Pembukaan" },
      { t: "22.00", a: "Penutupan Hari 1" },
    ],
  },
  {
    d: "Hari 2",
    date: "18 Mei 2026",
    day: "Senin",
    items: [
      { t: "13.00", a: "Open Booth" },
      { t: "14.00", a: "Proses Pameran — UMKM & OPD" },
      { t: "16.00", a: "Workshop UMKM Naik Kelas" },
      { t: "19.30", a: "Cultural Performance — Seni Tradisional Dayak" },
      { t: "22.00", a: "Penutupan Hari 2" },
    ],
  },
  {
    d: "Hari 3",
    date: "19 Mei 2026",
    day: "Selasa",
    items: [
      { t: "13.00", a: "Open Booth" },
      { t: "14.00", a: "Proses Pameran" },
      { t: "15.00", a: "Business Matching (B2B) Sesi 1", highlight: true },
      { t: "19.30", a: "Entertainment — Live Music" },
      { t: "22.00", a: "Penutupan Hari 3" },
    ],
  },
  {
    d: "Hari 4",
    date: "20 Mei 2026",
    day: "Rabu",
    items: [
      { t: "13.00", a: "Open Booth" },
      { t: "14.00", a: "Proses Pameran" },
      { t: "16.00", a: "Diskusi Investasi Daerah" },
      { t: "19.30", a: "Cultural Performance" },
      { t: "22.00", a: "Penutupan Hari 4" },
    ],
  },
  {
    d: "Hari 5",
    date: "21 Mei 2026",
    day: "Kamis",
    items: [
      { t: "13.00", a: "Open Booth" },
      { t: "14.00", a: "Proses Pameran" },
      { t: "15.00", a: "Business Matching (B2B) Sesi 2", highlight: true },
      { t: "19.30", a: "Entertainment — Pertunjukan Rakyat" },
      { t: "22.00", a: "Penutupan Hari 5" },
    ],
  },
  {
    d: "Hari 6",
    date: "22 Mei 2026",
    day: "Jumat",
    items: [
      { t: "13.00", a: "Open Booth" },
      { t: "14.00", a: "Proses Pameran" },
      { t: "16.00", a: "Workshop Ekonomi Kreatif" },
      { t: "19.30", a: "Cultural Performance" },
      { t: "22.00", a: "Penutupan Hari 6" },
    ],
  },
  {
    d: "Hari 7",
    date: "23 Mei 2026",
    day: "Sabtu",
    items: [
      { t: "13.00", a: "Open Booth" },
      { t: "14.00", a: "Proses Pameran" },
      { t: "19.00", a: "Pengumuman Pemenang Booth Terbaik" },
      { t: "20.00", a: "Closing Ceremony Kalteng Expo 2026", highlight: true },
      { t: "22.00", a: "Penutupan Resmi Kegiatan" },
    ],
  },
];

function AgendaPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageHero
        eyebrow="JADWAL & AGENDA"
        title="Jadwal Pelaksanaan Kalteng Expo 2026"
        subtitle="7 hari penuh kegiatan, 17–23 Mei 2026 — pameran, workshop, business matching, dan cultural performance."
      />

      <section className="bg-background py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-4">
          {[
            { i: Calendar, l: "Tanggal", v: "17 – 23 Mei 2026" },
            { i: Clock, l: "Waktu Operasional", v: "12.00 – 22.00 WIB" },
            { i: MapPin, l: "Tempat", v: "Halaman GOR Indoor, Palangka Raya" },
          ].map((x) => (
            <div key={x.l} className="rounded-2xl bg-secondary border border-border p-5 flex items-center gap-3">
              <x.i className="h-5 w-5 text-brand-orange" />
              <div>
                <p className="text-[10px] font-bold tracking-widest text-muted-foreground">{x.l.toUpperCase()}</p>
                <p className="text-sm font-semibold">{x.v}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-5">
          {days.map((d, i) => (
            <div key={d.d} className="rounded-2xl bg-card border border-border overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-4 bg-brand-green-deep text-white">
                <div className="flex items-center gap-4">
                  <span className="font-display text-3xl text-brand-yellow">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-lg font-display">{d.d}</h3>
                    <p className="text-xs text-white/70">{d.day}, {d.date}</p>
                  </div>
                </div>
                <span className="text-xs text-white/60">12.00 – 22.00 WIB</span>
              </div>
              <ul className="divide-y divide-border">
                {d.items.map((it) => (
                  <li
                    key={it.t + it.a}
                    className={`flex items-center gap-5 px-6 py-3.5 ${it.highlight ? "bg-brand-yellow/10" : ""}`}
                  >
                    <span className="font-display text-brand-orange w-16 flex-shrink-0">{it.t}</span>
                    <span className="text-sm flex items-center gap-2">
                      {it.highlight && <Sparkles className="h-4 w-4 text-brand-orange" />}
                      <span className={it.highlight ? "font-semibold" : ""}>{it.a}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="text-xs text-muted-foreground text-center pt-4">
            *Jadwal dapat berubah sewaktu-waktu menyesuaikan kondisi di lapangan.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
