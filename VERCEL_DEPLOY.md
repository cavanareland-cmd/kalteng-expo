# Deploy ke Vercel via GitHub

Project ini siap deploy ke Vercel sebagai **SPA (Single Page Application)** static hosting. Konfigurasi Cloudflare untuk preview Lovable tetap dipertahankan.

## File Konfigurasi

- `vercel.json` — install/build command + SPA rewrites
- `vite.vercel.config.ts` — Vite config khusus Vercel (mode SPA, prerender index.html)
- `package.json` script: `npm run build:vercel`

Output build: `dist/client/` (static, sudah berisi `index.html`).

## Langkah Deploy

### 1. Push ke GitHub
- Lovable → menu **+** (kiri bawah chat) → **GitHub** → **Connect project**
- Otorisasi GitHub App → pilih akun/organisasi → **Create Repository**
- Sync otomatis bidirectional (push GitHub ↔ Lovable)

### 2. Import ke Vercel
- Buka https://vercel.com/new
- Pilih repo dari GitHub
- **Framework Preset**: pilih **Other** (jangan auto-detect)
- Build settings sudah dibaca otomatis dari `vercel.json`:
  ```
  Install:  npm install --legacy-peer-deps
  Build:    npm run build:vercel
  Output:   dist/client
  ```

### 3. Environment Variables
Vercel → Project Settings → **Environment Variables**. Set untuk **Production**, **Preview**, **Development**:

| Name | Value (copy dari `.env`) |
|------|--------------------------|
| `VITE_SUPABASE_URL` | `https://yhvmnletmvvdzrezznnc.supabase.co` |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | (lihat `.env`) |
| `VITE_SUPABASE_PROJECT_ID` | `yhvmnletmvvdzrezznnc` |

> Database backend (Lovable Cloud / Supabase) **tetap di-host di Lovable Cloud**. Vercel hanya hosting frontend. Auth, data, dan storage tetap berjalan via Supabase URL di atas. Tidak ada migrasi DB yang perlu dilakukan.

### 4. Deploy
Klik **Deploy**. Setelah sukses, Vercel akan memberi URL `*.vercel.app`.

### 5. Custom Domain
Settings → **Domains** → Add domain. Ikuti DNS instruction:
- **Apex** (`yourdomain.com`): A record → `76.76.21.21`
- **www**: CNAME → `cname.vercel-dns.com`

SSL otomatis aktif setelah propagasi DNS.

## Sinkronisasi Data Backend

- Supabase project sama dengan yang di Lovable preview → data konsisten antara preview Lovable, deployment Lovable, dan deployment Vercel.
- Auth (login/signup), RLS, storage semua langsung jalan tanpa konfigurasi tambahan.
- Jika nanti menambah tabel/edge function di Lovable Cloud, otomatis tersedia juga di Vercel deployment (selama env var di atas benar).

## Catatan

- File Cloudflare (`wrangler.jsonc`, `src/server.ts`, `vite.config.ts`) tetap dibiarkan untuk preview Lovable. Vercel tidak menyentuhnya karena pakai config terpisah.
- Mode SPA dipakai di Vercel agar tidak butuh runtime SSR Worker — semua route TanStack Router berjalan client-side dengan rewrite ke `index.html`.
- Jika perlu test build lokal: `npm install --legacy-peer-deps && npm run build:vercel`, lalu `npx serve dist/client`.
