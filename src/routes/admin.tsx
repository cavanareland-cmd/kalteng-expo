import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/lib/cms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, LogOut, Plus, Save, Trash2, Upload, Copy } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin CMS — Kalteng Expo 2026" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: AdminPage,
});

const SUGGESTED_KEYS = [
  "home.hero", "home.welcome", "home.event_info", "home.highlights", "home.stats", "home.cta", "home.sponsors",
  "tentang", "agenda", "kegiatan", "denah", "sponsorship", "kontak",
  "site.header", "site.footer",
];

function AdminPage() {
  const { isAdmin, userId, loading } = useAdminAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-6 w-6 animate-spin" /></div>;
  }
  if (!userId) return <LoginForm />;
  if (!isAdmin) return <NotAdmin />;
  return <Dashboard />;
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email, password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) throw error;
        toast.success("Akun dibuat. Cek email untuk verifikasi (jika diaktifkan).");
      }
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <form onSubmit={submit} className="w-full max-w-sm bg-card border rounded-2xl p-6 space-y-4 shadow-lg">
        <div>
          <h1 className="text-2xl font-bold">Admin CMS</h1>
          <p className="text-sm text-muted-foreground">Kalteng Expo 2026</p>
        </div>
        <Input type="email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input type="password" required minLength={6} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <Button type="submit" className="w-full" disabled={busy}>
          {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : mode === "login" ? "Masuk" : "Daftar"}
        </Button>
        <button type="button" className="text-xs text-muted-foreground hover:underline w-full text-center"
          onClick={() => setMode(mode === "login" ? "signup" : "login")}>
          {mode === "login" ? "Belum punya akun? Daftar" : "Sudah punya akun? Masuk"}
        </button>
      </form>
    </div>
  );
}

function NotAdmin() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold">Akses Ditolak</h1>
        <p className="text-muted-foreground">
          Akun Anda belum memiliki role <code className="bg-muted px-1 rounded">admin</code>.
          Tambahkan baris di tabel <code className="bg-muted px-1 rounded">user_roles</code> dengan role <code>admin</code> untuk akun Anda.
        </p>
        <Button variant="outline" onClick={() => supabase.auth.signOut()}>
          <LogOut className="h-4 w-4 mr-2" /> Keluar
        </Button>
      </div>
    </div>
  );
}

type Row = { key: string; value: any; updated_at: string };

