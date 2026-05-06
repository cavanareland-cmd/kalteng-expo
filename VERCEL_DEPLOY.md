# Deploy ke Vercel

Project ini dikonfigurasi untuk Cloudflare Workers di environment Lovable. File berikut sudah disiapkan agar deploy ke Vercel tetap bisa jalan **tanpa mengubah preview Lovable**:

- `vercel.json` — Vercel build settings
- `vite.vercel.config.ts` — Vite config khusus Vercel (tanpa plugin Cloudflare)

## Langkah Deploy

### 1. Push ke GitHub
- Buka **Connectors → GitHub → Connect** di Lovable
- Transfer/sync project ke repo GitHub Anda

### 2. Import ke Vercel
- Buka https://vercel.com/new
- Pilih repo dari GitHub
- **Framework Preset**: pilih **Other** (jangan auto-detect)
- Build & install command sudah di-handle `vercel.json`

### 3. Environment Variables (Vercel → Project Settings → Environment Variables)
Tambahkan 3 variabel berikut. Nilainya bisa Anda copy dari file `.env` (lihat di Code Editor Lovable):

| Name | Value |
|------|-------|
| `VITE_SUPABASE_URL` | (dari `.env`) |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | (dari `.env`) |
| `VITE_SUPABASE_PROJECT_ID` | (dari `.env`) |

Set untuk **Production**, **Preview**, dan **Development**.

### 4. Deploy
Klik **Deploy**. Vercel akan menjalankan:
```
npm install --legacy-peer-deps
vite build --config vite.vercel.config.ts
```
Output di `.output/public` akan otomatis di-serve oleh Vercel.

### 5. Custom Domain
Setelah deploy sukses:
- Project → **Settings → Domains → Add**
- Masukkan domain Anda
- Ikuti instruksi DNS Vercel:
  - **Apex (`yourdomain.com`)**: A record → `76.76.21.21`
  - **www**: CNAME → `cname.vercel-dns.com`
- SSL otomatis aktif setelah propagasi.

## Catatan

- File `wrangler.jsonc`, `src/server.ts`, dan `vite.config.ts` (Cloudflare) **tetap dibiarkan** karena dipakai Lovable preview. Vercel mengabaikan file-file itu karena `vercel.json` menunjuk config sendiri.
- Jika build Vercel gagal karena dependency, jalankan lokal dulu: `npm install --legacy-peer-deps && vite build --config vite.vercel.config.ts` untuk verifikasi.
- Untuk Iframe embed di WordPress/Elementor, gunakan URL Vercel atau custom domain Anda.
