# Bursa KoltukPro — Adresinize Gelen Yerinde Koltuk ve Kanepe Temizliği

Bursa genelinde seyyar (mobil) profesyonel vakumlu koltuk, kanepe, köşe takımı ve araç koltuğu yıkama hizmeti sunan modern, hızlı ve müşteri odaklı web platformu.

## 📌 Proje Hakkında
Bu proje, taşınması zahmetli veya mümkün olmayan mobilyaların ev/iş yeri adresinde profesyonel vakumlu makinelerle yerinde temizlenmesi hizmetini sunmak amacıyla hazırlanmıştır. 
Müşteriler, sabit veya yanıltıcı fiyat listeleri yerine mobilyalarının fotoğrafını WhatsApp üzerinden ileterek net ve şeffaf fiyat teklifi alırlar.

## 🚀 Kullanılan Teknolojiler
- **Derleyici & Sunucu:** [Vite](https://vitejs.dev/) v6
- **Temel Teknolojiler:** Semantic HTML5, Modern Vanilla JavaScript (ES Modules)
- **Tasarım & Stil:** Modern CSS3 Tasarım Sistemi (CSS Custom Properties / Tokens, Responsive Flex & Grid, Açık/Koyu Tema desteği)
- **Paket Yöneticisi:** npm

## 📂 Proje Dizin Yapısı
```text
bursa_clean/
├── docs/               # Mimari, kararlar, gereksinimler ve UI/UX yol haritası
├── public/             # Statik varlıklar (Favicon, robots.txt, görseller, videolar)
│   ├── images/         # Gerçek uygulama fotoğrafları
│   └── videos/         # Sahada çekilmiş gerçek işlem videoları
├── src/
│   ├── config/         # Merkezi işletme ve iletişim yapılandırması (business.js)
│   ├── styles/         # CSS tokenları, temel, düzen ve bileşen stilleri
│   └── utils/          # Tema, WhatsApp URL üretici, telefon ve analitik yardımcıları
├── gizlilik.html       # Gizlilik Politikası ve KVKK aydınlatma metni
├── index.html          # Ana açılış sayfası (Landing Page)
├── package.json        # Bağımlılıklar ve npm scriptleri
└── vite.config.js      # Çok sayfalı (MPA) Vite yapılandırması
```

## 🛠️ Kurulum ve Çalıştırma

### 1. Bağımlılıkları Yükleme
```bash
npm install
```

### 2. Geliştirme Sunucusunu Başlatma
```bash
npm run dev
```
Yerel geliştirme sunucusu varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.

### 3. Production Build (Üretim Çıktısı Alma)
```bash
npm run build
```
Derleme çıktısı `/dist` klasörüne optimize edilmiş ve küçültülmüş (minified) olarak oluşturulur.

### 4. Production Önizleme
```bash
npm run preview
```

## 🧪 Yayın Öncesi Kalite ve Doğrulama Süreci
- **Sıfır Uydurma Politikası:** Henüz teyit edilmemiş işletme adresleri, sahte telefonlar veya yapay yorumlar bulunmaz.
- **Hafif ve Hızlı:** Sıfır harici CSS framework yükü, saf CSS ve optimize edilmiş medya varlıkları.
- **Erişilebilirlik ve Semantik:** W3C standartlarına uygun HTML5 ve WCAG kontrast uyumu.
