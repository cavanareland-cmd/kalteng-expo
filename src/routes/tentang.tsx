import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter, PageHero } from "@/components/site-footer";
import { Target, Compass, CheckCircle2, Users, Building2, Megaphone, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/tentang")({
  head: () => ({
    meta: [
      { title: "Tentang — Kalteng Expo 2026" },
      { name: "description", content: "Latar belakang, maksud, dan tujuan Kalteng Expo 2026." },
    ],
  }),
  component: TentangPage,
});

const tujuan = [
  "Meningkatkan produk unggulan daerah",
  "Memperluas jaringan pemasaran dan peluang usaha",
  "Menarik investasi di Kalimantan Tengah",
  "Mendorong pertumbuhan ekonomi daerah",
  "Meningkatkan daya saing pelaku usaha",
  "Melestarikan dan memperkenalkan budaya lokal",
  "Membuka ruang konsultasi dunia kerja",
];

const sasaran = [
  "Pejabat Pemerintah Pusat",
  "Para Pemangku Kebijakan Ekonomi (Nasional & Daerah)",
  "Para Akademisi",
  "Pelajar dan Mahasiswa",
  "Para Pelaku Usaha",
  "Masyarakat Umum",
];

const peserta = [
  "Kementerian dan Lembaga Terkait",
  "Pemerintah Provinsi, Kabupaten dan Kota",
  "BUMN dan BUMD",
  "Instansi Pendidikan & Akademisi (swasta/negeri)",
  "Perusahaan Swasta Nasional & Daerah",
  "Pelaku Usaha Kalimantan Tengah",
  "Para Pengusaha Muda",
];

const promosi = {
  Media: ["Website Official Kalteng Expo", "Media cetak", "Media elektronik", "Media sosial"],
  Strategi: [
    "Penyebaran brosur dan leaflet",
    "Pengumuman melalui website dan media sosial",
    "Kerjasama dengan media massa",
    "Sosialisasi melalui komunitas dan organisasi terkait",
    "Media videotron setiap instansi",
  ],
  "Public Relation": [
    "Pengiriman surat undangan langsung ke lembaga terkait",
    "Konferensi pers dan press release",
  ],
};

function TentangPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageHero
        eyebrow="TENTANG KAMI"
        title="Tentang Kalteng Expo 2026"
        subtitle="Etalase utama potensi Kalimantan Tengah untuk perdagangan, investasi, budaya, dan ekonomi kerakyatan."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-3 rounded-2xl bg-secondary border border-border p-8">
            <div className="flex items-center gap-3">
              <Compass className="h-6 w-6 text-brand-teal" />
              <h2 className="text-2xl sm:text-3xl">Latar Belakang</h2>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Kalteng Expo merupakan agenda tahunan yang diselenggarakan oleh Pemerintah Provinsi Kalimantan Tengah sebagai upaya mempromosikan potensi daerah meliputi sektor perdagangan, perindustrian, perekonomian, pertanian, perikanan, perkebunan, kehutanan, sumber daya alam, pariwisata, jasa konstruksi, dan investasi kepada masyarakat luas. Kegiatan ini dilatarbelakangi bersamaan dengan hari jadi Kalimantan Tengah sebagai promosi dan pemasaran produk unggulan daerah, meningkatkan daya saing, mendorong pertumbuhan ekonomi, pelestarian budaya lokal, serta mempertemukan pelaku usaha (IKM/UKM), pemerintah, dan investor.
            </p>
          </div>

          <div className="rounded-2xl bg-card border border-border p-8 lg:col-span-1">
            <Target className="h-6 w-6 text-brand-orange" />
            <h3 className="mt-3 text-xl font-bold">Maksud</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Sebagai sarana mempromosikan potensi daerah Kalimantan Tengah kepada masyarakat luas baik di tingkat lokal, nasional, maupun internasional, serta menjadi wadah pertemuan antara pelaku usaha, pemerintah, dan investor.
            </p>
          </div>

          <div className="rounded-2xl bg-brand-green-deep text-white p-8 lg:col-span-2">
            <CheckCircle2 className="h-6 w-6 text-brand-yellow" />
            <h3 className="mt-3 text-xl font-bold">Tujuan</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm">
              {tujuan.map((t) => (
                <li key={t} className="flex items-start gap-2 text-white/85">
                  <CheckCircle2 className="h-4 w-4 text-brand-yellow flex-shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-card border border-border p-8">
            <Users className="h-6 w-6 text-brand-teal" />
            <h3 className="mt-3 text-xl font-bold">Sasaran Pengunjung</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {sasaran.map((s) => <li key={s} className="flex gap-2"><span className="text-brand-teal">•</span> {s}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl bg-card border border-border p-8">
            <Building2 className="h-6 w-6 text-brand-orange" />
            <h3 className="mt-3 text-xl font-bold">Peserta Kegiatan</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {peserta.map((s) => <li key={s} className="flex gap-2"><span className="text-brand-orange">•</span> {s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Megaphone className="h-6 w-6 text-brand-red" />
            <h2 className="text-2xl sm:text-3xl">Strategi Promosi</h2>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {Object.entries(promosi).map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-secondary border border-border p-6">
                <p className="text-xs font-bold tracking-widest text-brand-teal">{k.toUpperCase()}</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {v.map((i) => <li key={i} className="flex gap-2"><span className="text-brand-orange">•</span> {i}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-brand-teal text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="text-2xl font-bold">Tertarik bergabung sebagai peserta?</h3>
              <p className="mt-2 text-white/85 text-sm">Lihat paket booth & sponsorship kami.</p>
            </div>
            <Link to="/sponsorship" className="inline-flex items-center gap-2 rounded-full bg-brand-orange hover:brightness-110 text-foreground px-6 py-3 font-semibold transition">
              Lihat Sponsorship <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
