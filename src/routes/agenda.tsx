import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter, PageHero } from "@/components/site-footer";
import { Calendar, Clock, MapPin } from "lucide-react";

export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title: "Jadwal & Agenda — Kalteng Expo 2026" },
      { name: "description", content: "Jadwal pelaksanaan harian Kalteng Expo 17–23 Mei 2026." },
    ],
  }),
  component: AgendaPage,
});

const days = [
  { d: "Hari 1", date: "Sab, 17 Mei 2026", items: [
    { t: "13.00", a: "Persiapan dan Booth Setup" },
    { t: "14.00", a: "Open Booth" },
    { t: "19.00", a: "Pembukaan Pameran" },
    { t: "22.00", a: "Penutupan Hari 1" },
  ] },
  ...[2, 3, 4, 5, 6].map((n) => ({
    d: `Hari ${n}`, date: "",
    items: [
      { t: "13.00", a: "Open Booth" },
      { t: "14.00", a: "Proses Pameran" },
      { t: "22.00", a: `Penutupan Hari ${n}` },
    ],
  })),
  { d: "Hari 7", date: "Sab, 23 Mei 2026", items: [
    { t: "13.00", a: "Open Booth" },
    { t: "14.00", a: "Proses Pameran" },
    { t: "22.00", a: "Penutupan Kegiatan Kalteng Expo 2026" },
  ] },
];

function AgendaPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageHero
        eyebrow="JADWAL & AGENDA"
        title="Jadwal Pelaksanaan Kalteng Expo 2026"
        subtitle="7 hari penuh kegiatan, dari pembukaan hingga penutupan."
      />

      <section className="bg-background py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-4">
          {[
            { i: Calendar, l: "Tanggal", v: "17 – 23 Mei 2026" },
            { i: Clock, l: "Waktu", v: "12.00 – 22.00 WIB" },
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
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-4">
          {days.map((d) => (
            <div key={d.d} className="rounded-2xl bg-card border border-border overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-4 bg-brand-green-deep text-white">
                <h3 className="text-xl font-display">{d.d}</h3>
                {d.date && <p className="text-sm text-white/70">{d.date}</p>}
              </div>
              <ul className="divide-y divide-border">
                {d.items.map((it) => (
                  <li key={it.t + it.a} className="flex items-center gap-5 px-6 py-3.5">
                    <span className="font-display text-brand-orange w-16">{it.t}</span>
                    <span className="text-sm">{it.a}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
