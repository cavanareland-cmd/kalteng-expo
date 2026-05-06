import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter, PageHero } from "@/components/site-footer";
import { Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: "Kontak & Pendaftaran — Kalteng Expo 2026" },
      { name: "description", content: "Informasi pendaftaran dan kontak Sekretariat Kalteng Expo 2026." },
    ],
  }),
  component: KontakPage,
});

const contacts = [
  { i: MapPin, l: "Kantor Sekretariat", v: "Jl. Raden Saleh IV No. 11B, Menteng, Jekan Raya, Palangka Raya, Kalimantan Tengah" },
  { i: Phone, l: "Pendaftaran (Rika/Putri)", v: "+62 813 6786 6677", href: "https://wa.me/6281367866677" },
  { i: Mail, l: "Email Umum", v: "info@kaltengexpo.com", href: "mailto:info@kaltengexpo.com" },
  { i: Mail, l: "Email Pendaftaran", v: "registration@kaltengexpo.com", href: "mailto:registration@kaltengexpo.com" },
  { i: Globe, l: "Website", v: "www.kaltengexpo.com", href: "https://www.kaltengexpo.com" },
];

function KontakPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageHero
        eyebrow="KONTAK & INFORMASI"
        title="Hubungi Sekretariat Kalteng Expo 2026"
        subtitle="Untuk pendaftaran booth, informasi sponsorship, dan pertanyaan umum."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {contacts.map((c) => {
              const Tag: any = c.href ? "a" : "div";
              return (
                <Tag
                  key={c.l}
                  href={c.href}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 hover:border-brand-teal/40 hover:shadow-md transition"
                >
                  <div className="h-11 w-11 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center flex-shrink-0">
                    <c.i className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-muted-foreground">{c.l.toUpperCase()}</p>
                    <p className="mt-1 font-semibold text-sm">{c.v}</p>
                  </div>
                </Tag>
              );
            })}
          </div>

          <div className="rounded-3xl bg-brand-green-deep text-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold tracking-widest text-brand-yellow">PENDAFTARAN CEPAT</p>
              <h3 className="mt-3 text-2xl sm:text-3xl font-display">Daftarkan booth Anda hari ini</h3>
              <p className="mt-4 text-white/80 text-sm leading-relaxed">
                Tim kami siap membantu Anda memilih paket sponsorship dan booth yang paling sesuai untuk bisnis Anda di Kalteng Expo 2026.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="https://wa.me/6281367866677"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange hover:brightness-110 text-foreground px-6 py-3 font-semibold transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Pendaftaran
              </a>
              <a
                href="mailto:registration@kaltengexpo.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 hover:bg-white/10 px-6 py-3 font-semibold transition"
              >
                <Mail className="h-4 w-4" /> Email Pendaftaran
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-border aspect-[16/9]">
            <iframe
              title="Lokasi Sekretariat Kalteng Expo"
              src="https://www.google.com/maps?q=Jl.+Raden+Saleh+IV+No.+11B,+Menteng,+Jekan+Raya,+Palangka+Raya&output=embed"
              loading="lazy"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
