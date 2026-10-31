# Bursa KoltukPro — Yerinde Döşemeli Mobilya Temizliği

Bursa’da belirlenen hizmet noktalarına adres servisi sunan; koltuk, kanepe, çekyat, köşe takımı, yatak ve döşemeli sandalye temizliği için WhatsApp üzerinden iletişim kurulmasını sağlayan tanıtım sitesi.

## 📌 Proje Hakkında
Bu proje, taşınması zahmetli veya mümkün olmayan mobilyaların ev/iş yeri adresinde profesyonel vakumlu makinelerle yerinde temizlenmesi hizmetini sunmak amacıyla hazırlanmıştır. 
Müşteriler, mobilyalarının fotoğrafını WhatsApp üzerinden ileterek ön değerlendirme ve fiyat bilgisi ister; hizmet kapsamı ve fiyat iletişim sırasında netleştirilir.

## 🚀 Kullanılan Teknolojiler
- **Derleyici & Sunucu:** [Vite](https://vitejs.dev/) v6
- **Temel Teknolojiler:** Semantic HTML5, Modern Vanilla JavaScript (ES Modules)
- **Tasarım & Stil:** Modern CSS3 Tasarım Sistemi (CSS Custom Properties / Tokens, Responsive Flex & Grid, hareket azaltma tercihi desteği)
- **Paket Yöneticisi:** npm

## 📂 Proje Dizin Yapısı
```text
bursa_clean/
├── docs/               # Mimari, kararlar, gereksinimler ve UI/UX yol haritası
├── public/             # Statik varlıklar (Favicon, robots.txt, görseller, videolar)
│   ├── images/         # Koltuk ve kanepe temizliği görselleri
│   └── videos/         # Vakumlu yıkama tanıtım ve uygulama videoları
├── src/
│   ├── config/         # Merkezi işletme ve iletişim yapılandırması (business.js)
│   ├── styles/         # CSS tokenları, temel, düzen ve bileşen stilleri
│   └── utils/          # Tema, WhatsApp URL üretici, telefon ve analitik yardımcıları
├── gizlilik.html       # Gizlilik ve veri kullanımı bilgilendirmesi
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
- **Erişilebilirlik:** Anlamlı başlık yapısı, klavye odak görünümü ve hareket azaltma tercihine saygı.
