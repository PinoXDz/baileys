# <div align='center'>Baileys - WhatsApp API</div>

<div align='center'>

![WhatsApp API](https://i.supa.codes/yJrRqe)

</div>

Baileys adalah library TypeScript berbasis WebSocket untuk berinteraksi dengan WhatsApp Web API.

# Penggunaan
Panduan terbaru telah dipublikasikan di https://baileys.wiki.

# Penyangkalan
Proyek ini **tidak berafiliasi, tidak berasosiasi, tidak diotorisasi, tidak didukung, dan tidak memiliki koneksi resmi dengan WhatsApp** maupun anak perusahaan atau afiliasinya.  
Situs resmi WhatsApp dapat ditemukan di whatsapp.com.  
"WhatsApp" serta nama-nama, merek dagang, lambang, dan gambar terkait adalah hak milik terdaftar dari pemilik masing-masing.

Para pengelola Baileys **tidak mendukung penggunaan aplikasi ini untuk praktik yang melanggar Ketentuan Layanan WhatsApp**.  
Kami menyerukan kepada setiap pengguna untuk menggunakan aplikasi ini secara bertanggung jawab dan sesuai tujuan awal pengembangannya.  
Gunakan atas kebijakan pribadi masing-masing. Jangan gunakan untuk spam. Kami tidak mendukung penggunaan untuk stalkerware, pesan massal, ataupun automasi pesan yang bersifat mengganggu.

### Lisensi

Proyek ini menggunakan lisensi [MIT License](https://github.com/WhiskeySockets/Baileys?tab=readme-ov-file#license), dan merupakan karya turunan dari Baileys oleh Rajeh Taher/WhiskeySockets.

Dengan menggunakan proyek ini, Anda dianggap telah menyetujui ketentuan lisensi tersebut.

## Tentang Modifikasi

Proyek ini merupakan hasil **modifikasi besar dari Baileys**, sebuah library open-source WhatsApp Web API yang awalnya ditulis dalam TypeScript dan menggunakan format ECMAScript Module (ESM).

Modifikasi ini difokuskan untuk membuat versi yang **sepenuhnya berbasis JavaScript murni dengan dukungan CommonJS (CJS)**. Dengan pendekatan ini, library menjadi **lebih fleksibel dan mudah diintegrasikan** ke dalam berbagai jenis runtime Node.js tanpa memerlukan proses transpilasi atau konfigurasi tambahan seperti `"type": "module"`.

### Poin Utama Modifikasi:

- **Konversi total dari TypeScript ke JavaScript**, untuk menyederhanakan proses pengembangan, debugging, dan distribusi.
- **Penggunaan format module CommonJS (CJS)** secara konsisten agar dapat digunakan di lingkungan Node.js manapun, termasuk proyek lama.
- **Kompatibel dengan modul-modul ESM modern**, melalui penggunaan dynamic import (`await import()`), tanpa mengorbankan arsitektur utama CJS.
- **Dukungan penuh terhadap tombol interaktif**
- Penyederhanaan berbagai struktur internal seperti manajemen sesi, koneksi, katalog produk, dan optimasi format media.
- File `proto` (WAProto) telah di-*compile* secara statis menjadi JavaScript untuk menghindari dependensi waktu jalan terhadap parser `.proto`.

## Instalasi

Gunakan salah satu manajer paket berikut untuk menginstal versi stabil:

```bash
npm install naruyaizumi
```
```bash
yarn add naruyaizumi
```
```bash
pnpm add naruyaizumi
```
## Informasi

Paket ini `membutuhkan` Node.js versi **20 atau lebih tinggi** untuk berjalan.

Proyek ini secara eksplisit ditujukan untuk lingkungan modern dan tidak mendukung Node versi lama. Dukungan akan selalu mengikuti versi LTS terbaru dari Node.js untuk menjaga performa dan kompatibilitas dengan ekosistem terbaru.

![metadata](https://i.supa.codes/kKcA8Q)

```
██╗███████╗██╗░░░██╗███╗░░░███╗██╗
██║╚════██║██║░░░██║████╗░████║██║
██║░░███╔═╝██║░░░██║██╔████╔██║██║
██║██╔══╝░░██║░░░██║██║╚██╔╝██║██║
██║███████╗╚██████╔╝██║░╚═╝░██║██║
╚═╝╚══════╝░╚═════╝░╚═╝░░░░░╚═╝╚═╝
```
Copyright © 2024 - 2025 Naruya Izumi
[꒰⚘꒱ Admin Contact ꒱⟡](https://linkbio.co/naruyaizumi)