function Dashboard() {
  const [rows, setRows] = useState<Row[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const [keyDraft, setKeyDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(true);

  async function refresh() {
    setLoading(true);
    const { data, error } = await supabase.from("site_content").select("*").order("key");
    if (error) toast.error(error.message);
    setRows((data as Row[]) ?? []);
    setLoading(false);
  }
  useEffect(() => { refresh(); }, []);

  function pick(key: string) {
    const row = rows.find(r => r.key === key);
    setSelected(key);
    setKeyDraft(key);
    setDraft(JSON.stringify(row?.value ?? {}, null, 2));
  }

  function newKey() {
    setSelected("__new__");
    setKeyDraft("");
    setDraft("{\n  \n}");
  }

  async function save() {
    let parsed: any;
    try { parsed = JSON.parse(draft); }
    catch (e: any) { toast.error("JSON tidak valid: " + e.message); return; }
    if (!keyDraft.trim()) { toast.error("Key wajib diisi"); return; }
    setBusy(true);
    const { error } = await supabase.from("site_content").upsert({ key: keyDraft.trim(), value: parsed });
    setBusy(false);
    if (error) { toast.error(error.message); return; }
    toast.success("Tersimpan");
    await refresh();
    setSelected(keyDraft.trim());
  }

  async function remove() {
    if (!selected || selected === "__new__") return;
    if (!confirm(`Hapus konten "${selected}"?`)) return;
    const { error } = await supabase.from("site_content").delete().eq("key", selected);
    if (error) { toast.error(error.message); return; }
    toast.success("Dihapus");
    setSelected(null); setDraft(""); setKeyDraft("");
    await refresh();
  }

  async function uploadImage(file: File) {
    const path = `${Date.now()}-${file.name.replace(/[^a-z0-9.\-_]/gi, "_")}`;
    const { error } = await supabase.storage.from("cms-images").upload(path, file, { upsert: false });
    if (error) { toast.error(error.message); return; }
    const { data } = supabase.storage.from("cms-images").getPublicUrl(path);
    await navigator.clipboard.writeText(data.publicUrl);
    toast.success("Diupload — URL disalin ke clipboard");
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">Admin CMS — Kalteng Expo 2026</h1>
            <p className="text-xs text-muted-foreground">Kelola konten semua halaman</p>
          </div>
          <div className="flex gap-2">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <Button asChild variant="outline" size="sm"><span><Upload className="h-4 w-4 mr-1" /> Upload Gambar</span></Button>
              <input type="file" accept="image/*" className="hidden" onChange={e => {
                const f = e.target.files?.[0]; if (f) uploadImage(f); e.target.value = "";
              }} />
            </label>
            <Button variant="outline" size="sm" onClick={() => supabase.auth.signOut()}>
              <LogOut className="h-4 w-4 mr-1" /> Keluar
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 grid lg:grid-cols-[280px_1fr] gap-6">
        <aside className="bg-card border rounded-xl p-3 space-y-1 h-fit">
          <Button onClick={newKey} variant="default" size="sm" className="w-full mb-2">
            <Plus className="h-4 w-4 mr-1" /> Konten Baru
          </Button>
          {loading && <p className="text-xs text-muted-foreground p-2">Memuat…</p>}
          {!loading && rows.length === 0 && <p className="text-xs text-muted-foreground p-2">Belum ada konten.</p>}
          {rows.map(r => (
            <button key={r.key}
              onClick={() => pick(r.key)}
              className={`w-full text-left text-sm px-3 py-2 rounded-md hover:bg-muted truncate ${selected === r.key ? "bg-muted font-semibold" : ""}`}>
              {r.key}
            </button>
          ))}

          <div className="mt-4 pt-4 border-t">
            <p className="text-[10px] font-bold tracking-wider text-muted-foreground px-2">SARAN KEY</p>
            {SUGGESTED_KEYS.map(k => (
              <button key={k} onClick={() => { setSelected("__new__"); setKeyDraft(k); setDraft("{\n  \n}"); }}
                className="w-full text-left text-xs px-3 py-1.5 rounded-md hover:bg-muted text-muted-foreground truncate">
                + {k}
              </button>
            ))}
          </div>
        </aside>

        <main className="bg-card border rounded-xl p-5">
          {!selected ? (
            <div className="text-center text-muted-foreground py-20">
              <p>Pilih konten di kiri atau klik <strong>Konten Baru</strong>.</p>
              <p className="text-xs mt-2">Setiap konten berbentuk JSON bebas — sesuai yang dibaca oleh halaman terkait.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold tracking-wider text-muted-foreground">KEY</label>
                <Input value={keyDraft} onChange={e => setKeyDraft(e.target.value)} placeholder="contoh: home.hero" />
              </div>
              <div>
                <label className="text-xs font-bold tracking-wider text-muted-foreground flex items-center justify-between">
                  <span>VALUE (JSON)</span>
                  <button type="button" className="text-[10px] inline-flex items-center gap-1 hover:underline"
                    onClick={() => { navigator.clipboard.writeText(draft); toast.success("JSON disalin"); }}>
                    <Copy className="h-3 w-3" /> Salin
                  </button>
                </label>
                <Textarea value={draft} onChange={e => setDraft(e.target.value)}
                  className="font-mono text-xs min-h-[400px]" spellCheck={false} />
              </div>
              <div className="flex gap-2">
                <Button onClick={save} disabled={busy}>
                  {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Save className="h-4 w-4 mr-1" /> Simpan</>}
                </Button>
                {selected !== "__new__" && (
                  <Button variant="destructive" onClick={remove}>
                    <Trash2 className="h-4 w-4 mr-1" /> Hapus
                  </Button>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
