import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter, PageHero } from "@/components/site-footer";
import { Check, Minus, ArrowRight, Phone } from "lucide-react";

export const Route = createFileRoute("/sponsorship")({
  head: () => ({
    meta: [
      { title: "Sponsorship & Booth — Kalteng Expo 2026" },
      { name: "description", content: "Paket sponsorship Diamond, Platinum, Gold, Silver, Bronze dan harga booth Kalteng Expo 2026." },
    ],
  }),
  component: SponsorshipPage,
});

const tiers = [
  { name: "Diamond", price: "Rp 350 Jt", color: "bg-brand-teal text-white", booth: "4 Booth", logo: true, gate: true, tvc: true },
  { name: "Platinum", price: "Rp 200 Jt", color: "bg-brand-green-deep text-white", booth: "3 Booth", logo: true, gate: true, tvc: true },
  { name: "Gold", price: "Rp 150 Jt", color: "bg-brand-yellow text-foreground", booth: "2 Booth", logo: true, gate: true, tvc: false },
  { name: "Silver", price: "Rp 100 Jt", color: "bg-brand-blue text-foreground", booth: "1 Booth", logo: true, gate: false, tvc: false },
  { name: "Bronze", price: "Rp 50 Jt", color: "bg-brand-orange text-foreground", booth: "1 Booth", logo: false, gate: false, tvc: false },
];

const booths = [
  {
    title: "Hall A — Stand Standard",
    price: "Rp 25 Jt",
    items: ["Partisi sistem standar", "Karpet stand standar", "1 unit meja & 2 unit kursi", "Lampu penerangan", "Daya listrik 2 Ampere (450 Watt)", "ID Card peserta"],
  },
  {
    title: "Hall B – C — Stand Standard",
    price: "Rp 22 Jt",
    items: ["Partisi sistem standar", "Karpet stand standar", "1 unit meja & 2 unit kursi", "Lampu penerangan", "Daya listrik 2 Ampere (450 Watt)", "ID Card peserta"],
  },
  {
    title: "Tenda Outdoor — Raw Space",
    price: "Rp 10 Jt",
    items: ["Tenda Sarnafil", "Flooring & karpet stand standar", "1 unit meja & 2 unit kursi", "1 unit lampu @40 Watt", "Daya listrik 2 Ampere (450 Watt)", "ID Card peserta"],
  },
  {
    title: "Hall A No. 17–21 (9×6 m)",
    price: "Rp 150 Jt / No.",
    items: ["Partisi sistem standar", "Karpet stand standar", "5 unit meja & 10 unit kursi", "Lampu penerangan", "Daya listrik 10 Ampere (2200 Watt)", "ID Card peserta"],
  },
];

function Cell({ ok }: { ok: boolean }) {
  return ok
    ? <Check className="h-5 w-5 text-brand-teal mx-auto" />
    : <Minus className="h-5 w-5 text-muted-foreground/50 mx-auto" />;
}

function SponsorshipPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageHero
        eyebrow="SPONSORSHIP & BOOTH"
        title="Paket Sponsorship & Harga Booth"
        subtitle="Pilih paket yang sesuai untuk memaksimalkan eksposur brand Anda di Kalteng Expo 2026."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl">Paket Sponsorship</h2>
          <p className="mt-2 text-muted-foreground text-sm">Lima tier sponsorship dengan benefit publikasi dan visibilitas berbeda.</p>

          {/* Cards (mobile + desktop) */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {tiers.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col">
                <div className={`${t.color} px-5 py-4`}>
                  <p className="font-display text-xl">{t.name}</p>
                  <p className="text-2xl font-bold mt-1">{t.price}</p>
                </div>
                <ul className="p-5 space-y-2 text-sm flex-1">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-teal" /> {t.booth} pameran</li>
                  <li className="flex items-center gap-2">
                    {t.logo ? <Check className="h-4 w-4 text-brand-teal" /> : <Minus className="h-4 w-4 text-muted-foreground/50" />}
                    Logo di seluruh media publikasi
                  </li>
                  <li className="flex items-center gap-2">
                    {t.gate ? <Check className="h-4 w-4 text-brand-teal" /> : <Minus className="h-4 w-4 text-muted-foreground/50" />}
                    Logo di Front Entrance Gate LED
                  </li>
                  <li className="flex items-center gap-2">
                    {t.tvc ? <Check className="h-4 w-4 text-brand-teal" /> : <Minus className="h-4 w-4 text-muted-foreground/50" />}
                    TVC di Front Entrance Gate LED
                  </li>
                </ul>
              </div>
            ))}
          </div>

          {/* Comparison table desktop */}
          <div className="mt-10 hidden lg:block overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left px-5 py-4 font-semibold">Benefit</th>
                  {tiers.map((t) => <th key={t.name} className="px-5 py-4 font-display text-base">{t.name}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-5 py-3 font-medium">Investasi</td>
                  {tiers.map((t) => <td key={t.name} className="px-5 py-3 text-center font-semibold text-brand-teal">{t.price}</td>)}
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">Space Pameran</td>
                  {tiers.map((t) => <td key={t.name} className="px-5 py-3 text-center">{t.booth}</td>)}
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">Logo di Media Publikasi</td>
                  {tiers.map((t) => <td key={t.name} className="px-5 py-3"><Cell ok={t.logo} /></td>)}
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">Logo di Front Entrance Gate LED</td>
                  {tiers.map((t) => <td key={t.name} className="px-5 py-3"><Cell ok={t.gate} /></td>)}
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">TVC di Front Entrance Gate LED</td>
                  {tiers.map((t) => <td key={t.name} className="px-5 py-3"><Cell ok={t.tvc} /></td>)}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl bg-brand-yellow/15 border border-brand-yellow/40 p-4 text-xs text-foreground/80 leading-relaxed">
            <p className="font-semibold">Catatan:</p>
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li>Paket belum termasuk pajak.</li>
              <li>Desain dan layout akan disesuaikan secara proporsional.</li>
              <li>TVC ditampirkan sela event berlangsung secara proporsional, durasi maksimum 2 menit, materi dalam bentuk format MOV disediakan oleh pihak sponsor.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl">Harga & Fasilitas Booth</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {booths.map((b) => (
              <div key={b.title} className="rounded-2xl bg-card border border-border p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold">{b.title}</h3>
                  <span className="rounded-full bg-brand-orange text-foreground px-3 py-1 text-sm font-bold whitespace-nowrap">{b.price}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {b.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-card border border-border p-5 text-xs text-muted-foreground">
            <p className="font-semibold text-foreground">Fasilitas Stand Standard tidak termasuk:</p>
            <p className="mt-1">Desain & bentuk khusus · Tambahan printing digital · Penambahan fasilitas · Penambahan daya listrik. Harga termasuk PPN dan PPH.</p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-3xl bg-brand-green-deep text-white p-8 sm:p-10 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest text-brand-yellow">BOOTH DESAIN KHUSUS</p>
              <h3 className="mt-3 text-2xl sm:text-3xl">Butuh booth dengan desain khusus?</h3>
              <p className="mt-3 text-white/80 text-sm">Hubungi Official Contractor kami: <span className="font-semibold text-white">AKS Solution</span> — Alan: +62 821-5704-9226</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="https://wa.me/6282157049226" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand-orange hover:brightness-110 text-foreground px-6 py-3 font-semibold transition">
                <Phone className="h-4 w-4" /> Hubungi AKS Solution
              </a>
              <a href="https://wa.me/6281367866677" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 hover:bg-white/10 px-6 py-3 font-semibold transition">
                Daftar Sekarang <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
