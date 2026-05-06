import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter, PageHero } from "@/components/site-footer";
import { Store, Building2, Handshake, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/kegiatan")({
  head: () => ({
    meta: [
      { title: "Bentuk Kegiatan — Kalteng Expo 2026" },
      { name: "description", content: "Pameran, stand pelayanan OPD/BUMD, dan business matching di Kalteng Expo 2026." },
    ],
  }),
  component: KegiatanPage,
});

const kegiatan = [
  {
    icon: Store,
    title: "Pameran",
    items: [
      "Produk unggulan daerah (kuliner, fashion, dan kerajinan)",
      "Produk ramah lingkungan dan berkelanjutan Kalimantan Tengah",
      "Produk yang mendukung pemberdayaan masyarakat dan ekonomi kerakyatan",
      "Capaian program strategis pemerintah daerah melalui stand OPD",
    ],
  },
  {
    icon: Building2,
    title: "Stand Pelayanan OPD, BUMD & Instansi Vertikal",
    items: [
      "Pelayanan kesehatan",
      "Perizinan",
      "Pajak kendaraan bermotor",
      "Administrasi kependudukan",
      "Perbankan dan layanan BUMD",
    ],
  },
  {
    icon: Handshake,
    title: "Business to Business (B2B)",
    items: [
      "Pertemuan antar pelaku bisnis dan akademisi",
      "Memaksimalkan transaksi antar perusahaan kecil maupun besar",
      "Interaksi ekonomi secara langsung dan terarah",
    ],
  },
];

function KegiatanPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageHero
        eyebrow="BENTUK KEGIATAN"
        title="Tiga Pilar Utama Kalteng Expo 2026"
        subtitle="Pameran produk unggulan, pelayanan publik OPD/BUMD, dan ruang business matching dalam satu kegiatan terpadu."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kegiatan.map((k, i) => (
            <div key={k.title} className="rounded-2xl bg-card border border-border p-7 hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center">
                  <k.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight">{k.title}</h3>
              <ul className="mt-4 space-y-2">
                {k.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-brand-orange flex-shrink-0 mt-0.5" /> {it}
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
